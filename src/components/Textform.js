import React, {useState} from 'react'
function reverseText(text) {
    return text.split("").reverse().join("");
}
function numwords(text) {
    // trim leading and trailing whitespace
    text = text.trim();
  
    // split the trimmed string into an array of words using a regular expression that matches one or more whitespace characters
    const words = text.split(/\s+/);
  
    // return the length of the resulting array
    if(words[words.length-1]===""){
        return words.length-1;
    }
    return words.length;
}
function numchar(text){
    let ans=0;
    for(let i=0;i<text.length;i++){
        if(text[i]!==" "){
            ans++;
        }
    }
    return ans;
}  
export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleInverseClick= ()=>{
        let newText=reverseText(text);
        setText(newText);
        props.showAlert("Text Inversed!","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>      
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleInverseClick}>Inverse The Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text Summary</h2>
        <p>{numwords(text)} words and {numchar(text)} characters</p>
        <p>{0.008 * numwords(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>{numchar(text)>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}