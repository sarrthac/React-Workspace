import { useState } from "react";
import "./App.css";
import TextForm from "./components/Textform"
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";


function App() {

  const[mode,setMode] = useState('light')  //Weather light mode is enabled or not

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
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>    
   
      <Navbar title="TextUtils" aboutText="About Textutils"  toggleMode={toggleMode} mode={mode}/>
      <Alert alert={alert}  />
      <div className="container my-3">
    
          
           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
 
      </div>
   
    </>
  );
}

export default App;
