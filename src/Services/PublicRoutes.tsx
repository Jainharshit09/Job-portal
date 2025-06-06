import React from "react";
import { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PublicRoutesProps {
  children: JSX.Element;
}


const PublicRoutes :React.FC<PublicRoutesProps>=({children}) => {
    const token=useSelector((state:any)=>state.jwt);
    if(token){
        return <Navigate to='/'/>
    }
    return children;
}
export default PublicRoutes;