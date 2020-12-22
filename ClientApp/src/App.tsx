import React, {useState} from 'react';
import Login from './components/Login';
import './App.css';
import {UserContext} from "./context/UserContext";

function App() {
    const [value, setValue] = useState("context");
    // @ts-ignore
    return (
    <div className="App">
        <UserContext>
      <Login/>
        </UserContext>
    </div>
  );
}

export default App;
