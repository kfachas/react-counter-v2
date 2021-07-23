const Counter = ({ setValue, value }) => {
  return (
    <div>
      <button
        type="text"
        onClick={() => {
          const newValue = [...value[0]];
          setValue(newValue - 1);
        }}
      >
        -
      </button>
      {value[0]}
      <button
        type="text"
        onClick={() => {
          const newValue = [...value[0]];
          setValue(newValue + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
