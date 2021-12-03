import { useState } from "react";
import CalcButton from "./Components/CalcButton/CalcButton";
import { Container } from "./Components/Styled/Container.style";
import GlobalStyled from "./Components/Styled/GlobalStyled.style";
import { Input } from "./Components/Styled/Input.style";
import { BsDot, BsBackspace } from "react-icons/bs";
import { FaEquals, FaDivide, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { Header } from "./Components/Styled/Header.style";
function App() {
  const [value, setValue] = useState("");

  const calcBtns = [
    { value: "7", onAdd: () => setValue((prevValue) => (prevValue += "7")) },
    { value: "8", onAdd: () => setValue((prevValue) => (prevValue += "8")) },
    { value: "9", onAdd: () => setValue((prevValue) => (prevValue += "9")) },
    { value: "4", onAdd: () => setValue((prevValue) => (prevValue += "4")) },
    { value: "5", onAdd: () => setValue((prevValue) => (prevValue += "5")) },
    { value: "6", onAdd: () => setValue((prevValue) => (prevValue += "6")) },
    { value: "1", onAdd: () => setValue((prevValue) => (prevValue += "1")) },
    { value: "2", onAdd: () => setValue((prevValue) => (prevValue += "2")) },
    { value: "3", onAdd: () => setValue((prevValue) => (prevValue += "3")) },
    { value: "0", onAdd: () => setValue((prevValue) => (prevValue += "0")) },
    {
      value: "+",
      icon: <FaPlus />,
      onAdd: () => setValue((prevValue) => (prevValue += "+")),
    },
    {
      value: "-",
      icon: <FaMinus />,
      onAdd: () => setValue((prevValue) => (prevValue += "-")),
    },
    {
      value: "*",
      icon: <FaTimes />,
      onAdd: () => setValue((prevValue) => (prevValue += "*")),
    },
    {
      value: "/",
      icon: <FaDivide />,
      onAdd: () => setValue((prevValue) => (prevValue += "/")),
    },
    {
      value: ".",
      icon: <BsDot />,
      onAdd: () => setValue((prevValue) => (prevValue += ".")),
    },
    {
      value: "back",
      icon: <BsBackspace />,
      onAdd: () =>
        setValue((prevValue) => prevValue.substring(0, prevValue.length - 1)),
    },
    {
      value: "=",
      icon: <FaEquals />,
      onAdd: () => {
        try {
          setValue(String(eval(value)));
        } catch {
          setValue("wrong value!");
        }
      },
    },
    { value: "C", onAdd: () => setValue("") },
  ];

  const changeValueHandler = (e) => setValue(e.target.value);

  return (
    <>
      <GlobalStyled />
      <Container>
        <Header>Calculator</Header>
        <Input
          autoFocus
          value={value}
          type="text"
          onChange={changeValueHandler}
        />
        {calcBtns.map((btn) => (
          <CalcButton key={btn.value} btn={btn} />
        ))}
      </Container>
    </>
  );
}

export default App;
