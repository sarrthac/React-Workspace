import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Textutils" />
      <div className="container my-3">
        {/* <Textform  heading= "Enter Text to Analyse"/> */}
        <About />
      </div>
    </>
  );
}

export default App;
