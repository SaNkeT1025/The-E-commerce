'use client'

import React, { createContext, useContext, useEffect, useState  } from 'react'
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../lib/firebase";

const AuthContext = createContext<{user: User | null}>({user: null})

export const AuthProvider = ( {children} : {children: React.ReactNode} ) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setUser(user));
        return () => unsub();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}


export const useAuth = () => useContext(AuthContext);