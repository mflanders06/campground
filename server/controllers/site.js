module.exports = {

    sites: async (req, res) => {
        const db = req.app.get('db');
        const mySites = await db.site_list();

        return res.status(200).send(mySites);
    }

}