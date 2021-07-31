module.exports = {

    notice: async (req, res) => {
        const db = req.app.get('db');
        const myNotice = await db.current_notice();

        return res.status(200).send(myNotice);
    }

}