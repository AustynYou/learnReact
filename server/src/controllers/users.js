import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import conn from "../config/db.js";
import { secretKey } from "../config/jwt.js";

export const postUsers = async (req, res) => {
  // 1. user_name 중복검사. SELECT문으로 db에 겹치는 user_name이 있는지
  // 1.1 있으면 회원가입 실패
  // 2. 비밀번호 암호화: salt(랜덤값)와 평문으로 암호화된 비밀번호만들기
  // 3. user_name, name, 비밀번호, salt를 db에 INSERT

  const { user_name, password, name } = req.body;
  const query = `
    SELECT id FROM user
    WHERE user_name = '${user_name}';
  `;
  const [rows] = await conn.query(query);
  // console.log(rows);
  if (rows.length > 0) {
    return res
      .status(409)
      .send({ success: false, message: "중복되는 아이디가 있습니다." });
  }

  const salt = await bcrypt.genSalt();
  const hashedPW = await bcrypt.hash(password, salt);

  const query2 = `
    INSERT INTO user(user_name, password, salt, name) 
    VALUES(?,?,?,?)
  `;
  await conn.query(query2, [user_name, hashedPW, salt, name]);

  res.send({ success: true });
};

export const postUsersToken = async (req, res) => {
  // 1. DB에 동일한 user_name이 있는지 체크
  // 1-1. 없으면 로그인 실패
  // 2. 1.에서 가져온 salt와 사용자가 입력한 password로
  //        hashedPW 만들기 (회원가입 할 때와 같은 과정)
  // 3. DB에 있는 password와 2.에서 만든 hashedPW를 비교
  // 3-1. 다르면 로그인실패
  // 4. 토큰 생성
  // 5. 토큰 전달

  console.log(req.headers);
  const { user_name, password } = req.body;
  const query = `
    SELECT id, salt, password FROM user
    WHERE user_name = ?
  `;

  const [users] = await conn.query(query, [user_name]);
  // console.log(users);
  if (users.length === 0) {
    return res
      .status(401)
      .send({ success: false, message: "일치하는 유저가 없습니다." });
  }

  const user = users[0];
  const { id, salt } = user;

  const hashedPW = await bcrypt.hash(password, salt);
  if (user.password !== hashedPW) {
    return res
      .status(401)
      .send({ success: false, message: "비밀번호가 일치하지 않습니다." });
  }

  const payload = {
    userId: id,
  };
  const option = {
    expiresIn: "1d",
  };

  const token = jwt.sign(payload, secretKey, option);

  // 토큰 발급
  res.send({ success: true, token });
};
