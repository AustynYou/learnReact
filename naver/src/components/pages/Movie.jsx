import { useState, useEffect } from "react";
import styled from "styled-components";

import { getMovieList } from "../../apis";
import MovieList from "../organisms/MovieList";
import { countryList, genreList } from "../../data/index";
import Pagination from "../organisms/Pagination";

const Movie = () => {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");
  const [country, setCountry] = useState("ALL");
  const [genre, setGenre] = useState("ALL");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    searchMovieList();
  }, [country, genre, page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    searchMovieList();
  };

  const searchMovieList = async () => {
    if (text === "") return;
    // const params = { query: text, country };
    // if (country === "ALL") delete params.country;

    // page = 1 2 3 ... 10 11
    // start = 1 11 21 ..91 101
    const start = page * 10 - 9;

    const params = { query: text, start };
    if (country !== "ALL") params.country = country;
    if (genre !== "ALL") params.genre = genre;

    const { items, total } = await getMovieList(params);
    setMovieList(items);
    setTotal(total);
  };
  return (
    <Layout>
      <h1>영화</h1>
      <Form onSubmit={handleSubmit}>
        <select onChange={(e) => setCountry(e.target.value)} value={country}>
          <option value="ALL">전체</option>
          {countryList.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
        <select onChange={(e) => setGenre(e.target.value)} value={genre}>
          <option value="ALL">전체</option>
          {genreList.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
        <Input
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>검색</button>
      </Form>
      <MovieList data={movieList} />
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

export default Movie;
