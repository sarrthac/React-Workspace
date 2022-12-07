import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {

  const[mode,setMode] = useState('light')  //Wheather light mode is enabled or not

  const toggleMode = () => {
    if( mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#464b50';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Textutils"  toggleMode={toggleMode} mode={mode}/>
      <div className="container my-3">
        <Textform  heading= "Enter Text to Analyze below" mode ={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
