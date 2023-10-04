// import React, { useState, useEffect } from 'react';

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   function toggle() {
//     setIsActive(!isActive);
//   }

//   function reset() {
//     setSeconds(0);
//     setIsActive(false);
//   }

//   useEffect(() => {
//     let interval = null;
//     if (isActive) {
//       interval = setInterval(() => {
//         setSeconds(seconds => seconds + 1);
//       }, 1000);
//     } else if (!isActive && seconds !== 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, seconds]);

//   return (
//     <div className="app">
//       <div className="time">
//         {seconds}s
//       </div>
//       <div className="row">
//         <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
//           {isActive ? 'Pause' : 'Start'}
//         </button>
//         <button className="button" onClick={reset}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timer;
import { useState, useEffect } from "react";


const TimeOut = () =>{
   
  const [count, setCount] = useState(0);

      const IncrementHandle = () =>{
        // if (count < 10) {
        //   setCount(count + 1)
        // }
        setCount(c => Math.min(c + 1, 10));
      }
       const DecrementHandle = () =>{
        //   if (count > 0) {
        //   setCount(count - 1)
        // }
        setCount(c => Math.max(c - 1, 0));
      }

return (

      <div>

      <h2>

      Count: {count}

      <br />

     

      </h2>

      <button onClick={IncrementHandle}>Increment</button>

      <button onClick={DecrementHandle}>Decrement</button>

      </div>

)

}

export default TimeOut;