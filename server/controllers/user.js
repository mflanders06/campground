const bcrypt = require('bcryptjs');

module.exports {

    register: (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get('db');
        if(!username){
            res.status(400).json('Please provide a username and password');
        }else{
            db
                .user
                .find_user_by_email(email)
                .then ((innerUser) => {
                    if( innerUser.length > 0 ) {
                        res.status(500).json('Username Unavailable');
                    }else{
                        const { email, password } = req.body;
                        cost hash = bcryptjs.hashSync(password);
                        db
                            .user
                                .create_user(email, hash)
                                .then(() => {
                                    req.session.loggedIn = true;
                                    res.ststus(200).json('registered');
                                } )
                    }
                })
        }
    }

    
}