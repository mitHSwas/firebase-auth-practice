import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const Login = () => {

    const [success, setSuccess] = useState({});
    const [passwordError, setPasswordError] = useState("");

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSuccess(user);
                form.reset()
                console.log(user);
            })
            .catch(error => {
                setPasswordError(error.message);
                console.error("Error", error);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Please login:</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your Email:</label>
                    <input type="email" name="email" className="form-control" id="formGroupExampleInput" placeholder="Email...." required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password:</label>
                    <input type="password" name="password" className="form-control" id="formGroupExampleInput2" placeholder="Password...." required />
                </div>
                {passwordError && <p className='text-danger'>{passwordError}</p>}
                {success.displayName && <p className='text-success'> {success.displayName} Your account login successful.</p>}
                <input className="btn btn-outline-warning" type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default Login;