import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../../apis/index";
import styled from "styled-components";

const BookDetail = () => {
  const [book, setBook] = useState({});
  const { isbn } = useParams();

  useEffect(() => {
    // 즉시 실행 함수: IIFE
    (async () => {
      const result = await getBookDetail({ d_isbn: isbn });
      setBook(result.items[0]);
    })();
  }, []);

  const { image, title } = book;

  return (
    <>
      <Thumbnail src={image} />
      <Title>{title}</Title>
    </>
  );
};

const Thumbnail = styled.img`
  width: 50%;
`;
const Title = styled.h2``;
export default BookDetail;
