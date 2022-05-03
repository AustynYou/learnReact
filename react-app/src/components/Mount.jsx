import Info from "./Info"
import { useState } from 'react';

const Mount = () =>{
  const [visible, setVisible] = useState(false);
return (
  <>
    <button onClick={() => {setVisivle(!visible)}}>보이기</button>
    {visible && <Info />}
  </>
  );
};

export default Mount;