import React from "react";
import { UserContext } from "../context/UserContext";

class Login extends React.Component<StateUser> {
  static contextType = UserContext;
  state: StateUser = {
    UserName: "pepa",
    EmailAddress: "pepa@gmail.com",
    Password: "",
  };
  submitNew = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let user = {
      UserName: this.state.UserName,
      EmailAddress: this.state.EmailAddress,
      Password: this.state.Password,
      Created: new Date(),
    };

    fetch(`/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log(res);
        let contextUser = {
          Password: this.state.Password,
          EmailAddress: this.state.EmailAddress,
          UserName: this.state.UserName,
        };
        if (res.status === 200) this.context.login(contextUser);
        else this.context.login({});
      })
      .catch((err) => console.log(err));
  };
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  render() {
    if (!this.context.user.UserName)
      return (
        <div className="main-wrapper">
          <h1>Login to your account!</h1>
          <form className="main-wrapper" onSubmit={this.submitNew}>
            <div className="input-wrapper">
              <input
                placeholder="User Name"
                type="text"
                name="UserName"
                onChange={this.onChange}
                value={this.state.UserName}
              />
            </div>
            <div className="input-wrapper">
              <input
                placeholder="Email"
                type="email"
                name="Email"
                onChange={this.onChange}
                value={this.state.EmailAddress}
              />
            </div>
            <div className="input-wrapper">
              <input
                placeholder="Password"
                type="password"
                name="Password"
                onChange={this.onChange}
                value={this.state.Password}
              />
            </div>
            <button type="submit">Log in</button>
          </form>
        </div>
      );
    else {
      return (
        <div className="main-wrapper" style={{ width: "500px" }}>
          <button type="submit" onClick={() => this.context.login({})}>
            Log out
          </button>
        </div>
      );
    }
  }
}

export default Login;
