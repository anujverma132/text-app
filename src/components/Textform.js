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

  const toLowercase = (e) => {
    e.preventDefault();
    let temp = text.toLowerCase();
    setText(temp);
    props.showalert('Converted to Lowercase','success');
  };

  if(props.mode==='dark')
    document.body.style.backgroundColor = '#042743';
  else
    document.body.style.backgroundColor = 'white';


  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-3">
        <h1 className='my-3' style={{color : props.mode==='dark'?'white':'#042743'}}>Hello React! This is My First App</h1>
        {/* <p style={{color : props.mode==='dark'?'white':'#042743'}}>This is a Text Util App</p> */}
          <textarea style={{backgroundColor: props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black' , width:'98%'}} rows="8" cols="150" value={text} onChange={textData} />
          <div className="my-2">
            <button onClick={toUppercase} className="btn btn-primary"> Convert To Upper case </button>
            <button onClick={toLowercase} className="btn btn-primary mx-2"> Convert To Lower case </button>
          </div>

      </div>
      <div className="container my-3">
        <h1 style={{color : props.mode==='dark'?'white':'#042743'}}>Text Analysis is here!</h1>
        <p style={{color : props.mode==='dark'?'white':'#042743'}}>
          {text.length!== 0 ? text.split(" ").length : 0} word and {text.length} characters.
        </p>
        <h2 style={{color : props.mode==='dark'?'white':'#042743'}}> Preview </h2>
        <p style={{color : props.mode==='dark'?'white':'#042743'}}>{text}</p>
      </div>
    </>
  );
}
