import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Signin extends Component{
    render(){
        return(
             
                  <div className='container'> 
                     <div className='row'>
                         <div className="col-md-12 my-5 text-center">
                             
                         <Card className='m-2 p-5'>
                          
                            <Card.Body >
                                <Card.Title>SignIn</Card.Title>
                                <Card.Text>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Enter Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Phone number" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    
                                        <Button variant="primary" size="lg" block>
                                            Submit
                                        </Button>
                                    <Form.Group controlId="formBasicCheckbox">
                                    <div>Create an account? <a href="#"> Sign Up</a></div>
                                    </Form.Group>
                                    </Form>


                                </Card.Text>
                               
                            </Card.Body>
                        </Card>


                         </div> 

                     </div>
                 </div>
           
        )
    }
}
                               
    
    
export default Signin