import React, {Component} from 'react'
import Pic2 from '../img/img11.png'
import Pic3 from '../img/img19.png'
import Pic4 from '../img/img18.png'
import Pic5 from '../img/img17.png'


class About extends Component{
    render(){
        return(
            <div className="p-5">
                  
                <div className="row mb-2">

                <div className="col-md-6">

                    <img src={Pic2} alt="deedee" id="jen" className="mb-6"/>

                </div>

                <div className="col-md-6">
                
                <h2 className="">WHO ARE WE</h2>
                <h4 className="">
                    It is a long established fact that a reader willbe distracted by the 
                    readable content of a page when looking at its layout.The point of 
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here',making it 
                    look like readable English. Many desktop publishing packages and web 
                    page editors now use Lorem Ipsum as their default model text, and a 
                   
                    
                   </h4>

                   <h4>
                   It has survived not only five centuries, but also the leap into 
                    electronic typesetting,remaining essentially unchanged. It was 
                    popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                   </h4>

                </div>
                

                </div>

                

                <div className="row mb-2 ">

                <div className="col-md-6">
                <div className="card-body">
                
                <h2 className="">VISION</h2>
                <h4 >It is a long established fact that a reader willbe distracted by the 
                    readable content of a page when looking at its layout.
                </h4>

                 
                <h4>
                It has survived not only five centuries, but also the leap into 
                    electronic typesetting,remaining essentially unchanged. It was 
                    popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </h4>


                <h2 className=" ">MISSION</h2>
                <h4 > It is a long established fact that a reader willbe distracted by the 
                    readable content of a page when looking at its layout.
                </h4>

                <h4>
                It has survived not only five centuries, but also the leap into 
                    electronic typesetting,remaining essentially unchanged. It was 
                    popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                    It has survived not only five centuries, but also the leap into 
                    electronic typesetting,remaining essentially unchanged. 
                    
                </h4>

                </div>
                </div>
                   
                <div className="col-md-6">
                
                
                <h1 className=" py-5">CORE VALUES</h1>
                <img src={Pic3} alt="deedee" id="jan" className="mb-6"/>


                
                <div className="card-body py-5">
                
                <h1 className=" py-5">PARTNERS</h1>
                <img src={Pic4} alt="deedee" id="jin" className="mb-6"/>

             
               
                </div>
                </div>


                
                
                
                
               
                  
                    
            </div> 


            <img src={Pic5} alt="deedee" id="jun" />
          


            </div>
        )
    }
}

export default About