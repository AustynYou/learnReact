import axios from "axios";

export const getMovieList = async (params) => {
  const { data } = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "ytDeDWg6uJdbzT8tzos9",
      "X-Naver-Client-Secret": "VyoOPG5V_A",
    },
    params,
  });
  return data;
};

export const getBookList = async (params) => {
  const { data } = await axios.get("/v1/search/book.json", {
    headers: {
      "X-Naver-Client-Id": "ytDeDWg6uJdbzT8tzos9",
      "X-Naver-Client-Secret": "VyoOPG5V_A",
    },
    params,
  });
  return data;
};
