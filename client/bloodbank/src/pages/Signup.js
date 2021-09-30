import { useState } from 'react'
import validate from './validateInfo'
import useForm from './useForm';

import axios from "axios"
import {url} from '../common/constant'
import { useHistory } from "react-router-dom"


const Signup = ({ submitForm }) => {

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  

  // define the state
  const [u_name, setUserName] = useState('')
  const [u_email, setEmail] = useState('')
  const [u_address, setAddress] = useState('')
  const [ u_gender, setGender] = useState('')
  const [ u_dob, setDob] = useState('')
  const [u_id_proof, setIdproof] = useState(undefined)
  const [u_mobileno, setMobileno] = useState('')
  const [u_password, setPassword] = useState('')

  const history = useHistory()

  const signupUser = () => {

    if (u_name.length === 0) {
      alert('select first name')
    } else if (u_email.length === 0) {
      alert('select email')
    } else if (u_address.length === 0) {
      alert('select address ')
    } else if (!u_dob) {
      alert('select date of birth')
    } else if (!u_id_proof) {
      alert('select id proof')
    }else if (u_mobileno.length === 0) {
        alert('select mobile no')
    }else if (u_password.length === 0) {
        alert('select password')
    }

    else {
    const data = new FormData()

    data.append("u_name",u_name)
    data.append("u_email",u_email)
    data.append("u_address",u_address)
    data.append("u_gender",u_gender)
    data.append("u_dob",u_dob)
    data.append("u_id_proof",u_id_proof)
    data.append("u_mobileno",u_mobileno)
    data.append("u_password",u_password)
          
            axios.post(url +'/users/signup' , data).then((response)=>{
                const result = response.data

                if(result.status === 'success'){
                    alert("Registration Successful")

                    history.push('/signin')
                }
                else{
                    alert("Registration failed")
                }
            })
          }
  }

  return (
    <div className="container">
      <h1>Signup</h1>

      <div className="mb-3">
        <label>User Name</label>
        <input
        name='username'
          onChange={(event) => {
            // updating the state with user entered value
            setUserName(event.target.value)
          }}
          className="form-control"
          type="text"
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
        name='email'
          onChange={(event) => {
            // updating the state with user entered value
            setEmail(event.target.value)
          }}
          className="form-control"
          type="email"
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="mb-3">
        <label>Address</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setAddress(event.target.value)
          }}
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label>Gender</label>
        <label className="radio-inline">
          <input onChange={(event)=>{
            setGender(event.target.value)
          }}
           type="radio" name="gender" value="Male" />
          &nbsp; Male
        </label>
        <label className="radio-inline">
          <input onChange={(event)=>{
            setGender(event.target.value)
          }}
           type="radio" name="gender" value="Female" />
          &nbsp; Female
        </label>
        <label className="radio-inline">
          <input onChange={(event)=>{
            setGender(event.target.value)
          }}
          type="radio" name="gender" value="Other" />
          &nbsp; Other
        </label>
      </div>
      <div className="mb-3">
        <label>Date Of Birth</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setDob(event.target.value)
          }}
          className="form-control"
          type="date"
        />
      </div>
      <div className="mb-3">
        <label>Id Proof</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setIdproof(event.target.files[0])
          }}
          className="form-control"
          type="file"
          accept="image/*"
        />
      </div>

      <div className="mb-3">
        <label>Mobile No</label>
        <input type="text" pattern="[789][0-9]{9}" max="10" required
          onChange={(event) => {
            // updating the state with user entered value
            setMobileno(event.target.value)
          }}
          className="form-control"
           
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
        name='password'
          onChange={(event) => {
            // updating the state with user entered value
            setPassword(event.target.value)
          }}
          className="form-control"
          type="password"
        />
         {errors.password && <p>{errors.password}</p>}
      </div>

      <div className="mb-3">
        <button onClick={signupUser} className="btn btn-success">
          Signup
        </button>
      </div>
    </div>
  )
}

export default Signup