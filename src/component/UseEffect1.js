import { useState, useEffect } from "react";


const UseEffect1 = () => {

    const [count, setCount] = useState(0);

    useEffect (() => { 
        if (count >= 1){
            document.title = `Chats (${count})`
        }
        else{
            document.title = `Chats`
        }
        // document.title = `Chats (${count})`
     }, [count]);

   


console.log("Hello diksha...its run first thn useeffect");
    return(
        <div>
            <h1>{count}</h1>
            <button className="btn btn-primary" 
            onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}


export default UseEffect1;