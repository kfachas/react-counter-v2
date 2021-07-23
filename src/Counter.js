const Counter = ({ setValue, value }) => {
  return (
    <div>
      <button
        type="text"
        onClick={() => {
          const newValue = [...value];
          newValue[0] = newValue[0] - 1;
          setValue(newValue);
        }}
      >
        -
      </button>
      {value[0]}
      <button
        type="text"
        onClick={() => {
          const newValue = [...value];
          newValue[0] = newValue[0] + 1;
          setValue(newValue);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
