import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.init';

const auth = getAuth(app);

export const authContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user with email
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User with email
    const userlogin = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password)
    }

    // Display user's info
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => {
            return unsubscribe();
        }
    },[])

    // SignOut User
    const logOut = () => {
        signOut(auth)
        .then(() => {})
        .catch((error) => {});
    }

    const authInfo = { user, createUser, userlogin, logOut }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;