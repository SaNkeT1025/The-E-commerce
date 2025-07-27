"use client"

import { useState } from 'react';
import styles from  '../../styles/signup.module.scss'
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';


export default function SignUpPage() {

    const router = useRouter();
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        birthdate: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try{
            const userCred = await createUserWithEmailAndPassword(
                auth,
                form.email,
                form.password
            )
            console.log("UserCred:", userCred);
            console.log("Form values:", form);

            await setDoc(doc(db, 'users',userCred.user.uid),{
                uid: userCred.user.uid,
                firstname: form.firstname,
                lastname: form.lastname,
                birthdate: form.birthdate,
                email: form.email,
                createdDate: new Date(),
            })
            console.log("UserCred:", userCred);
            console.log("Form values:", form);

            router.push("/products");
        }
        catch(err: any){
            setError(err.message);
        }
    }

    const handleSignInRedirection = () => {
        router.push("./login")
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.signup_form}>
                    <div className={styles.left_form_section}>
                        <h2 className={styles.heading_style}>Create Account</h2>
                        <p>Sign up to get started</p>
                        <form onSubmit={handleSubmit}> 
                            <div className={styles.first_last_name_flexbox}>
                                <input className={styles.input_signup} type='text' name='firstname' placeholder='First Name' onChange={handleChange} required/>
                                <input className={styles.input_signup} type='text' name='lastname' placeholder='Last Name' onChange={handleChange} required/>
                            </div>
                            <input className={styles.input_signup} type='date' name='birthdate' placeholder='Birth Date' onChange={handleChange} required/><br/>
                            <input className={styles.input_signup} type='email' name='email' placeholder='email' onChange={handleChange} required/><br/>
                            <input className={styles.input_signup} type='password' name='password' placeholder='Password' onChange={handleChange} required/><br/>

                            <button className={styles.signUpButton} type='submit'>Sign Up</button>
                        </form>
                    </div>

                    <div className={styles.right_form_section}>
                        <div className={styles.signInDiv}><p className={styles.signInText}>Already a member</p><button className={styles.signInButton} onClick={handleSignInRedirection}>Sign in</button></div>
                    </div>
                </div>
            </div>
        </>
    );
}