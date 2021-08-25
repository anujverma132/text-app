import React, { useState } from "react";

export default function Textform(props) {
  const textData = (event) => {
    setText(event.target.value);
  };

  const toUppercase = (e) => {
    e.preventDefault();
    let temp = text.toUpperCase();
    setText(temp);
    props.showalert('Converted to Uppercase','success');
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container ">
        <h1 style={{color : props.mode==='dark'?'white':'#042743'}}>Hello React</h1>
        <p style={{color : props.mode==='dark'?'white':'#042743'}}>This is a Text Util App</p>
          <textarea style={{backgroundColor: props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} rows="8" cols="150" value={text} onChange={textData} />
          <div>
            <button onClick={toUppercase} className="btn btn-primary">
              Convert To Upper case
            </button>
          </div>

      </div>
      <div className="container my-3">
        <h1 style={{color : props.mode==='dark'?'white':'#042743'}}>Text Analysis is here!</h1>
        <p style={{color : props.mode==='dark'?'white':'#042743'}}>
          {text.split(" ").length} word and {text.length} characters.
        </p>
        <h2 style={{color : props.mode==='dark'?'white':'#042743'}}> Preview </h2>
        <p style={{color : props.mode==='dark'?'white':'#042743'}}>{text}</p>
      </div>
    </>
  );
}
