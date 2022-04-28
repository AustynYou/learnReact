import { useState } from "react";

// const Counter = (init) => {
//   let state = init;
//   const setState = (val) => {
//     state = val;
//   };
//   return [state, setState];
// };

const Counter = () =>{
  const [number, setNumber] = useState(0);
  // const arr = useState(0);
  // const number = arr[0];
  // const setNumber = arr[1];


  // let number = 0;
  return (
  <>
    <h1>{number}</h1>
    <button onClick={()=>{
      setNumber(number + 1);
      // number++; 
      // console.log(number);
    }}>+1</button>
  </>
  );
};

export default Counter;