import React,{useState} from 'react'


export default function TextForm(props) {

    // const handleCopy=()=>{
    //     document.getElementById("myBox");
    //     text.select();
    //     text.setSelectionRange(0,9999);
    //     navigator.clipboard.writeText(text.value);
    //     props.showAlert("copied to clipboard!","success")
    // }
    const handleExtraSpace= ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra spaces removed!","success")
    }

    const handleUpClick= ()=>{
        
        setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to uppercase!","success")

    }
    const handleLoClick= ()=>{
        
        setText("You have clicked on handleUpClick")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to lowercase!","success")

    }
    const handleClearClick= ()=>{
        
        setText("You have clicked on handleUpClick")
        let newText = ""
        setText(newText)
        props.showAlert("text cleared!","success")

    }
    const handleOnChange= (event)=>{
        
        setText(event.target.value)

    }

    const [text,setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  

  <textarea className="form-control"value={text} onChange={handleOnChange}  style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'#404040':'white'}} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-1"onClick={handleLoClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-1"onClick={handleClearClick}>Clear Text</button>
{/* <button className="btn btn-primary mx-1"onClick={handleCopy}>Copy Text</button> */}
<button className="btn btn-primary mx-1"onClick={handleExtraSpace}>Remove Extra Space</button>

</div>
 <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the to preview it here"}</p>
</div>
</>

  )
}
