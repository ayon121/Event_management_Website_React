
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const Authproviders = ({ children }) => {

    // setting the user state
    const [user , setUser] = useState(null)
    // set loading
    const [loading , setloading] = useState(true)


    // user monitoring
    useEffect(()=> {
        const Unsubscirbe = onAuthStateChanged(auth , currentUser => {
            console.log('user in auth state' , currentUser);
            setUser(currentUser)
            setloading(false)
        })
        return () => {
            Unsubscirbe()
        }
    }, [])

    // User Create with email and password
    const createUser = (email , password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    // Login User with email and password
    const loginUser = (email , password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    // Logout USer
    const logout = () => {
        setloading(true)
        return signOut(auth)
    }




    // passing the value
    const authInfo = {
        user,
        createUser,
        loginUser,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

Authproviders.propTypes = {
    children : PropTypes.node

};

export default Authproviders;