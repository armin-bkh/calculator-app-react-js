import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
