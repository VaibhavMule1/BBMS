import picture from '../images/img3.jpg'
import { Link } from 'react-router-dom';
import {Redirect} from "react-router-dom"

const Aboutus = () => {


  const logout = ()=>{
    localStorage.removeItem("userinfo");
    return( <Redirect to="/signin"/> )
  }


    return(
        <div>
          <div className="aboutus">
                <Link to="/home">
                   <h5>Home</h5> 
                </Link>
          </div>
        <center>
        <h1 className="about">About Us</h1><hr/>
        <br/>
        <br/>
        </center> 
        <table >
         <tr colSpan="2">
           <td>
              <img src={picture} alt="imagesabout" className="images"></img></td>
           <td>
               <p className="para">
The State Blood Transfusion Council has been established in Indian  Government vide Resolution dated 2nd and 4th July 1996 as per the directives of Hon. Supreme Court of India dated 4th January 1996. The Council is registered as Society with the Registrar of Society under 1860 Act on 22nd January 1997 and subsequently with Charity commissioner as Trust under BPT Act 1950 on 17th Feb 1998. 
The main aim of the Council is to ensure sufficient supply of safe blood and blood components at reasonable cost. The Management of affairs of the council is vested with the Governing Board comprising of 17 representatives from Public and private sector.</p>

                 </td>
                
         </tr>
         
       </table>
      </div>
    )
}

export default  Aboutus