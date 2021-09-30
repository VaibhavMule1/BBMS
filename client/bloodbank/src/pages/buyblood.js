import axios from "axios"
import { useState } from "react"
import { Link , useHistory } from "react-router-dom"

import {url} from '../common/constant'
import {Redirect} from "react-router-dom"



const Buy = () =>{
    
    const[blood_grp,setBloodGrp]=useState('')
    let user=localStorage.getItem("u_id")

    const history=useHistory()
    const validateUser=()=>{
        const data={
            "blood_grp":blood_grp,
            "u_id":user
        }
        axios.post(url+'/donors/buyblood',data).then((response)=>{
            const result=response.data
            if(result.status==="success")
            {
                alert("Blood Buy ")
                history.push('/home')
            }
        })
      
      
        axios.post(url +'/donors/buyerinfo' , data).then((response)=>{
            console.log(data)
            const result = response.data
            console.log(result)
            if(result.status === 'success'){
                alert("Buyerinfo Successfull...")
                
               
               

            }
            else{
                alert("Failed To Sumit Form")
            }
        })
    }








    const logout = ()=>{
        localStorage.removeItem("userinfo");
        return( <Redirect to="/signin"/> )
      }

      if(!localStorage.getItem("userinfo")){
        alert("please login first")
        return( <Redirect to="/signin"/> )
    }
    return (
        <div>
            <h1 className="donate_reg" >Registration for Buy Blood  </h1>
            <br/><br></br>
            <div className="mb-3">
                <label htmlFor="" className="d_blood_grp">Enetr Blood Group</label>
                <select onChange={((event)=>{setBloodGrp(event.target.value)})} id="donor">
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                </select>
            </div>
            <div className="mb-3">
                <button className="btn btn-danger" onClick={validateUser}>Buy</button>

                 
                 </div>

            
        </div>
    )
}


export default  Buy