import { useState } from 'react';

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = e => {
    setName(e.target.name);
  };
  const onChangeNickname = e => {
    setNickname(e.target.nickname);
  };

  return <>
  <input value={name} onChange={onChangeName} />
  <input value={nickname} onChange={onChangeNickname} />

  <b>이름:</b> {name}
  <b>닉네임:</b> {nickname}

  </>;
};

export default Info;