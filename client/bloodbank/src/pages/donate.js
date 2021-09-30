import axios from "axios"
import { useState } from "react"
import { Link , useHistory } from "react-router-dom"


import {url} from '../common/constant'
import {Redirect} from "react-router-dom"


const Donate = () =>{
    
    const [blood_grp, setBloodGrp] = useState('')
    const [count , setCount] = useState(1)

    const history = useHistory()

    let user=localStorage.getItem("u_id")
    

    const [weight, setWeight]= useState('')

    const validateUser = () =>{
        
        console.log(weight);
        if(count=== 0){
            alert("enter your weight")
        }
        else if(!blood_grp ){
            alert("enter your blood group")
        }
        else if(weight<50) {
                document.getElementById("weightch").innerHTML="weight must be above 50";
                alert("Weight below 50");
            <Redirect to="/donate"/>
            }
        else{
            
            const data = {
                "blood_grp":blood_grp,
                "count":count
                
            }
            axios.post(url +'/donors/adddonors' , data).then((response)=>{
                console.log(data)
                const result = response.data
                console.log(result)
                if(result.status === 'success'){
                    alert("Donate Successfull...")
                    history.push('/home')
                   
                   

                }
                else{
                    alert("Failed To Sumit Form")
                }
            })
        }

        const data = {
            "blood_grp":blood_grp,
            "u_id":user
        }
        axios.post(url +'/donors/donorinfo' , data).then((response)=>{
            console.log(data)
            const result = response.data
            console.log(result)
            if(result.status === 'success'){
                alert("donorinfo Successfull...")
                
               
               

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
            <h1 className="donate_reg">Registration for Blood Donate  </h1>
            <br/><br></br>
            <div className="m">
                <label htmlFor=""className="d_weight" >Enetr Weight</label>
                <input  id="ww" onChange={(e)=>{setWeight(e.target.value)}}
                    
                input type="number" className="form-control" placeholder="Enter Weight" />
            </div>
            <div id="weightch"></div>
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
                <button className="btn btn-warning" onClick={validateUser}>Register</button> 
                 </div>
                 <div className="back">
          <a href="/home">Back To Home</a>
          </div>
                
        </div>
    )
}


export default  Donate