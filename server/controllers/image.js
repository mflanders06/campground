module.exports = {

    upload: async (req, res) => {
        const file = req.file;
        console.log(file);
        const result = await uploadFile(file)
        console.log(result)
        const site = req.body.site;
        res.send('upload OK');
    }

}