import { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <InputText
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <BtnSubmit>입력</BtnSubmit>
      </InputWrapper>
    </form>
  );
};

const InputWrapper = styled.div`
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
  background: #000;
  color: #fff;
  border: none;
  height: 40px;
  padding: 0 10px;
  ::placeholder {
    color: #dee2e6;
  }
`;
const BtnSubmit = styled.button`
  width: 50px;
  border: none;
  background: #dee2e6;
  cursor: pointer;
`;

export default TodoForm;
