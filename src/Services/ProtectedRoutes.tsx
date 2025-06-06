import { jwtDecode } from "jwt-decode";
import React from "react";
import { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  childern: JSX.Element;
  allowedRoles: string[];
}

const ProtectedRoutes :React.FC<ProtectedRoutesProps>=({childern,allowedRoles}) => {
    const token=useSelector((state:any)=>state.jwt);
    if(!token){
        return <Navigate to='/login'/>
    }
    const decoded:any=jwtDecode(token);
    if(allowedRoles && !allowedRoles.includes(decoded.accountType)){
        return <Navigate to='/unauthorized'/>
    }
    return childern;
}

export default ProtectedRoutes;