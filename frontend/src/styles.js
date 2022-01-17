import styled from "styled-components";

export const Main = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: grid;
  justify-content: center;
  grid-template-rows: 1fr 3fr;
  grid-template-colums: 320px 320px;

  & > *:first-child {
    text-align: center;
    align-self: center;
  }
`