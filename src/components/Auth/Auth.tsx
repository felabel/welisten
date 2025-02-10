import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from "../../services/authApi";
import styles from "./auth.module.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type RegisterFormInputs = {
  username: string;
  email: string;
  password: string;
};

type LoginFormInputs = {
  email: string;
  password: string;
};

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const {
    register: registerUserForm,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = useForm<RegisterFormInputs>();

  const {
    register: loginUserForm,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormInputs>();

  const [registerUser, { isLoading: isRegistering }] =
    useRegisterUserMutation();
  const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();

  const onRegisterSubmit = async (data: RegisterFormInputs) => {
    console.log("register data", data);
    try {
      await registerUser(data).unwrap();
      navigate("/dashoard");
      setIsSignUp(false);
    } catch (error) {
      console.log(error);
      // alert(error?.data?.message || "Registration failed");
    }
  };

  const onLoginSubmit = async (data: LoginFormInputs) => {
    try {
      await loginUser(data).unwrap();
      navigate("/dashoard");
      toast.success("Login successful!");
    } catch (error) {
      // @ts-ignore
      toast.error(error?.data?.error || "Login failed");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${
          isSignUp ? styles.rightPanelActive : ""
        }`}
      >
        {/* Registration Form */}
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Username"
              {...registerUserForm("username", {
                required: "username is required",
              })}
            />
            {registerErrors.username && (
              <p className={styles.error}>{registerErrors.username.message}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              {...registerUserForm("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {registerErrors.email && (
              <p className={styles.error}>{registerErrors.email.message}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              {...registerUserForm("password", {
                required: "Password is required",
              })}
            />
            {registerErrors.password && (
              <p className={styles.error}>{registerErrors.password.message}</p>
            )}

            <button type="submit" disabled={isRegistering}>
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>

        {/* Login Form */}
        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
          <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
            <h1>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              {...loginUserForm("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {loginErrors.email && (
              <p className={styles.error}>{loginErrors.email.message}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              {...loginUserForm("password", {
                required: "Password is required",
              })}
            />
            {loginErrors.password && (
              <p className={styles.error}>{loginErrors.password.message}</p>
            )}

            <a href="#">Forgot your password?</a>
            <button type="submit" disabled={isLoggingIn}>
              {isLoggingIn ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Overlay Panels */}
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={styles.ghost}
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button
                className={styles.ghost}
                onClick={() => setIsSignUp(true)}
              >
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
