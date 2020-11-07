import React, {Component} from 'react'
import Pic0 from '../img/img20.png'
import Pic1 from '../img/img21.png'
import Pic2 from '../img/img22.png'
import Pic3 from '../img/img26.png'
import Pic4 from '../img/img25.png'
import Pic5 from '../img/img24.png'
import Pic6 from '../img/img23.png'

class Services extends Component{
    render(){
        return(
            <div className="container fluid">
                    <div className="row mb-2 ">
                    <div className="col-md-4 " >
                             
                    <div className="card-body">
            <img src={Pic0} alt="deedee" id="tan" className="mb-3"/>  
            <div>To request for a pickup, <a href="#"> Sign Up</a></div>
                     <div>Already have an account? <a href="#"> Log in</a></div>
            </div>
            </div>

            <div className="col-md-4 " >
                             
                             <div className="card-body">
                     <img src={Pic1} alt="deedee" id="tan" className="mb-3"/> 
                     <div>To report a clogged dustbin, <a href="#"> Sign Up</a></div>
                     <div>Already have an account? <a href="#"> Log in</a></div>
                     </div>
                     </div>

                     <div className="col-md-4 " >
                             
                             <div className="card-body">
                     <img src={Pic2} alt="deedee" id="tan" className="mb-3"/>  
                     <div>To order for a dustbin, <a href="#"> Sign Up</a></div>
                     <div>Already have an account? <a href="#"> Log in</a></div>
                     </div>
                     </div>

            </div>


            <div >
        
                             
                    
         
            <img src={Pic6} alt="deedee" id="can" className="mb-3"/>     
 
            
            </div>
            </div>
        

        )
    }
}

export default Services