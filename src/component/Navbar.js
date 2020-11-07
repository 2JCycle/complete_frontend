import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Yeah from '../img/logo2.png'


class Navbar extends Component {
    render(){
        return(
            <div id="container">
             
      <nav className="navbar navbar-expand-md">
      
      <img src={Yeah} alt="deedee" id="logo"/>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/Services" >Services <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/Contact" >Contact <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/News " >News <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/Signin" >Sign in<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/Readmore" >Readmore<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/Signup" >Sign up<span className="sr-only">(current)</span></Link>
      </li>
    </ul>
   
   
  </div>
</nav>  
              </div>
                 
            
        )
    }
}
      
export default Navbar
