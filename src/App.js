import { useState } from "react";
import CalcButton from "./Components/CalcButton/CalcButton";
import { Container } from "./Components/Styled/Container.style";
import GlobalStyled from "./Components/Styled/GlobalStyled.style";
import { Input } from "./Components/Styled/Input.style";

function App() {
  const [value, setValue] = useState("");

  const calcBtns = [{}];

  const changeValueHandler = (e) => setValue(e.target.value);

  return (
    <>
      <GlobalStyled />
      <Container>
        <Input value={value} type="text" onChange={changeValueHandler} />
        <CalcButton />
      </Container>
    </>
  );
}

export default App;
