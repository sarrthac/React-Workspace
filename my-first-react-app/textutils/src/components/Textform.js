import React, { useState } from 'react'

export default function Textform(props) {

  // function to convert the input text to uppercase
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  // function to convert the input text to lowercase
  const handleLoClick = ()=>{
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

  // function to handle on change
  const handleOnchange = (event)=>{
    console.log("on change")
    setText(event.target.value);
  }

  //using hooks
  const [text,setText] = useState('Enter text here');
  return (
    <>
      <div className="container"> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      </div>
      <div className="container my-4">
            <h1>Your Text Summary</h1>
            {/* text.split(" ") -- function gives the array of words and length of that array is equal to words */}
            <p> {text.split(" ").length} words & {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes saved to Analyse the text</p>
            <h2>Preview</h2>
            <p>{text}</p>
      </div>
    </>
  )
}
