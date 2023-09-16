import React from "react";
import { ModalContainer, Overlay } from "./LoadingSpinnerStyle";
import Loading from "../../atoms/Loading";

const LoadingSpinner = ({ isVisible = false }) => {
  return (
    <Overlay isVisible={isVisible}>
      <ModalContainer>
        <Loading />
      </ModalContainer>
    </Overlay>
  );
};

export default LoadingSpinner;
