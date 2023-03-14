import React from 'react';
import { createContext } from 'react';
import app from '../../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)


    }

    const logOut = () => {
        localStorage.removeItem('genious token')
        return signOut(auth);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }

    }, [])

    const authInfo = {

        user,
        loading,
        createUser,
        login,
        logOut,
        googleSignIn,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;