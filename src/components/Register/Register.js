import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const Register = () => {

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        //password validation
        if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(^.{6,}$)/.test(password)) {
            setError("Password must be at least one special character, one number and 6 character length.")
            setSuccess(false)
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setSuccess(true);
                form.reset();
                setError("");
                addDisplayName(name);
                sendVerificationEmail();
            })
            .catch(error => setError(error.message))
    }

    const addDisplayName = name => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const sendVerificationEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("Verification email send. Please make your email verified.")
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary'>Please Create Your Account!</h1>
            <form onSubmit={handleRegistration}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput0" className="form-label">Your Name:</label>
                    <input type="text" name="name" className="form-control" id="formGroupExampleInput0" placeholder="Name...." required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your Email:</label>
                    <input type="email" name="email" className="form-control" id="formGroupExampleInput" placeholder="Email...." required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email Password:</label>
                    <input type="password" name="password" className="form-control" id="formGroupExampleInput2" placeholder="Password...." required />
                </div>
                {error && <p className='text-danger'>{error}</p>}
                {success && <p className='text-success'> Congratulations!!! Your Account created successfully</p>}
                <input className="btn btn-outline-warning" type="submit" value="Submit"></input>
            </form>
            <p><small>Already Have An Account? Please <Link to="/login">Login</Link> </small></p>
        </div>
    );
};

export default Register;