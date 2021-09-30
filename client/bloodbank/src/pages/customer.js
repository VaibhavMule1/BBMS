import React from 'react'
import { Link } from 'react-router-dom'
import {Redirect} from "react-router-dom"

const Customer = () => {
    return (
        <div>
            <div>
           <Link to="/donate">
               <br/>
            <button id="blood_donate" className="btn btn-primary" >Fill Form To Donate Blood</button>
            </Link>
           </div>

           <div>
           <Link to="/buyblood">
               <br/>
            <button id="blood_donate" className="btn btn-primary" >Buy Blood</button>
            </Link>
           </div>
        </div>
    )
}

export default Customer
