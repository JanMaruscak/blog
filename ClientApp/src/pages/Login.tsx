import React from 'react';

function Login() {
    return (
        <div className="main-wrapper">
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd" name="pwd"/>
            </form>
        </div>
    );
}

export default Login;
