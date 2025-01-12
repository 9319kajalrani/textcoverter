import React , { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

 function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null);
 
  const showAlert =(message, type)=>{
     setAlert({
      msg: message,
      type : type
     })
     setTimeout(() =>{
       setAlert(null)
     },1500)
  }


 const toggleMode = () =>{
  if (mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success")
   
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success")
    }}
  return (
    <>
    <Router>
    <Navbar   tittle="TextUtils"  about="About Us " mode={mode} toggleMode={toggleMode}/> 
    <Alert  alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about"element ={<About mode={mode}/>}>
          </Route>
          <Route path="/" element = 
          {<Textform showAlert={showAlert} heading=" Try Textutils - word counter , Character counter , clear text" mode={mode}/>}>
         </Route>
    </Routes>
        </div> 
        
      </Router>
     </>
  );
  }
  export default App;
