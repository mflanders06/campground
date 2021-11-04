const bcryptjs = require('bcryptjs');

module.exports = {

    register: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get('db');
        if(!email){
            res.status(400).json('Please provide an email and password');
        }else{
            await db
                .user
                .find_user_by_email(email)
                .then ( async (innerUser) => {
                    if( innerUser.length > 0 ) {
                        res.status(500).json('Email account already in use');
                    }else{

                        const salt = bcryptjs.genSaltSync(10)
                        const hash = bcryptjs.hashSync(password, salt)

                        await db.user.create_user(
                            email,
                            hash
                        )
                        .then(() => {
                            req.session.user.data.email = email;
                            res.status(200).json('registered');
                        } )
                        .catch((err) => {
                            console.log(err)
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get('db');
        
        await db
            .user
            .find_user_by_email(email)
            .then((response) => {
                if(!(response.length > 0)){
                    res.status(401).json('Email or password do not match our records');
                }else{
                    const areEqual = bcryptjs.compareSync(password, response[0].password);
                    if(!areEqual){
                        res.status(401).json('Username or password do not match our records');
                    }else{
                        delete response[0].password
                        req.session.user = response[0];
                        console.log(req.session.user);
                        res.status(200).json(req.session.user);
                    }
                }
            })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.status(200).json('logout');
    },

    isLoggedIn: (req, res) => {
        console.log(req.session)

        if(!(req.session === undefined)){
            if(!(req.session.data === undefined)){
                if(!(req.session.data.email === undefined)){
                    return res.status(200).json('logged in');        
                }
            }
        }
        return res.status(200).json('not logged in');
    },

    isAdmin: (req, res) => {
        //console.log('This is req.session: ', req.session)

        if(!(req.session === undefined)){
            if(!(req.session.data === undefined)){
                if(!(req.session.data.admin === undefined)){
                    return res.status(200).json('is admin')
                }
            }
        }
        return res.status(200).json('not admin');
    }

}