module.exports = {

    notice: (req, res) => {
        const { notice } = req.body;
        const db = req.app.get('db');
        db
            .current_notice()
            .then (() => {

                    const { notice } = req.body;
                    db
                        .user
                            .create_user(email, hash)
                            .then(() => {
                                req.session.loggedIn = true;
                                res.status(200).json('registered');
                            } )
                }
            )
    }

}