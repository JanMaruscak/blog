import React, {useState,useMemo} from 'react';
import Login from './components/Login';
import './App.css';
import {UserContext} from "./context/UserContext";

function App() {
    const [user, setUser] = React.useState<IUser | undefined>();
    return (
    <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
      <Login/>
        </UserContext.Provider>
    </div>
  );
}

export default App;
