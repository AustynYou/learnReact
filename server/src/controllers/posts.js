import jwt from "jsonwebtoken";
import conn from "../config/db.js";
import { secretKey } from "../config/jwt.js";

export const getPosts = async (req, res) => {
  const query = `
    SELECT post.*, user.name, user.profile_image,
    GROUP_CONCAT(image.url) AS imageList
    FROM post
    JOIN user ON user.id = post.user_id
    JOIN image ON image.post_id = post.id
    GROUP BY post.id
    ORDER BY post.created_at DESC
    LIMIT 15;
  `;
  const [rows] = await conn.query(query);

  const postList = rows.map((post) => {
    const imageList = post.imageList.split(",");
    return { ...post, imageList };
  });
  res.send(postList);
};
export const postPosts = async (req, res) => {
  const token = req.headers.authorization;

  try {
    const { userId } = jwt.verify(token, secretKey);
    const file = req.file.location;
    const { content } = req.body;

    const query = `
    INSERT INTO post(user_id, content)
    VALUES(${userID}, "${content}");
    `;

    const [newPost] = await conn.query(query);
    const postId = newPost.insertId;

    const query2 = `
    INSERT INTO image(post_id, url)
    VALUES(${postId},"${file}");    
    `;
    await conn.query(query2);

    // console.log(req.file.location, req.body.content);
    res.send({ success: true });
  } catch (e) {
    return res.status(401).send({ success: false });
  }
};
