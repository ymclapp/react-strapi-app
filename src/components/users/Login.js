import './Login.css';

import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
//import { useNavigate, useLocation } from 'react-router-dom';  //not until router-v6

import axios from '../../api/axios';
const LOGIN_URL = '/auth/local'; //he says that this is in his node.js beginner course




//https://www.youtube.com/watch?v=X3qyxo_UTR4


const Login = () => {

    const { setAuth } = useAuth();

    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ identifier: username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    //withCredentials: true
                }
            );
            console.log(response?.data)
            console.log(response?.data.jwt)
            console.log(response?.data.user.confirmed)
            const jwt = response?.data.jwt;
            const confirmed = response?.data.user.confirmed;
            setAuth({ username, password, confirmed, jwt });
            setUsername('');
            setPassword('');
            setSuccess(true);
            // navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response === 500) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing/Incorrect Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/home">Go to Home</a>
                    </p>
                </section>
                
            ) : (

                <section className='login-section'>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
                    <h1 className='login-title text-center'>Sign In</h1>

                    <Form className='login-form' onSubmit={handleLoginSubmit}>

                        <FloatingLabel className='login-label' htmlFor='username'>Username:  </FloatingLabel>
                        <Form.Control
                            className='login-input'
                            type='text'
                            id='username'
                            ref={userRef}
                            autoComplete='off'
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                            required
                        />

                        <FloatingLabel className='login-label' htmlFor='password'>Password:  </FloatingLabel>
                        <Form.Control
                            className='login-input'
                            type='password'
                            id='password'
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <Button type='submit' className='login-button' disabled={!username || !password ? true : false}>Sign In</Button>
                        <br />
                        <p className='no-acct text-center'>
                            Don't have an account?<br />
                            <span className='line'>
                                <a href='/registration'> Create an Account</a>
                            </span>
                        </p>
                    </Form>

                </section>
            )}
        </>
    )
}

export default Login;
