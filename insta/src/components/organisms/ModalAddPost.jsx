import { useState, useRef } from "react";
import styled from "styled-components";

import { Backdrop, ModalContainer } from "../atoms";

import { createPost } from "../../apis/post";

const ModalAddPost = () => {
  const [imgPreview, setImgPreview] = useState("");
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const fileEl = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImgPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {};
  createPost({ file, content });
  return (
    <>
      <Backdrop />
      <Container>
        <Header>Create new post</Header>
        <Main>
          {imgPreview ? (
            <ImgPreview src={imgPreview} />
          ) : (
            <>
              <Guide>Drag photos and videos here</Guide>
              <BtnUpload onClick={() => fileEl.current.click()}>
                Select from computer
              </BtnUpload>
              <InputFile
                onChange={handleFileChange}
                ref={fileEl}
                type="file"
                accept="image/*"
              />
            </>
          )}
          <Textarea rows="3" onChange={(e) => setContent(e.target.value)} />
          <BtnUpload onClick={handleSubmit}>업로드</BtnUpload>
        </Main>
      </Container>
    </>
  );
};
const Container = styled(ModalContainer)`
  background-color: #fff;
  width: 583px;
  border-radius: 10px;
`;
const Header = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;
const Main = styled.div`
  height: 583px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
`;
const Guide = styled.p`
  font-size: 24px;
`;

const BtnUpload = styled.button`
  background: #0095f6;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;
const InputFile = styled.input`
  display: none;
`;
const ImgPreview = styled.img``;
const Textarea = styled.textarea``;
export default ModalAddPost;
