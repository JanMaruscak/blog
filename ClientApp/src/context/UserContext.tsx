import React,{createContext} from 'react';

export const UserContext = createContext({
    authenticated: true,
    lang: 'en',
    theme: 'dark'
});