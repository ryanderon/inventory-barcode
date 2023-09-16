import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 0.2rem solid rgba(0, 0, 0, 0.1);
  border-top: ${({ color }) => `0.2rem solid ${color || "#FA8038"}`};
  border-radius: 50%;
  width: ${({ size }) => size || "2em"};
  height: ${({ size }) => size || "2em"};
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;
