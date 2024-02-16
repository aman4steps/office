import React from 'react';

export default function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
