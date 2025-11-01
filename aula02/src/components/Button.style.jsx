import { styled } from "styled-components";

export const StyleButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: orange;

  &:hover {
    background-color: green;
  }
`;

export const RedButton = styled(StyleButton)`
  background-color: #dc3545;

  &:hover {
    background-color: darkred;
  }
`;

export const BlueButton = styled(StyleButton)`
  background-color: #00d7ff;

  &:hover {
    background-color: darkblue;
  }
`;
