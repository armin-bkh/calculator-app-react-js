import styled from "styled-components";

export const ButtonContainer = styled.div`
  height: 100%;
  grid-column: ${({ col }) => {
    if (col === "back") return "4/ span 1";
    if (col === "=") return "3 / span 2";
    if (col === "*" || col === "/") return "4 / span 1";
    if (col === "0") return "2 / span 1";
    if (col === ".") return "3 / span 1";
  }};
  grid-row: ${({ col }) => {
    if (col === "=") return "6 / span 1";
    if (col === "back") return "2/ span 1";
    if (col === "*") return "4 / span 2";
    if (col === "0") return "5 / span 1";
    if (col === ".") return "5 / span 1";
    if (col === "*" || col === "/") return "3 / span 1";
  }};

  & button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 8px;
    border: none;
    outline: none;
    color: #fff;
    font-size: 2rem;
    font-weight: 700;

    &:active {
      color: #ccc;
      opacity: 0.5;
    }

    &:hover {
      opacity: 0.7;
    }

    background-color: ${({ type }) => {
      if (type === "op") return "#9D174D";
      else if (type === "del") return "#A78BFA";
      else if (type === "eq") return "orange";
      else return "#3B82F6";
    }};
  }
`;
