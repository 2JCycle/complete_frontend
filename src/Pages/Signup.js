import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'


class Signup extends Component{
    render(){
        return(
        <div>
            <div className="container">
                <div className='row'>
                    <div className='col-md-12  my-5'>
                       <Card className='m-2 p-5'>
                         <Card.Body>
                             <Card.Text>
                             <div className="card-text col-md-12 " id="cee">Registration</div> 
           
           <form action="forms/contact.php" method="post" role="form" class="php-email-form">
     
         <div className="form-group col-md-12">
               
                 <input type="text" name="name" className="form-control my-2 p-4" placeholder="Full name" id="name" />
             <div className="validate"></div>
         </div>
         <div className="form-group col-md-12">
             <input type="email" className="form-control p-4" placeholder="Phone number" name="email" id="email"  />
             <div className="validate"></div>
         </div>

         <div className="form-group col-md-12">
             <input type="email" className="form-control p-4" placeholder="Password" name="email" id="email"  />
             <div className="validate"></div>
         </div>
         <div className="form-group col-md-12">
             <input type="email" className="form-control p-4" placeholder="Confirm password" name="email" id="email"  />
             <div className="validate"></div>
         </div>

         
             <div className="col-md-12 " >
     
     
    

     <div> <button className="btn" >REGISTER</button></div>

     </div>
     

     
     <div>Already have an account?<a href="#">Log in</a></div>
     
     
 
         
         
     
 
 
</form>
                             </Card.Text>
                         </Card.Body>
                       </Card>      
                      
                    </div>

                </div>

            </div>   
         </div>

   
        )
    }
}

export default Signup