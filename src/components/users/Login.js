import './Login.css';

import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';  //not until router-v6

import axios from '../../api/axios';
const LOGIN_URL = '/auth/local'; //he says that this is in his node.js beginner course




//https://www.youtube.com/watch?v=X3qyxo_UTR4


const Login = () => {

    const { setAuth } = useAuth();
    const history = useHistory();

    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    //const [jwt, setJwt] = useState('');

    
    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if(loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);
    
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleLogout = () => {
        setUser({});
        setUsername('');
        setPassword('');
        localStorage.clear();
        history.push('/login');
        window.location.reload();
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const user = {username, password};
        console.log('Submitting....');
        alert('Thank you for logging in!  Please wait while we verify your information');

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ identifier: username, password }, user),
                {
                    headers: { 'Content-Type': 'application/json' },
                    //withCredentials: true
                }
            );
            console.log(response?.data)
            console.log(response?.data.jwt)
            console.log(response?.data.user.username)
            console.log(response?.data.user.confirmed)
            const jwt = response?.data.jwt;
            //const jsonData = response?.json({});
            const confirmed = response?.data.user.confirmed;

            setAuth({ username, password, user,confirmed, jwt });
            setUser(response?.data.user);
            setUsername('');
            setPassword('');
            setSuccess(true);
            localStorage.setItem('user', JSON.stringify(response?.data.user));
            history.push('/');
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

if (user) {
    return (
        <div className='text-center'>
            <h2 className='not_header'>Welcome {user.firstName}!</h2>
            <br />
            <Button onClick={handleLogout}>Logout</Button>            
        </div>
    );
}


    return (
        <>
            {success ? (
                <section>
                    <h2>{user.firstName}, you are logged in!</h2>
                    {/* <h1>{JSON.stringify(user.username)}</h1> */}
                    <br />
                    <p>
                        <a href="/home">Go to Home</a>
                    </p>
                </section>
                
            ) : (

                <section className='login-section ats-background-logo'>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
                    <h2 className='login-title text-center'>Sign In</h2>

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
