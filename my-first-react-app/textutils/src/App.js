import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {

  const[mode,setMode] = useState('light')  //Wheather light mode is enabled or not

  //setting the alert
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      Type:type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }


  const toggleMode = () => {
    if( mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#464b50';
      showAlert("Dark mode has been enabled", "success")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Textutils"  toggleMode={toggleMode} mode={mode}/>
      <Alert alert={alert}  />
      <div className="container my-3">
        <Textform  showAlert={showAlert}  heading= "Enter Text to Analyze below" mode ={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
