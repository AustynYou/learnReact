import conn from "../config/db.js";

export const postUsers = async (req, res) => {
  // 1. user_name 중복검사. SELECT문으로 db에 겹치는 user_name이 있는지
  // 1.1 있으면 회원가입 실패
  // 2. 비밀번호 암호화: salt(랜덤값)와 평문으로 암호화된 비밀번호만들기
  // 3. user_name, name, 비밀번호, salt를 db에 INSERT
  req.body;
  const [rows] = await conn.query(`SELECT * FROM user`);
  console.log(rows);

  res.send("user user user user");
};
