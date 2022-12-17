import React, { useState } from "react";

export default function Textform(props) {
  // function to convert the input text to uppercase
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase !!", "success");
  };

  // function to convert the input text to lowercase
  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  // function to clear the text field area
  const handleClearClick = () => {
    console.log("Clear-click was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  // function to copy the content in text field area
  const handleCopyClick = () => {
    console.log("Copy-click was clicked");

    //to select the items in the text field
    let copyText = document.getElementById("myBox");
    copyText.select();

    //main work
    navigator.clipboard.writeText(copyText.value);

    //to deselect the text in texty area after copying
    document.getSelection().removeAllRanges();

    console.log("copied text: " + copyText.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // function to remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  // function to handle on change
  const handleOnchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  //using hooks
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#464b50" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#464b50" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#464b50" }}
      >
        <h1>Your Text Summary</h1>

        {/* text.split(" ") -- function gives the array of words and length of that array is equal to words
            // .filter(x => x != "") removes the empty spaces from array */}
        <p>
          {" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length *
            60}{" "}
          seconds saved to Analyse the text
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
