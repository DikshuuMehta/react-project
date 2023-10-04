import React, {useState} from "react"


export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("uppercase was clicked");
    }
    const [text, setText] = useState('Enter text here');
   
    return (
        <div>  
            <h1>{props.heading}  </h1>
           <div class="form-group">
    {/* <label for="myBox">Example textarea</label> */}
    <textarea class="form-control" id="myBox"
    value={text} onChange= {handleOnChange} rows="8">
   </textarea>
  </div>
  <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to
   uppercase</button>
 </div>
 )
}