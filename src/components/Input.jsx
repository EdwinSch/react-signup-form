const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    ></input>
  );
};

export default Input;
