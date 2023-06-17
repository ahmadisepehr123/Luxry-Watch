import React from 'react';
import './App.css';
import Signin from './Components/Signin/Signin.js';
import Register from './Components/Register/Register';
import Main from './Components/video/Main';
import Navigation from './Components/Navigation/Navigation';
import Gallery from './Components/Gallery/Gallery.js';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import {BrowserRouter as Router , Routes , Route , Navigate ,} from 'react-router-dom';

const isLoggedIn = true;

class App extends React.Component{
  constructor(){
    super();
    this.state= { 
      Watch: [],
      isLoggedIn : true
    }
  }
 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users =>this.setState({Watch:users}))
  }

    
    render() {
      if (this.state.Watch.length === 0){
        return(
          <div className="main">
            <div className="pl">
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__text">Loading…</div>
          </div>
        </div>
        );
      } else {
     return (
      
       <div className='App'>
       <Router>
        <Routes>  
        <Route path="/" element={isLoggedIn ? <Navigate to="/signin" /> : null} />
        <Route path="/Navigation" element={<Navigation />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />}  />
        <Route path="/video" element={<Main />} />
        </Routes>  
       </Router>
         </div>
     )
    }
  }
  
}


export default App;

