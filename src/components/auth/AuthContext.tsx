import React from 'react';

export type authType = {
    user: userType,
    setUser: any,
}

export type userType = {
    name: string,
    lastName: string,
    isAdmin: number,
    twoFacAut: number,
    userId: number,
}

const AuthContext = React.createContext<Partial<authType>>({});

// Setting displayname for the context to allow to easier see the context in Reacts developer tools.
AuthContext.displayName = "AuthContext";

export default AuthContext;