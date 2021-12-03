import { ButtonContainer } from "../Styled/ButtonContainer.style";

const CalcButton = ({ btn }) => {
  return (
    <ButtonContainer
      col={btn.value}
      type={
        btn.value !== "=" && btn.value !== "back" && btn.icon
          ? "op"
          : btn.value === "="
          ? "eq"
          : btn.value == "back" || btn.value === "C"
          ? "del"
          : null
      }
    >
      <button onClick={btn.onAdd} type="button">
        {btn.icon || btn.value}
      </button>
    </ButtonContainer>
  );
};

export default CalcButton;
