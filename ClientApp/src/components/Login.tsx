import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const user = useContext(UserContext)
    
    return (
        <div>
            {user}
            <label>
                Email:
                <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </div>
    );
}

export default Login;
