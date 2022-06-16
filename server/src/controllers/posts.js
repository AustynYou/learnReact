import conn from "../config/db.js";

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
