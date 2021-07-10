import React, { useState } from 'react';
import axios from 'axios';

function Login(){

    const [loginEmail,    setLoginEmail   ] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [regEmail,      setRegEmail     ] = useState('');
    const [regPass,       setRegPass      ] = useState('');
    const [regPass2,      setRegPass2     ] = useState('');

    function onChangeLoginEmail(val)    { setLoginEmail( prevEmail => val) }
    function onChangeLoginPassword(val) { setLoginPassword( prevPass => val) }
    function onChangeRegEmail(val)      { setRegEmail( prevEmail => val) }
    function onChangeRegPass(val)       { setRegPass( prevPass => val ) }
    function onChangeRegPass2(val)      { setRegPass2( prevPass => val )}

    function onClickLogin(){
        axios.post('/api/auth/login', {loginEmail, loginPassword})
            .then(res => {
                setLoginEmail( prevEmail => '')
                setLoginPassword( prevPass => '')
                console.log(res)
            })
            .catch( e => {
                setLoginEmail( prevEmail => '')
                setLoginPassword( prevPass => '')
                console.log(e)
            })
    }


    return(
        <>
            <div>
                <input className='login' placeholder='email' onChange={e => onChangeLoginEmail(e.target.value)} ></input>
                <input className='login' placeholder='password' onChange={e => onChangeLoginPassword(e.target.value)} ></input>
                <button onClick={e => onClickLogin()}>Login</button>
            </div>
            <div>
                <input className='register' placeholder='email' onChange={e => onChangeRegEmail(e.target.value)} ></input>
                <input className='register' placeholder='password' onChange={e => onChangeRegPass(e.target.value)} ></input>
                <input className='register' placeholder='confirm password' onChange={e => onChangeRegPass2(e.target.value)} ></input>
                <button>Register</button>
            </div>
        </>
    )
}

export default Login;