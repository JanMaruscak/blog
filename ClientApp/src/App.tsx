import React, {useState,useMemo} from 'react';
import Login from './components/Login';
import './App.css';
import {UserContext} from "./context/UserContext";

function App() {
    const [user, setUser] = useState();
    
    const value = { user, setUser };
    return (
    <div className="App">
        <UserContext.Provider value={value}>
      <Login/>
        </UserContext.Provider>
    </div>
  );
}

export default App;
