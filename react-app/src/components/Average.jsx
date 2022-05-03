import { useState } from "react";

const getAverage = numbers => {
  console.log("평균 값 계산 중...");
  if (numbers.length === 0 ) return 0;
  const sum = numbers.reduce((a,b) => a+b);
  return sum / numbers
}

const [list, setList] = useState("");
const [number, setNumber] = useState();

const onInsert = (e) => {
  
}