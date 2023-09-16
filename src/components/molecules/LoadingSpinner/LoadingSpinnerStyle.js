import styled from "styled-components";

export const Overlay = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  z-index: 100;
  border-radius: 6px;
  padding: 8px;
`;
