import React, {createContext, useState, FC} from "react";

export type UserContextType = {
    user: IUser;
    login: (User: IUser) => void;
};

const contextDefaultValues: UserContextType = {
    user: {UserName: "", Password: "", EmailAddress: ""},
    login: () => {
    },
};

export const UserContext = createContext<UserContextType>(contextDefaultValues);

const UserProvider: FC = ({children}) => {
    const [user, setUser] = useState<IUser>(contextDefaultValues.user);

    const login = (newUser: IUser) => {
        setUser(newUser);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                login,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
