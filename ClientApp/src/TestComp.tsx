import React from 'react';
import {UserContext} from "./context/UserContext";

function App() {
    const [user, setUser] = React.useState<IUser | undefined>();
    return (
    <div className="main-wrapper">
        <UserContext.Provider value={{ user, setUser }}>

        </UserContext.Provider>
    </div>
  );
}

export default App;