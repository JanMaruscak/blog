import { createContext, useContext } from 'react';

export type UserContextType = {
    user: IUser | undefined;
    setUser: (User: IUser) => void;
}

export const UserContext = createContext<UserContextType>({ user: {name:"name",password:"pass"}, setUser: name => console.warn('no theme provider')});
export const useUser = () => useContext(UserContext);