import React, {Component} from 'react'
                                    
                                               
                                        

import Pic3 from '../img/img35.png'



class Contact extends Component{
    render(){
        return(
            <div>
                <div className="row mb-2 ">

                   <div className="col-md-6 py-5">                   
                       <div className="card-body">
                          <h1 className="card-text col-md-12" id="fii">FEEDBACK </h1> 

                           <h4 className="card-text col-md-12" id="now">Leave us a message and we are sure to
                                        <br/> respond in 10 minutes </h4>


                                        <div >
                                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                                <div className="contact-row">
                                                    <div className="form-group col-md-12">
                                                           
                                                            <input type="text" name="name" class="form-control" placeholder="Name" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                        <div className="validate"></div>
                                                    </div>
                                                    
                                                    <div className="form-group col-md-12">
                                                        <input type="email" class="form-control" name="email" placeholder="Email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                                                        <div className="validate"></div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="form-group col-md-12">
                                                            <label for="name"></label>
                                                            <input type="text" class="form-control" name="subject" placeholder="Phone" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                            <div className="validate"></div>
                                                </div>
                                                <div className="form-group col-md-12">
                                                            <label for="name"></label>
                                                            <textarea className="form-control" name="message" placeholder="Message" rows="20" data-rule="required" data-msg="Please write something for us"></textarea>
                                                            <div className="validate"></div>
                                                </div>
                                                
                                                <div className="wee col-md-12">
                                                    
                                                    <button className="btn" >Send Message</button>
                                                
                                                </div>
                                        </form>
                                 </div>

                        </div>                  
            
                         </div>
                    

                    <div className="col-md-6 " >
                    <div className="card-body">                 
                    <h1 className="card-text py-5" id="fii">CONTACT INFO</h1> 
                    <img src={Pic3} alt="deedee" id="faa" className="mb-6"/>

                    
                    

                    </div>            
                </div>            
                    
                    
            </div> 
                       
            
            
                   

          
            
            </div>
        )
    }
}

export default Contact