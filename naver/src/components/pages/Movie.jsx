import { useState, useEffect } from "react";
import styled from "styled-components";

import { getMovieList } from "../../apis";
import MovieList from "../organisms/MovieList";
import { countryList, genreList } from "../../data/index";

const Movie = () => {
  const [text, setText] = useState("");
  const [country, setCountry] = useState("ALL");
  const [genre, setGenre] = useState("ALL");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    searchMovieList();
  }, [country, genre]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    searchMovieList();
  };

  const searchMovieList = async () => {
    if (text === "") return;
    // const params = { query: text, country };
    // if (country === "ALL") delete params.country;

    const params = { query: text };
    if (country !== "ALL") params.country = country;
    if (genre !== "ALL") params.genre = genre;

    const { items } = await getMovieList(params);
    setMovieList(items);
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
