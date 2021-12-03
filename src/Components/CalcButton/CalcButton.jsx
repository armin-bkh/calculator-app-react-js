const CalcButton = ({ value, onAdd }) => {
  return (
    <div>
      <button onClick={onAdd} type="button">
        {value}
      </button>
    </div>
  );
};

export default CalcButton;
