import React, { useContext, useState, useEffect } from 'react'
import { db } from "../components/firebase";
import { collection, addDoc, getDoc, query, where, getDocs } from "firebase/firestore";

const DatabaseContext = React.createContext();

export function useDb() {
    return useContext(DatabaseContext)
}

export function DbProvider({ children }) {
    
    function createUser(userObject) {
        const profilesRef = collection(db, '/profiles');
        return addDoc(profilesRef, userObject);
    }

    async function getProfileData(uid) {
        const profilesRef = collection(db, '/profiles');
        const q = query(profilesRef, where("uid", "==", uid))
        
        const querySnapshot = await getDocs(q);
        //console.log(queryResult);
        //console.log(querySnapshot);
        //console.log(uid);
        //console.log(querySnapshot)

        const docs = [];

        querySnapshot.forEach((doc) => {
            docs.push(doc.data());
        })

        return docs[0];
    }

    const value = {
        createUser,
        getProfileData
    }
    

    return (
        <DatabaseContext.Provider value={value}>
            {children}
        </DatabaseContext.Provider>
    )
}