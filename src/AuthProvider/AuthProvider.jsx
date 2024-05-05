import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";
import app from "../../firebase.init";
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider= new GoogleAuthProvider()
 const auth=getAuth(app)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }

    const googleLogin=()=>{
        signInWithPopup(auth,provider)

    }
    const emailPassLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
            console.log(currentUser);
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo={
        user,
        createUser,
        loading,
        logOut,
        googleLogin,
        emailPassLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
}

export default AuthProvider;
