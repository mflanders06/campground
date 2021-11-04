import { Link } from 'react-router-dom';
import routes from '../routes';
import SiteMenu from './SiteMenu';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import * as actions from '../Store/Store';
import store from '../Store/Store';
import { connect, useSelector } from 'react-redux';

function Nav(props) {

    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
/*
    let myAdmin = 'ugly';
    let myAuth = 'what?'

    if(props.auth === 'true'){
        myAuth = 'True'
    }
    if(props.admin === 'true'){
        myAdmin = 'true'
    }

console.log(props)

    useEffect(() => {
        checkAuth();
        checkAdmin();
    }, [isAuth, isAdmin])

    async function checkAuth(){
        await axios 
            .get('/api/auth/isLoggedIn')
            .then((response) => {
                //console.log(response.data);
                if(response.data === 'logged in' && isAuth === false){
                    return setIsAuth(true);
                } else {
                    if(response.data === 'not logged in' && isAuth === true){
                        setIsAuth(false);
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    async function checkAdmin(){
        await axios 
            .get('/api/auth/isAdmin')
            .then((response) => {
                //console.log(response.data);
                if(response.data === 'admin'){
                    setIsAdmin(true);
                } else {
                    if(response.data === 'not admin'){
                        setIsAdmin(false);
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
*/


const navAuth = useSelector((store) => store.auth);
const navAdmin = useSelector((store) => store.admin)

console.log('Outer console: ', props.authTrue, props.adminTrue)

const mapStatetoProps = (state) => {
    console.log("state", state);
    return {
        auth: store.auth,
        admin: store.admin
    }
}



    function logout(){
        axios.post('api/auth/logout')
            .then((response)=> {
                console.log(response)
            })
            .catch((err)=> {
                console.log(err)
            })
    }

    if (props.auth){
        if (props.admin){
            console.log('I am admin')
            return (
                <div className="nav">
                    <div className='leftButtons'>
                        <Link to="/" className='navButton'><button>Home</button></Link>
                        <SiteMenu />
                    </div>
                    <div>Campground Reservations</div>
                    <div className='rightButtons'>
                        <Link to="/Admin" className='navButton'><button>admin</button></Link>
                        <Link to="/login" onClick={logout}className='navButton'><button>Logout</button></Link>
                    </div>
                </div>
            )
        }
        console.log('I am logged in')
        return (
            <div className="nav">
                <div className='leftButtons'>
                    <Link to="/" className='navButton'><button>Home</button></Link>
                    <SiteMenu />
                </div>
                <div>Campground Reservations</div>
                <div className='rightButtons'>
                     <Link to="/login" onClick={logout}className='navButton'><button>Logout</button></Link>
                </div>
            </div>
        )

        }
    console.log('I am logged out')
    return (
        <div className="nav">
            <div className='leftButtons'>
                <Link to="/" className='navButton'><button>Home</button></Link>
                <SiteMenu />
            </div>
            <div>Campground Reservations</div>
            <div className='rightButtons'>
                <Link to="/login" className='navButton'><button>Login/Register</button></Link>
             </div>
        </div>
    )
}

    export default connect(state => state , {...actions}) (Nav);