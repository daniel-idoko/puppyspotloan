import { createContext } from "react";
import Firebase from 'firebase/compat/app';
import { Firestore } from "firebase/firestore";
import { firebase, db } from '../libs/firebase_initialization'; // add firebase to project

interface ValueProps {
    firebase: Firebase.app.App
    db: Firestore
}
export const FirebaseContext = createContext<ValueProps>({
        firebase: firebase,
        db: db
}); 
