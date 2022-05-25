import { useState, useEffect } from "react";
import styled from "styled-components";

import { getMovieList } from "../../apis";
import MovieList from "../organisms/MovieList";
import { countryList } from "../../data/index";

const Movie = () => {
  const [text, setText] = useState("");
  const [country, setCountry] = useState("KR");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    console.log(country);
  }, [country]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { items } = await getMovieList({ query: text });
    setMovieList(items);
  };
  return (
    <Layout>
      <h1>영화</h1>
      <Form onSubmit={handleSubmit}>
        <select onChange={(e) => setCountry(e.target.value)}>
          {countryList.map(({ code, name }) => (
            <option value={code}>{name}</option>
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
