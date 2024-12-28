import React,{useState} from 'react';

const TextForm=(props)=>{
    const [text,setText]=useState('');
    const isEmpty=!text;
    
    const onchangeHandler=(event)=>{
        setText(event.target.value);
    }

    const onUpClickHandler=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        if(!isEmpty)
        props.showAlert("Converted to Uppercase!","success");
    }

    const onLoClickHandler=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        if(!isEmpty)
        props.showAlert("Converted to Lowercase!","success");
    }

    const textChangeHandler=()=>{
        let replaceText=prompt('enter text to replace');
        if(replaceText === null){
            setText('');
        }
        else{
            setText(replaceText);
        }
        
        if(!isEmpty)
        props.showAlert("Text is replaced!","success");
    };

    const spaceHandler=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        if(!isEmpty)
        props.showAlert("Extra space removed!","success");

    }

    const copyHandler=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        if(!isEmpty)
        props.showAlert("Copied to clipboard!","success");

    }

    const clearHandler=()=>{
        setText('');
        if(!isEmpty)
        props.showAlert("Text cleared!","success");
    }

    return(
        <> 
        <div className='container' style={{backgroundColor:`${props.mode==='light'? 'white':'rgb(7, 7, 37)'} ||${props.Color}`, color:`${props.mode === 'light'?'black':'white'}`}}>     
            <h1>{props.heading}</h1>

            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onchangeHandler} id="myBox" rows="8" style={{backgroundColor:`${props.mode==='light'? 'white':'gray'}`,color:`${props.mode === 'light'?'black':'white'}`}}></textarea>
            
            </div>

            <button className='btn btn-primary mx-2' style={{backgroundColor:` ${props.Color}`}} onClick={onUpClickHandler}>Convert To UpperCase</button>
            <button className='btn btn-primary mx-2' style={{backgroundColor:` ${props.Color}`}} onClick={onLoClickHandler}>Convert To LowerCase</button>
            <button className='btn btn-primary mx-2' style={{backgroundColor:` ${props.Color}`}} onClick={clearHandler}>Clear Text</button>
            <button className='btn btn-primary mx-2' style={{backgroundColor:` ${props.Color}`}} onClick={textChangeHandler}>Change Text</button>
            <button className='btn btn-primary mx-2' style={{backgroundColor:` ${props.Color}`}} onClick={spaceHandler}>Remove spaces</button>
            <button className='btn btn-primary mx-2' style={{backgroundColor:` ${props.Color}`}} onClick={copyHandler}>Copy Text</button>

        </div>  
        
        <div className='container my-3' style={{backgroundColor:`${props.mode==='light'? 'white':'rgb(7, 7, 37)'}||${props.Color}`,color:`${props.mode === 'light'?'black':'white'}`}}>
            <h2>Your Text Summary</h2>
            <p>{!isEmpty && text.trim().split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read </p>

            <h1>Preview</h1>
            <p>{text.length>0 ? text:"Enter something "}</p>
        </div>
        </>
    );
};

export default TextForm;