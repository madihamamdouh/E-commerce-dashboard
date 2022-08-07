import app from './config'
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged, signOut
} from "firebase/auth";


const auth = getAuth(app);

/**
 * 
 * @param {*} email 
 * @param {*} password 
 */
function login(email, password) {

    return signInWithEmailAndPassword(auth, email, password);
}

function logout() {

    return signOut(auth);

}

/**
 * 
 * @param {*} email 
 * @param {*} password 
 */
function signup(email, password) {

    return createUserWithEmailAndPassword(auth, email, password)

}

/**
 * 
 * @param {*} authCallback 
 */
function registerForAuthChange(authCallback) {
    onAuthStateChanged(auth, authCallback);

}


export {

    registerForAuthChange,
    login,
    logout,
    signup
}