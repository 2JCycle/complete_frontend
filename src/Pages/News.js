import React, {Component} from 'react'
import Pic1 from '../img/img7.png'
import Pic3 from '../img/img8.png'
import Pic2 from '../img/img9.png'
import Pic4 from '../img/img31.png'
import Pic5 from '../img/img32.png'
import Pic6 from '../img/img33.png'


class News extends Component{
    render(){
        return(
            <div>
               <h1 className="py-5 " id="gii">NEWS & UPDATE </h1> 
               
               <div className="container fluid">
               <div className="row mb-2 ">
                    <div className="col-md-4  " >
                             
                                 
                                     <img src={Pic1} id="tay" alt="deedee"/>
                                     
                                     <h5>HOW TO ELIMINATE ODOURS FROM WASTE BINS</h5>

                                     <h7 className="card-text">Every single thing you throw away including leftovers ends up in your garbage bin so it is not unusual that the foul mixture of things you put in there caues it to reek and make your home stink like a dump.Trash smells,but you can reduce the odour from waste bins by following these strategies;
                                     
                                     </h7>

                                     <h4><button className="btn  "> Read more</button></h4>
                                      
                                            
                                
                                 </div>
                           
                         
                         <div className="col-md-4 " >
                        
                        
                                     <img src={Pic2} id="tay" alt="deedee "/>
                                     
                                     <h5>HOW TO KEEP ANIMALS AWAY FROM DISPOSAL BINS</h5>
                                     <h7 className="card-text">It can be a pain dealing with animals and pests that raid,knockover or rummage through your trash leaving an insightly mess everyday. If these creatures find a constant source of nourishment in your trash, they may even make a new home in your shed,basement or garage leading to even more problems.
                                     
                                     </h7>

                                     <h4><button className="btn  "> Read more</button></h4>
                                                  
                                 
                         </div>

                         <div className="col-md-4 " >
                        
                                
                                     <img src={Pic3} id="tay" alt="deedee"/>
                                     
                                     <h5>HOW TO PROPERLY SORT YOUR GARBAGE AT HOME</h5>
                                     <h7 className="card-text">When at home, remembering to recycle and sort through garbage correctly can sometimes be a hassle. If good habits are not adopted, or initial sorting practices are not simplified, it can become easy to throw things away in the garbage without taking the time to sort it correctly. 
                                     </h7> <br/>

                                     <h4><button className="btn  "> Read more</button></h4>
                                                  
                                 </div>
                           
                        


                    </div>
            </div>


            <div className="container fluid">
               <div className="row mb-2 ">
                    <div className="col-md-4 py-5 " >
                             
                                 
                                     <img src={Pic4} id="tay" alt="deedee"/>
                                     
                                     <h5>TIPS ON HOW TO RECYCLE IN YOUR COMMUNITY</h5>

                                     <h7 className="card-text">We all want to do whatever we can to protect our planet, but it can be confusing to figure out how, and sometimes it can feel like our daily actions are too small to make a difference. If this sounds familiar, don’t worry!
                                     There are plenty of things we can do as individuals to help our planet—and recycling is one of them. 
                                     </h7>

                                     <h4><button className="btn  "> Read more</button></h4>
                                            
                                
                                 </div>
                           
                         
                         <div className="col-md-4 py-5" >
                        
                        
                                     <img src={Pic5} id="tay" alt="deedee"/>
                                     
                                     <h5>TIPS TO END PLASTIC POLLUTION AND RECYCLE BETTER</h5>
                                     <h7 className="card-text">A plastic-free planet should not be only for the privileged, but should also provide solutions and alternatives for many who depend upon this cheap, light, and accessible material. It is important that in the rush to become plastic-free, we do not suddenly turn to unsustainable or damaging alternatives.
                                     </h7>

                                     <h4><button className="btn  "> Read more</button></h4>
                                                  
                                 
                         </div>

                         <div className="col-md-4 py-5" >
                        
                                
                                     <img src={Pic6} id="tay" alt="deedee"/>
                                     
                                     <h5>9 RECYCLING TIPS EVERYONE SHOULD KNOW</h5>
                                     <h7 className="card-text">Statistics show estimates that nearly 100,000 pounds of waste will be created from your very being over your lifetime, creating a substantial impact on environmental issues such as landfills, energy conservation, contamination and the diminishing of resources. Recycling is a practice that can be implemented in your day-to-day life 
                                     </h7>

                                     <h4><button className="btn  "> Read more</button></h4>
                                                  
                                 </div>
                           
                        


                    </div>
            </div>

            
            
            
            
            </div>
        )
    }
}

export default News