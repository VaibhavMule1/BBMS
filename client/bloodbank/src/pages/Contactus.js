  import picture from '../images/img1.jpg'
import { Link } from 'react-router-dom';

const Contactus = () => {
    return(
        <div>

<div className="aboutus">
                <Link to="/home">
                   <h5>Home</h5> 
                </Link>
          </div>

        <center>
        <h1 className="contact" >Contact Us</h1><hr/>
        <br/>
        <br/>
        </center> 
        <table >
         <tr colSpan="2">
           <td>
              <img src={picture} alt="images" className="images"></img></td>
           <td>
           <h3 className =  "paragraph" ></h3>
                  <p  className =  "paragraph" >In case you have any questions, suggestions or if you just want to have a general talk with us. 
                    You can reach out to us by any of the below means: </p> <br/>
                  <p  className =  "paragraph" >&#9742; &nbsp;&nbsp; +91-703 883 2221 </p>
                  <p  className =  "paragraph" >&#9993;&nbsp;&nbsp; lifelinebloodbank@gmail.com </p><br/>
                  <p className="parareserved">Lifeline Blood Bank © 2021. All Rights Reserved.</p>
          </td>
         </tr>
       </table>
      </div>
    )
}



export default Contactus