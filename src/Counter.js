const Counter = ({ setValue, value }) => {
  return (
    <div>
      <button
        type="text"
        onClick={() => {
          setValue(value[0] - 1);
        }}
      >
        -
      </button>
      {value[0]}
      <button
        type="text"
        onClick={() => {
          setValue(value[0] + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
