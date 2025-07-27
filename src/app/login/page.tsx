"use client"
import Link from 'next/link'
import styles from '../../styles/login.module.scss'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {

    const router = useRouter();

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        setError("");
        try{
            await signInWithEmailAndPassword(auth, form.email, form.password)
            router.push('/products')
        }
        catch(err : any){
            setError("Invalid email or password.")
        }
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.logInBox}>
                    <h2>Login</h2>
                    <p className={styles.welcomeText}>Welcome back! Please log in to continue.</p>
                    {error && <p className={styles.errorText}>{error}</p>}
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <input name='email' value={form.email} onChange={handleChange}  className={styles.signInInput} type='email' placeholder='Email' required/>
                        <input name='password' value={form.password} onChange={handleChange} className={styles.signInInput} type='password' placeholder='Password' required/>
                        <button type='submit' className={styles.loginButton}>Log In</button>
                    </form>
                    <p className={styles.signUpText}>Don’t have an account?{" "}
                        <Link href="/signup">
                            <strong className={styles.signUpLink}>Sign Up</strong>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}