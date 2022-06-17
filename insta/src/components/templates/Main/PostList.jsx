import { useState, useEffect } from "react";
import styled from "styled-components";

import { getPosts } from "../../../apis/post.js";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    const result = await getPosts();
    setPosts(result);
  };
  return (
    <List>
      {posts.map(({ id, imageList, content }) => (
        <Item key={id}>
          <Header></Header>
          <ImageList>
            {imageList.map((image) => (
              <Image src={image} key={image} />
            ))}
          </ImageList>
          <Content>{content}</Content>
        </Item>
      ))}
    </List>
  );
};
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Item = styled.li`
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background: #fff;
  margin: 20px 0;
`;
const Header = styled.div`
  height: 58px;
`;
const ImageList = styled.div``;
const Image = styled.img`
  width: 470px;
  height: 470px;
`;
const Content = styled.div`
  padding: 20px;
`;

export default PostList;
