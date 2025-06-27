import React, { useState , createContext } from "react"

export type AuthUser = {
    name: string
    email: string
}

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContexttype = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<UserContexttype | null>(null)

export const UserContextprovider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null) 
    return <UserContext.Provider value={{user, setUser }}>{children}</UserContext.Provider>
}