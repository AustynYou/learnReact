import { useRef } from "react"
import styled from 'styled-components';

const InputFile = () => {
  const fileEl = useRef(null);
  return (
    <>
      <Input type="file" style={{display: "none"}} ref={fileEl}/>
      <button onClick={() => fileEl.current.click()}>업로드</button>
    </>
  )
}

const Input = styled.input`
  display: none;
`

export default InputFile;