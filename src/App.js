import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { Route,Routes } from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const [background,SetBackGround]=useState('');

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type,
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleModeHandler=()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(7, 7, 37)';
      showAlert("Dark Mode Enabled!","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='';
      showAlert("Light Mode Enabled!","success");

    }
  }

  const backgroundHandler=(color)=>{
    SetBackGround(color);
   document.body.style.backgroundColor=color;
  }

  return (
  <>
  <Navbar mode={mode} toggleMode={toggleModeHandler} title="TextUtils" aboutText="About" onBackgroundChange={backgroundHandler}/>
  <Alert alert={alert}/> 
   <Routes>  
    <Route path='/' element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} Color={background}/>}/>
    <Route path='/about' element={<About/>}/>
    
   </Routes>
   </>
  );
}

export default App;
