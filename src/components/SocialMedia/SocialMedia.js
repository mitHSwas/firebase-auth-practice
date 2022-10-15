import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const SocialMedia = () => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => {
                console.error("error", error)
            })
    }

    const handleSingOut = () => {
        signOut(auth)
            .then(result => {
                setUser({})
                alert("Sign out successfully")
            })
            .catch(error => console.error("Error", error))
    }

    return (
        <div>
            {user.uid ? <div>
                <button onClick={handleSingOut} type="button" className="btn btn-danger m-2">Sign Out</button>
            </div>
                :
                <div>
                    <button onClick={handleGoogleSignIn} type="button" className="btn btn-primary m-2">Google Sign In</button>
                </div>}

            {user.uid && <div>
                <h1>Name: {user.displayName}</h1>
                <p>Your Email: {user.email}</p>
                <img src={user.photURL} alt="" />
            </div>}
        </div>
    );
};

export default SocialMedia;