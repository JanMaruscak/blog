import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const {user,setUser} = useContext(UserContext)
    
    return (
        <div>            
            <label>
                Email:
                <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" onClick={()=>setUser({name:user?.name, password: user?.password+"lol"})}/>
        </div>
    );
}

export default Login;
