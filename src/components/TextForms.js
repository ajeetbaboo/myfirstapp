import React, { useState } from 'react'



export default function TextForms(props) {
      const changeUpCase =()=>{
        //setTest("working?");
        //alert("hii. now button is working.. "+test)
        //console.log("button.. clicked.. "+test);
        if(test!==""){
            var newText=test.toUpperCase();
            setTest(newText);
            props.showAlert("Changed to Upper Case!","success")
        }else
        alert("Enter you text to convert!")
    };

    const changeLwCase =()=>{
        
        if(test!==""){
            var newText=test.toLowerCase();
            setTest(newText);
            props.showAlert("Changed to Lower Case!","success")
        }else
        alert("Enter you text to convert!")
    };

    const clearText = ()=>{
        setTest('');
       props.showAlert("Text Cleared!","success");
    }

    const handleOnchange=(event)=>{
       setTest(event.target.value);
    }

    const handleCopy=()=>{
       // alert("I am copying..");
        var textBox=document.getElementById("myBox");
        textBox.select();
       // textBox.setSelectionRange(0,9999);
        navigator.clipboard.writeText(textBox.value);
        props.showAlert("Text Copied on Clipboard!","success");
    }

    const handleExtraSpace=()=>{
       // alert("Remove Extra Space...");
        //var textBox=document.getElementById("myBox");
        var newText=test.split(/[ ]+/)
        setTest(newText.join(" "));
        props.showAlert("Extra space removed!","success");

    }

    const [test,setTest]=useState("");
   

  return (
    <>
        <div className='container' style={{color: props.navMode==='dark'?'white':'#406aa9'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" id="myBox" rows="3" style={{backgroundColor: props.navMode==='dark'?'grey':'white',color: props.navMode==='dark'?'white':'#406aa9'}} value={test} onChange={handleOnchange}></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={changeUpCase}>Convert to Uppercase</button>&nbsp;
        <button className="btn btn-primary my-3" onClick={changeLwCase}>Convert to Lowercase</button>&nbsp;
        <button className="btn btn-primary my-3" onClick={clearText}>Clear Text</button>&nbsp;
        <button className="btn btn-primary my-3" onClick={handleCopy}>Copy Text</button>&nbsp;
        <button className="btn btn-primary my-3" onClick={handleExtraSpace}>Remove Extra Space</button>&nbsp;
        </div>
        <div className="container" style={{color: props.navMode==='dark'?'white':'#406aa9'}}>
            <h3>Your texts summary</h3>
            <p>Words: {test===""?0:test.trim().split(" ").length}</p>
            <p>Characters: {test.length}</p>
            {/* <p>{test===""?0:test.trim().split(" ").length} words and {test.length} characters || {props.navMode}</p> */}
            <p>Minutes to read: {test===""?0:0.008*test.trim().split(" ").length}</p>
            <h3>Preview</h3>
            <p>{test}</p>
        </div>
    </>
    
  )
}
