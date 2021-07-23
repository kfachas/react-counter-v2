const Counter = ({ value, setCounters, counters, index }) => {
  return (
    <div>
      <button
        type="text"
        onClick={() => {
          const tab = [...counters];
          tab[index] = value - 1;
          setCounters(tab);
        }}
      >
        -
      </button>
      {counters[index]}
      <button
        type="text"
        onClick={() => {
          const tab = [...counters];
          tab[index] = value + 1;
          setCounters(tab);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
