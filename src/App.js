//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,Routes
//   } from "react-router-dom";


//let nameOne="Shyam";
//let nameTwo="Ram";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
        setAlert({
          msg : message,
          type : type
        })
        setTimeout(() => {
          setAlert(null);
        }, 2000);
  }

  
  const toggleMode=()=>{
    //alert("Toggle On");
      if(mode==='light'){
        document.body.style.backgroundColor='#243651'
        setMode('dark');
        showAlert("Dark mode enabled! ","success");
        document.title='Dark Mode enabled - Success';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white'
        showAlert("Light mode enabled! ","primary");
        document.title='Light Mode enabled - Success';
      } 
      

  }
  
  return (
   <> 
   {/* <Router>   */}
      <Navbar name="TextUtils Test" aboutUs="About US" navMode={mode} toggleMode={toggleMode} homeText="Home" /> 
      <Alert alert={alert}/>
      <div className="container">
      <TextForms showAlert={showAlert} heading="Enter your text to analyze below" navMode={mode}/>
      {/* <Routes>
          <Route path="/about" element={<About/>}/> */}
                  
          {/* <Route path="/users">
            <Users />
          </Route>*/}
          {/* <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter your text to analyze below" navMode={mode}/>}/>
          </Routes>        */}
      </div>
      {/* </Router> */}
  </>
  );
}

export default App;
