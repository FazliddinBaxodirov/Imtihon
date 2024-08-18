import {createContext, useState } from "react";


const Context = createContext()


const TokenContext = ({children}) => {
    const [token,setToken] = useState(JSON.parse(window.localStorage.getItem('token')) || false)
    const [registered,setRegistered] = useState(JSON.parse(window.localStorage.getItem('registered')) || [])
    const [list,setList] = useState(JSON.parse(window.localStorage.getItem('list'))||[])
    window.localStorage.setItem('token' , JSON.stringify(token))
    window.localStorage.setItem('registered', JSON.stringify(registered))
    window.localStorage.setItem('list',JSON.stringify(list))
    return(
        <Context.Provider value={{token,setToken,registered,setRegistered,list,setList}}>{children}</Context.Provider>
    )
}

export {Context,TokenContext}