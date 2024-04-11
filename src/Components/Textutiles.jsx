import React, { useState } from "react";
import Alert from "./Alert";

const Textutiles = () => {
  const [text, setText] = useState(" ");
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const  showAlert = (message , type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const Mode = () => {
    if (mode === "light") {
      document.title = "TextUtiles-Dark Mode Enable"
      document.body.style.backgroundColor = "blue";
      document.getElementById("textBox").style.backgroundColor = "gray";
      document.getElementById("change").style.color = "white";
      document.getElementById("col").style.color = "white";
      showAlert("Dark Mode Enabled" , "success");
      setMode("dark");
    } else {
      document.title = "TextUtiles-Light Mode Enable"
      document.body.style.backgroundColor = "white";
      document.getElementById("textBox").style.backgroundColor = "white";
      document.getElementById("change").style.color = "black";
      document.getElementById("col").style.color = "black";
      showAlert("Light Mode Enabled" , "success");
      setMode("light");
    }
  };
  const UpperCase = () => {
    let convert = text.toUpperCase();
    setText(convert);
    showAlert("Converted to Upper Case" , "success");
  };
  const LowerCase = () => {
    let convert = text.toLowerCase();
    setText(convert);
    showAlert("Converted to Lower Case" , "success");
  };
  const Clear = () => {
    setText("");
    showAlert("Text Clear" , "success");
  };
  const Copy = () => {
    let copy = document.getElementById("textBox");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    showAlert("Text Copy to Clip Board" , "success");
  };
  const Remover = () => {
    let remove = text.split(/[ ]+/);
    setText(remove.join(" "));
    showAlert("Remove Extra Spaces from Text" , "success");
  };
  const Convert = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TextUtiles
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={Mode}
              />
              <label className="form-check-label" id="change"htmlFor="flexSwitchCheckDefault">
                {`Enable ${mode==="light"?"Dark":"Light"} Mode`}
              </label>
            </div>
          </div>
        </div>
      </nav>
      {/* <Alert/> */}
      <Alert alert={alert}/>
      {/* TextArea */}
      <div className="container">
        <div className="row">
          <div className="col" id="col">
            <h2>
              <b>Enter Your Text To analyze Below</b>
            </h2>
            <textarea
            showAlert
              name=""
              id="textBox"
              onChange={Convert}
              cols="140"
              rows="9"
              value={text}
              placeholder="Enter Your Text Here..."
            />
            <br />
            <button className="btn btn-primary mx-1" onClick={UpperCase}>
              Upper Case
            </button>
            <button className="btn btn-primary mx-1" onClick={LowerCase}>
              Lower Case
            </button>
            <button className="btn btn-primary mx-1" onClick={Clear}>
              Clear Text
            </button>
            <button className="btn btn-primary mx-1" onClick={Copy}>
              Copy Text
            </button>
            <button className="btn btn-primary mx-1" onClick={Remover}>
              Remove Extra Spaces
            </button>
            <h4 className="mt-3">
              <b>Your Text Summary</b>
            </h4>
            <p>
              {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} Charactacters
            </p>
            <p>Read in only {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes</p>
            <h4 className="mt-3">
              <b>Preview</b>
            </h4>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Textutiles;