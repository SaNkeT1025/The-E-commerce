import styles from  '../../styles/signup.module.scss'

export default function SignUpPage() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.signup_form}>
                    <div className={styles.left_form_section}>
                        <h2 className={styles.heading_style}>Create Account</h2>
                        <p>Sign up to get started</p>
                        <form>
                            <div className={styles.first_last_name_flexbox}>
                                <input type='text' name='firstname' placeholder='First Name' required/>
                                <input type='text' name='lastname' placeholder='Last Name' required/>
                            </div>
                            <input type='date' name='birthdate' placeholder='Birth Date' required/><br/>
                            <input type='email' name='email' placeholder='email' required/><br/>
                            <input type='password' name='password' placeholder='Password' required/><br/>

                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>

                    <div className={styles.right_form_section}>

                    </div>
                </div>
            </div>
        </>
    );
}