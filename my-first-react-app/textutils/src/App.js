import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
<Navbar title = "TextUtils"  aboutText = "About Textutils" />
<div className="container my-3"> 
<Textform  heading= "Enter Text to Analyse"/>
</div>
    </>
  );
}

export default App;
