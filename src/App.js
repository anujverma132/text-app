// import logo from './logo.svg';
import React , { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode , setmode] = useState('dark');
  const [alert , setalert] = useState(null);

  const showalert = (message , type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const togglemode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert('Dark mode has been enabled','success');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light mode has been enabled','success');
    }
  }

  return (
    <>
      <Navbar mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <Textform mode={mode} showalert={showalert} body={document.body.style.backgroundColor = '#042743'}/>
      {/* <About /> */}
    </>
  );
}

export default App;
