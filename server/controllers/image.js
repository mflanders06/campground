const { uploadFile, getFileStream, deleteFile } = require('../s3');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

module.exports = {

    insert_img: async (req, res, next) => {
        const file = req.file;
        const { photo, description, site_key, main } = req.body;
        const imgdesc = description;
        const db = req.app.get('db');
        await db.insertImage(photo, imgdesc, site_key, main)
        .then(() => {
            next()
        })
        .catch((error) => {
            console.log(error)
        })
        
    },

    upload: async (req, res) => {
        const file = req.file;
        //console.log('this is second file: ', file);
        const result = await uploadFile(file)
        await unlinkFile(file.path)
        const { description, site, main } = req.body;
        const photo = file.filename;
        const site_key = site;
        const imgdesc = description;
        console.log('this is body: ', req.body)
        const db = req.app.get('db');
        await db.insertImage(photo, imgdesc, site_key, main)
        .then(() =>{
            res.send({ imagePath: `/images/${result.Key}` })
        })
        .catch((error) =>{
            console.log(error)
        })
        
    },

    download: async (req, res) => {
        const key = req.params.key
        const readStream = getFileStream(key)

        readStream.pipe(res)

    },

    delete: async (req, res, next) => {
        console.log('here i am: ', req.body)
        const key = req.body.key;
        const db = req.app.get('db');
        await deleteFile(key)
        await db.del_image(key)
        .then(() => {
            console.log(key)
            return res.status(200).send(key)
        })
        .catch((error) => {
            console.log(error)
        })
    },

    delete_imgDb: async (req, res) => {
        const key = req.body.key
        const db = req.app.get('db')
        await db.del_image(key)
        .then(() => {
            console.log(key)
            return res.status(200).send(key)
        })
        .catch((error) => {
            console.log(error);
        })
    },

    image_list: async (req, res) => {
        const db = req.app.get('db');
        await db.image_list()
        .then((imgList) => {
            return res.status(200).send(imgList);
        })
        .catch ((error) => {
            console.log(error)
        })

    }

}