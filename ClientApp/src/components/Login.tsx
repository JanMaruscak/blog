import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";
import axios from 'axios';

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    /*const {user,setUser} = useContext(UserContext)*/

    const user = {
        username: "Jignesh",
        password: "ahojky"
    };
    const handleLogin = () => {
        axios.post("https://localhost:5001/api/login", {username: "Jignesh", password: "lol"}).then(r => console.log(r.data))
    };


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
            <input type="submit" value="Submit" onClick={()=> handleLogin()}/>
            <button onClick={()=> handleLogin()}>LogIN!</button>
        </div>
    );
}

export default Login;
