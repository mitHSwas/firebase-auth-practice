import React from 'react';

const Register = () => {
    return (
        <div>
            <h1 className='text-primary'>Please Make Your Account!</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your Email:</label>
                    <input type="email" name="email" className="form-control" id="formGroupExampleInput" placeholder="Email...." required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email Password:</label>
                    <input type="password" name="password" className="form-control" id="formGroupExampleInput2" placeholder="Password...." required />
                </div>
            </form>
        </div>
    );
};

export default Register;