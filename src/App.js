import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Navbar from './component/Navbar'
import Footer from './component/Footer'


import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Signin from './Pages/Signin'
import News from './Pages/News'
import Readmore from './Pages/Readmore'
import Signup from './Pages/Signup'





function App() {
  
    return(
      <Router>
      <div>
        
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/News" component={News} />
        <Route exact path="/Readmore" component={Readmore} />
        <Route exact path="/Signup" component={Signup} />
        

        
        
        
        
        <Footer/>


        
     
        </div>
        </Router>

     
    )
  }


export default App;
