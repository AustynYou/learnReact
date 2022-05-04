import { useState } from 'react';
import { useRef } from 'react';

const IterationSample = () => {
  const [text, setText] = useState("");
  const [names, setNames] = useState([
    {id: 1, text: "눈사람"},
    {id: 2, text: "얼음"},
    {id: 3, text: "눈"},
    {id: 4, text: "바람"}
  ]);
  // const [nextId, setNextId] = useState(5);
  const nextId = useRef(5);

  const handleClick = () => {
    if(!text) return;

    const newArr = [...names, { id: nextId.current, }];
    setNames(newArr);
    setText("");
    nextId.current++;
  };

  const handleDelete = (deleteId) => {
    const newArr = names.filter((e) => e.id === deleteId);
  };

  return (
    <div>
        <input value={text} onChange={(e) => setText(e.targets.value)} />
        <button onClick={handleClick}>입력</button>

      <ul>
        {names.map(({ id, text }) => {
          <div key={id}>
          <li onDoubleClick={()=>handleDelete(id)}>
            {text}입니다.</li>
          </div>
        })}
      </ul>
    </div>
  );
};

export default IterationSample;