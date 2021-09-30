import axios from "axios"
import { useState } from "react"
import { Link , useHistory } from "react-router-dom"

import {url} from '../common/constant'


const Signin = () =>{
    const [u_id , setId] = useState('')
    const [u_email , setEmail] = useState('')
    const [u_password , setPassword] = useState('')

    const history = useHistory()
     
    localStorage.removeItem("u_name")

    const validateUser = () =>{
        if(u_email.length === 0){
            alert("enter your email")
        }
        else if(u_password.length === 0){
            alert("enter your password")
        }
        else{
            const data = {
                "u_email":u_email,
                "u_password":u_password
            }
            axios.post(url +'/users/signin' , data).then((response)=>{
                console.log(data)
                const result = response.data
                console.log(result)
                if(result.status === 'success'){
                    alert("Login Successfull...")
                   
                    localStorage.setItem('u_id',result.data.u_id)
                    localStorage.setItem('u_name',result.data.u_name)
                    localStorage.setItem("userinfo", result.data.u_email )
                    history.push('/home')

                }
                else{
                    alert("Invalid username or Password")
                }
            })
        }
    }

  

    
    return (
        <div>
            <h1 className="btn btn-warning">LOGIN </h1>
            <div className="m">
                <label htmlFor=""className="u_email">Email</label>
                <input onChange={(event) =>{
                    setEmail(event.target.value)
                }}
                 type="email" className="form-control" placeholder="Enter Email" />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="u_password">Password</label>
                <input onChange={(event) =>{
                    setPassword(event.target.value)
                }}
                 type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="mb-3">
                <button className="btn btn-danger" onClick={validateUser}>sign in</button>

                <Link to="/signup">
                    <button className="btn btn-primary">Sign Up</button>
                </Link>

                  
                 </div>
        </div>
    )
}


export default Signin 