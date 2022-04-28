import MyComponent from "./MyComponent";

function JsxPractice(){
  const name = "";
  const isShow = true;

    const style2 = {
      backgroundColor: "black",
      color: "aqua",
      fontSize: "48px",
      fontWeight: "bold",
      padding: 16
    }
  return(
    <>
      <h1 style={style2}>{name} 안녕!</h1>
      <h2 className="react">잘 작동하니?</h2>
      {name === "뷰!" ? <h1>리액트 입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
      {isShow && <h1>리액트입니다.</h1> }
      {name || "값이 undefined 입니다."}
      {name ?? "값이 undefined 입니다."}

      <br />
      <input />

      <MyComponent name="리액트" name2="리액트2"/>
    </>
  );
}

export default JsxPractice;