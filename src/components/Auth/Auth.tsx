import { useState } from "react";
import styles from "./auth.module.scss";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${
          isSignUp ? styles.rightPanelActive : ""
        }`}
      >
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
          <form>
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className={styles.ghost} onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>

              <button className={styles.ghost} onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
