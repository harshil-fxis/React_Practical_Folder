import React from "react";
import { Login } from "./Login";
import { Profileprops } from "./Profile";


type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<Profileprops>
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
    if(isLoggedIn) {
        return <Component name= 'Harshil' />
    }else {
        return <Login />
    }
}