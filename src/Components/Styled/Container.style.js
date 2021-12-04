import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 25rem;
  height: 90vh;
  @media (max-width: 768px) {
    width: 100%;
  }
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(min-max(auto-fit, 1fr));
  gap: 0.5rem;
  padding: 0.5rem;
`;
