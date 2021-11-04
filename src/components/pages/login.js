import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Redirect } from 'react-router-dom';
import * as actions from '../../Store/Actions';
import store from '../../Store/Store';
import { connect } from 'react-redux';


function Login(props){
    const [loginEmail,    setLoginEmail   ] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [regEmail,      setRegEmail     ] = useState('');
    const [regPass,       setRegPass      ] = useState('');
    //const [regPass2,      setRegPass2     ] = useState('');

    const history = useHistory();
    const routeChangeHome = () => {
        let path = `/`
        history.push(path)
    }

    function onChangeLoginEmail(val)    { setLoginEmail( prevEmail => val) }
    function onChangeLoginPassword(val) { setLoginPassword( prevPass => val) }
    function onChangeRegEmail(val)      { setRegEmail( prevEmail => val) }
    function onChangeRegPass(val)       { setRegPass( prevPass => val ) }
    function setAuthTrue()              { props.authTrue(); return }
    function setAdminTrue()             { props.adminTrue(); return }
    //function onChangeRegPass2(val)      { setRegPass2( prevPass => val )}

    async function onClickLogin(){
        let email = loginEmail;
        let password = loginPassword;
        await axios.post('/api/auth/login', {email, password})
            .then(res => {
                console.log(res)
                setLoginEmail( prevEmail => '');
                setLoginPassword( prevPass => '');
                console.log(res)
                if(!(res.data === undefined)){
                    if(!(res.data.user_key === undefined)){
                        //console.log(props)
                        setAuthTrue()
                        if (res.data.admin === true){
                            setAdminTrue()
                        }
                    }
                }

            })
            .catch( e => {
                console.log(e)
            })
    }

    function onClickRegister(){
        let email = regEmail;
        let password = regPass;
        //let password2 = regPass2;
        axios.post('/api/auth/register', { email, password })
            .then(res => {
                setRegEmail( prevEmail => '');
                setRegPass( prevPass => '');
                //setRegPass2( prevPass => '');
                console.log(res)
                if(!(res.data === undefined)) {
                    if(!(res.data.user_key = undefined)){

                    }
                }
            })
            .catch (e => {
                console.log(e)
            })
    }


    return(
        <>
            <div>
                <input className='login' placeholder='email' onChange={e => onChangeLoginEmail(e.target.value)} ></input>
                <input type='password' className='login' placeholder='password' onChange={e => onChangeLoginPassword(e.target.value)} ></input>
                <button onClick={e => onClickLogin()}>Login</button>
            </div>
            <div>
                <input className='register' placeholder='email' onChange={e => onChangeRegEmail(e.target.value)} ></input>
                <input type='password' className='register' placeholder='password' onChange={e => onChangeRegPass(e.target.value)} ></input>
                
                <button onClick={e => onClickRegister()}>Register</button>
            </div>
        </>
    )
}

let mapDispatchtoProps = {
    authTrue:       actions.authTrue,
    authFalse:      actions.authFalse,
    adminTrue:      actions.adminTrue,
    adminFalse:     actions.adminFalse
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps, mapDispatchtoProps) (Login);

//<input className='register' placeholder='confirm password' onChange={e => onChangeRegPass2(e.target.value)} ></input>