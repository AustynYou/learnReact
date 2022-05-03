import { useRef } from "react"

const InputFile = () => {
  const fileEl = useRef(null);
  return (
    <>
      <input type="file" style={{display: "none"}} ref={fileEl}/>
      <button onClick={() => fileEl.current.click()}>업로드</button>
    </>
  )
}

export default InputFile;