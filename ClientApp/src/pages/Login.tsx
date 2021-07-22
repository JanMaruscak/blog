import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";

type MyState = {
    UserName: string,
    Email: string,
    Password: string,
};

class Login extends React.Component<MyState> {

    static contextType = UserContext
    state: MyState = {
        UserName: "pepa",
        Email: "pepa@gmail.com",
        Password: "pepa",

    }
    submitNew = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let user = {
            UserName: this.state.UserName,
            EmailAddress: this.state.Email,
            Password: this.state.Password,
            Created: new Date()
        };
        
        fetch(`/api/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then(res => {
                console.log(res)
                let contextUser = {
                    Password: this.state.Password,
                    EmailAddress: this.state.Email,
                    UserName: this.state.UserName
                }
                if(res.status==200)
                    this.context.login(contextUser)       
                else
                    this.context.login({})
            })
            .catch(err => console.log(err));
        
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    };
    render(){
    return (
        <div className="main-wrapper">
            <h1>Login to your account!</h1>
            <form className="main-wrapper" onSubmit={this.submitNew}>
                <div className="input-wrapper">
                    <input placeholder="User Name" type="text" name="UserName" onChange={this.onChange} value={this.state.UserName}/>
                </div>
                <div className="input-wrapper">
                    <input placeholder="Email" type="email" name="Email" onChange={this.onChange} value={this.state.Email}/>
                </div>
                <div className="input-wrapper">
                    <input placeholder="Password" type="password" name="Password" onChange={this.onChange} value={this.state.Password}/>
                </div>
                <button type="submit" >Log in</button>
            </form>
        </div>
    );
    }
}

export default Login;
