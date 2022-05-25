import styled from "styled-components";
import { Link } from "react-router-dom";

const BookLists = ({ data }) => {
  return (
    <List>
      {data.map(({ image, title, isbn }) => (
        <Link to={`/book/${isbn.split(" ")[1]}`} key={image}>
          <Item>
            <Thumbnail src={image} />
            <Title dangerouslySetInnerHTML={{ __html: title }} />
          </Item>
        </Link>
      ))}
    </List>
  );
};

// title, link, image, pubDate, subtitle

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Item = styled.li``;
const Thumbnail = styled.img`
  width: 100%; ;
`;
const Title = styled.p``;

export default BookLists;
