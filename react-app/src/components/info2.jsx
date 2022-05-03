import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info2 = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: ""})
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
  <>
  <div>
    <input name="name" value={name} onChange={onChange}/>
  </div>
  </>
  );
}