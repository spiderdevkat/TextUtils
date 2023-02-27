// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null); 
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      // document.title='TextUtils-Light Mode';
      showAlert("Light Mode has been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      // document.title='TextUtils-Dark Mode';
      showAlert("Dark Mode has been enabled","success");
    }
  };
  const toggleRedMode=()=>{
    if(mode==='red'){
      setMode('light');
      document.body.style.backgroundColor='white';
      // document.title='TextUtils-Light Mode';
      showAlert("Light Mode has been enabled","success");
    }
    else{
      setMode('red');
      document.body.style.backgroundColor='#401A04';
      // document.title='TextUtils-Red Mode';
      showAlert("Red Mode has been enabled","success");
    }
  };
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} aboutText="About TextUtils" toggleMode={toggleMode} toggleRedMode={toggleRedMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </div>
   </Router>
    </>
  );
}

export default App;
