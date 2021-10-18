const { uploadFile, getFileStream, deleteFile } = require('../s3');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

module.exports = {

    upload: async (req, res) => {
        const file = req.file;
        console.log(file);
        const result = await uploadFile(file)
        await unlinkFile(file.path);
        console.log(result)
        const description = req.body.description;
        res.send({ imagePath: `/images/${result.Key}` });
    },

    download: async (req, res) => {
        const key = req.params.key
        const readStream = getFileStream(key)

        readStream.pipe(res)
    },

    delete: async (req, res) => {
        const key = req.params.key
        const result = await deleteFile(key)
        await deleteFile(key)
        console.log(result);
        res.sendStatus(200);

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