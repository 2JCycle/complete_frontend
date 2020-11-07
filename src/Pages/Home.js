import React, {Component} from 'react'
// import Carousel from 'react-bootstrap/Carousel'
// import Slider1 from '../img/img1.jpg'
// import Slider2 from '../img/img2.jpg'
// import Slider3 from '../img/img3.jpg'


import Pic1 from '../img/img1.jpg'
import Pic10 from '../img/img4.png'
import Pic11 from '../img/img5.png'
import Pic4 from '../img/img6.png'
import Pic5 from '../img/img7.png'
import Pic6 from '../img/img8.png'
import Pic7 from '../img/img9.png'
import Pic8 from '../img/img10.png'



class Home extends Component{
    render(){
        return(
           
           <div>
               <img src={Pic1} id="jay" alt="deedee"/>

{/* <Carousel>
                    <Carousel.Item>
                            <img
                            className="d-block w-100 h-100"
                            src={Slider2}
                            alt="First slide"/>
                            
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={Slider1}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={Slider3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
             
        
         <div className="container fluid">
                    <div className="row mb-2 ">
                    <div className="col-md-4 " >
                             
                                 <div className="card-body">
                                     <img src={Pic10} id="fay" alt="deedee"/><h5>WASTE SOLUTIONS</h5>
                                             <h6 className="card-text">Do you know that with the increasing urbanization, waste management is a major global issue that governments face daily?Do you also know there are ways to reduce the negative impact on the environment? Waste is the result of human activities and everyone needs to have a proper understanding of waste management issues.</h6>
                                 </div>
                                 </div>
                           
                         
                         <div className="col-md-4" >
                        
                                 <div className="card-body">
                                     <img src={Pic11} id="fay" alt="deedee"/><h5>RECYCLING</h5>
                                             <h6 className="card-text">There are plenty of things we can do as individuals to help our planet—and recycling is one of them. But it’s important to do it right so that your efforts don’t go to waste. Thankfully, we’ve put together a handy guide on how to recycle to help you get started! But first, let's take a look at the facts, here are just a few short stats about plastic waste. </h6>
                                 </div>
                           
                         </div>

                         <div className="col-md-4 " >
                         
                                 <div className="card-body">
                                   <img src={Pic4} id="fay" alt="deedee"/><h5>WASTE MANAGEMENT TIPS</h5>
                                             <h6 className="card-text">Although every individual has ways and means to manage their waste in their homes and environment,have we asked ourselves the harm these measures have on our health and environment? There are actually proper waste managemnet tips we can practice in both our homes and environment which would help improve our health and environment .</h6>
                                 </div>
                             </div>
                        

                    </div>
                    </div>

                    <div className="container fluid">
                       <div className="row mb-2 ">
                                <div className="col-md-4"> 
                                   
                                           <h6><img src={Pic5} alt="deedee" id="fay" /></h6><h5>HOW TO ELIMINATE ODOURS FROM WASTE BINS</h5>
                                             
                                        
                                    <h4><button className="btn"> Read more</button></h4>
                                </div>
                                
                        
                                <div className="col-md-4" >
                             
                                     <h6><img src={Pic6} alt="deedee" id="fay"/></h6><h5>HOW TO KEEP ANIMALS AWAY FROM YOUR DISPOSAL BINS</h5>
                                             
                                
                             <h4><button className="btn "> Read more</button></h4>
                         </div>

                                 <div className="col-md-4 " >
                               
                                     <h6><img src={Pic7} alt="deedee" id="fay"/></h6><h5>HOW TO PROPERLY SORT YOUR CABBAGE AT HOME</h5>
                                            
                                 
                             <h4><button className="btn "> Read more</button></h4>
                         </div>

                        </div>
                </div>

                <img src={Pic8} alt="deedee" id="bae" className="mb-3"/>           

                         


               
      
                  
                
        </div>
        )
    }
}
export default Home