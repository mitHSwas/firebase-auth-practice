import React, { useState } from 'react';

const Register = () => {

    const [error, setError] = useState("")

    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        //password validation
        if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(^.{6,}$)/.test(password)) {
            setError("Password must be at least one special character, one number and 6 character length")
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary'>Please Make Your Account!</h1>
            <form onSubmit={handleRegistration}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your Email:</label>
                    <input type="email" name="email" className="form-control" id="formGroupExampleInput" placeholder="Email...." required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email Password:</label>
                    <input type="password" name="password" className="form-control" id="formGroupExampleInput2" placeholder="Password...." required />
                </div>
                <input className="btn btn-outline-warning" type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default Register;