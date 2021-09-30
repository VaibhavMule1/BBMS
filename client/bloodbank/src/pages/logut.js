import { useEffect } from "react";
import { Link } from "react-router-dom";
import {Redirect} from "react-router-dom"





const Logout=()=>{    
    
    
    const logout = ()=>{
            localStorage.removeItem("userinfo");
            return( <Redirect to="/signin"/> )
          }
          if(!localStorage.getItem("userinfo")){
            alert("please login first")
            return( <Redirect to="/home"/> )
        }


    return(
    
        <a href="/signin"  id="logout" class="btn btn-info btn-lg">
        <span class="glyphicon glyphicon-log-out"></span> Log out

        <button onClick={logout}>Logout</button>
       
      </a>

        
    )
}



export default Logout



