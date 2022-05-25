import { useState } from "react";
import styled from "styled-components";

import { getBookList } from "../../apis";
import BookLists from "../organisms/BookList";

const Book = () => {
  const [text, setText] = useState("");
  const [BookList, setBookList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { items } = await getBookList({ query: text });
    setBookList(items);
  };
  return (
    <Layout>
      <h1>책</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>검색</button>
      </Form>
      <BookLists data={BookList} />
    </Layout>
  );
};
const Layout = styled.div`
  padding: 15px;
`;
const Form = styled.form`
  display: flex;
  padding: 15px;
`;
const Input = styled.input`
  flex: 1;
  margin-right: 15px;
`;

export default Book;
