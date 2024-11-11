import React from 'react'
import { useAuth } from './AuthContext'
import Login from '../pages/Login'

const ProtectedRoute = ({element, authrizedRole}) => {
const {userProvider} = useAuth()
console.log(authrizedRole)
console.log(userProvider)
    if(!userProvider || !authrizedRole === userProvider ){
        return <Login/>
    }
    else{
        return element
    }
}

export default ProtectedRoute