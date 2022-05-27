import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import { getBookList } from "../../apis";
import BookLists from "../organisms/BookList";
import Pagination from "../organisms/Pagination";
import qs from "qs";

const Book = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search;

  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [BookList, setBookList] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const queryString = qs.parse(search.slice(1));
    console.log(queryString.query);
  }, []);

  useEffect(() => {
    searchList();
  }, [page, query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(text);
  };

  const searchList = async () => {
    if (query === "") return;
    // const params = { query: text, country };
    // if (country === "ALL") delete params.country;

    // page = 1 2 3 ... 10 11
    // start = 1 11 21 ..91 101
    const start = page * 10 - 9;

    const params = { query, start };

    const { items, total } = await getBookList(params);
    setBookList(items);
    setTotal(total);

    const search = qs.stringify({ query });
    navigate({ search });
  };

  return (
    <Layout>
      <h1>Book</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>검색</button>
      </Form>
      <BookLists data={BookList} />
      <Pagination
        nowPage={page}
        total={total}
        onPageChange={(page) => setPage(page)}
      />
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
