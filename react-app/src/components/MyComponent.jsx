const MyComponent = ({ name, name2, children } ) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. 
      {name2}
      <h1>{children}</h1>
    </div>
  );
};

export default MyComponent; 