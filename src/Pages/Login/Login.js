//create a Login component with bearer token

import React from "react";
import styles from "./Login.module.css";

function Login() {
    return (
        <div className={styles.container}>
        <h1>Login</h1>
        <form>
            <label>
            Username:
            <input type="text" name="username" />
            </label>
            <label>
            Password:
            <input type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
    }

export default Login;