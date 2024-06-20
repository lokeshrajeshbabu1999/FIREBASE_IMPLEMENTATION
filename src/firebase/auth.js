// src/firebase/auth.js
import firebase from './firebaseConfig';

export const signUp = async (email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('User account created & signed in!');
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        } else {
            console.error(error);
        }
    }
};

export const signIn = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('User signed in!');
    } catch (error) {
        console.error(error);
    }
};

export const signOut = async () => {
    try {
        await firebase.auth().signOut();
        console.log('User signed out!');
    } catch (error) {
        console.error(error);
    }
};
