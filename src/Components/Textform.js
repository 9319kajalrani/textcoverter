import React ,{useState}from 'react'

export default function Textform(props) {
  
    const handleUpClick= () =>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Conerted to uppercase", "success")
    }
    const handleLoclick = () =>{
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showAlert("Conerted to lowercase", "success")
  }
  const handleClearclick = () =>{
     let newtext = '';
     setText(newtext)
     props.showAlert("Text Cleared ", "success")
  }
    const handleOnchange= (event) =>{
        setText(event.target.value);
    }
    const handleCopy = () =>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard", "success")
    }

   const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra spaces Removed", "success")
  }
    const handleSentenceclick = () => {
      const newtext = text.charAt(1).toUpperCase() + text.slice(1).toLowerCase();
      setText(newtext);
      props.showAlert("sentencecase done" , "success")
    }
    const handleTitleclick = () => {
     const newtext = text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
      setText(newtext);
      props.showAlert("titlecase done" , "success")
      
    }
    const handleAltnatclick = (event) => {
      let newText = '';
  
      for (let i = 0; i < text.length; i++) {
        if (i % 2 === 0) {
          newText += text[i].toUpperCase();
        } else {
          newText += text[i].toLowerCase();
        }
      }
      setText(newText);
    };
  const [text, setText] = useState(' ');
    
  return (
    <>
    <div  className="container  my-3" style={{color:props.mode === 'dark'?'white':'#042743'}} >
      <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text}  onChange={handleOnchange} style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
      </div>
      <button disabled ={text.length===0} className='btn btn-success mx-1 my-1'  onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled ={text.length===0} className='btn btn-success mx-1 my-1'  onClick={handleLoclick}>Convert to Lowercase</button>
      <button disabled ={text.length===0} className='btn btn-success mx-1 my-1'  onClick={handleClearclick}>Clear Text</button>
      <button disabled ={text.length===0} className='btn btn-success mx-1 my-1'  onClick={handleCopy}>Copy Text</button>
      <button disabled ={text.length===0} className='btn btn-success mx-1 my-1'  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled ={text.length===0} className='btn btn-success mx-1 my-1'  onClick={handleSentenceclick}>Sentence Case</button>
      <button disabled ={text.length===0} className='btn btn-success mx-1 my-1'  onClick={handleTitleclick}>Title Case</button>
      <button disabled ={text.length===0} className='btn btn-success mx-1 my-1'  onClick={handleAltnatclick}>Alternating Case</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}> 
      <h1>Text Summary </h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
