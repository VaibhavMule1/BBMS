import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

//import Home from './pages/Home'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'


import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Donate from './pages/donate';
import BloodStock from './pages/BloodStock';
import Customer from './pages/customer';
import Buy from './pages/buyblood';
import Logout from './pages/logut';



function App() {

  const logout =()=>{
    localStorage.removeItem("userinfo");
  }
  return (
    
    <div className="App">
       <BrowserRouter>  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="">
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>   
                <li className="nav-item">
                  <Link className="nav-link" to="/bloodstock">
                  Buy Blood
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/donate">
                  Donate Blood
                  </Link>
                </li>          
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    About us
                  </Link>
                </li>
                
                  <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                 Signin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin" onClick={logout}>
                Logout
                  </Link>
                  
               </li>
               
              </ul>
            </div>
          </div>
          
        </nav>
        
        
        <div className="container">
          <Switch>
             <Route path="/home" component={Home} />
             <Route path="/signin" component={Signin} /> 
            <Route path="/signup" component={Signup} />
           <Route path="/contactus" component={Contactus} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/donate" component={Donate} />
            <Route path="/customer" component={Customer} />
            <Route path="/bloodstock" component={BloodStock}/>
            {/* <Route path="/buyblood" component={Logout} /> */}
            <Route path="/buyblood" component={Buy} />
           
        
          </Switch>
        </div>
      </BrowserRouter>  
    </div>
    
  );
}

export default App;