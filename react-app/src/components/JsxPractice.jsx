import MyComponent from "./MyComponent";

function JsxPractice() {
  const name = "";
  const isShow = false;

  return (
    <>
      <h1
        style={{
          backgroundColor: "black",
          color: "aqua",
          fontSize: "48px",
          fontWeight: "bold",
          padding: 16,
        }}
      >
        {name} 안녕!
      </h1>
      <h2 className="react">잘 작동하니?</h2>

      {/* 조건부렌더링 */}
      {name === "뷰!" ? <h1>리액트 입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
      {isShow && <h1>리액트입니다.</h1>}
      {/* falsy */}
      {name || "값이 undefined입니다."}
      {name ?? "값이 undefined입니다."}

      <br />
      <input />

      <MyComponent name="리액트3" name2="뷰" asdf="asdf"></MyComponent>
      <MyComponent name="리액트4" />
      <MyComponent name="리액트5" />
    </>
  );
}

export default JsxPractice;