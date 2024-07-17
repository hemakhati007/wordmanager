import React,{useState} from 'react'

export default function Textform({heading,mode,showAlert}) {
    //determinig the current state
    const [text,setText]=useState('enter text here');
    //text here  is varible having the deafult vlaue provided in useState function 
    //setText function used for updation

    //this text varible cant get updated by conventional method we have to use setText function
    //varibles can be of any numbers

    const handleOnChange=(event)=>{//in react when we listen any event like the onchange function is listening to keyboard it will have an event object by default

        setText(event.target.value);//whatever we type will be added to state varible text


        //onchange function is necessary to change state on writting in textform
  }


     const handleUpClick=()=>{

//state text is acessible in this function
        let loText=text.toUpperCase();
         setText(loText);

         //text variable will get updated 
         //if we use simple varible other than state in value=""  it will not get update why?? becauz react do not watch all the values 
         showAlert("converted to uppercase","success");

     }
     const handleloClick=()=>{

          //state text is acessible in this function
                  let newText=text.toLowerCase();
                   setText(newText);
                   //text variable will get updated 
                   //if we use simple varible other than state in value=""  it will not get update why?? becauz react do not watch all the values 
                   showAlert("converted to lowercase","success");
               }
     


  return (
   <>

    <div className="container" style={{color:mode==='light'?'black':'white'}}>
     
     <h1 >{heading}</h1>

     <div className="mb-3" >
          {/* for css values put values in string */}
     <textarea className="form-control my-3" value={text} onChange={handleOnChange} 
     
     // as value="" is given on writting in text form the valus of textform wont change
     //on trying to change  with each try onChange function will execute

     id="myBox" rows="8" style={{backgroundColor:mode==='light'?'white':'#251d4c',color:mode==='light'?'black':'white', border:`2px solid {mode=='light'?'black':'white'}`}}></textarea> 
     </div>
    
     {/* change rows to increase height of text area?? */}
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercse</button>
     <button className="btn btn-primary" onClick={handleloClick}>Convert to lowercase</button>

    </div>
    <div className="container my-3"  style={{color:mode==='light'?'black':'white'}}>
     <h2 >Your text summary</h2>
     <p>{text.split(" ").length} words and {text.length} characters </p>
     <p>{0.008 * text.split("").length} Minute read</p>
     <h4>Preview</h4>
     <p>{text.length>0?text:"Enter text above to get the the text preview"}</p>
    </div>

  
</>
     
    
  )
}
