import styled from "styled-components";

import BookLists from "../templates/Book/BookList";

import { getBookList } from "../../apis";
import { useState, useEffect } from "react";
import Pagination from "../organisms/Pagination";
import { useNavigate, useLocation } from "react-router-dom";

import qs from "qs";

const Book = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [BookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const reset = () => {
      setText("");
      setPage(1);
      setQuery("");
      setTotal(0);
      setBookList([]);
    };
    const { query, page } = qs.parse(search.slice(1));
    if (query) {
      setQuery(query);
      setText(query);
      if (page) setPage(+page);
    } else {
      reset();
    }
  }, [search]);

  useEffect(() => {
    searchList();
  }, [query, page]);

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

    const search = qs.stringify({ query, page });
    navigate({ search });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(text);
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
