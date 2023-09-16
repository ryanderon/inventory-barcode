import React, { forwardRef } from "react";
import {
  DefaultTypo,
  HeadingFive,
  HeadingFour,
  HeadingOne,
  HeadingSix,
  HeadingThree,
  HeadingTwo,
} from "./TypoStyle";

const Typo = forwardRef((props, ref) => {
  if (props.variant == "h1")
    return (
      <HeadingOne ref={ref} {...props}>
        {props.children}
      </HeadingOne>
    );
  if (props.variant == "h2")
    return (
      <HeadingTwo ref={ref} {...props}>
        {props.children}
      </HeadingTwo>
    );
  if (props.variant == "h3")
    return (
      <HeadingThree ref={ref} {...props}>
        {props.children}
      </HeadingThree>
    );
  if (props.variant == "h4")
    return (
      <HeadingFour ref={ref} {...props}>
        {props.children}
      </HeadingFour>
    );
  if (props.variant == "h5")
    return (
      <HeadingFive ref={ref} {...props}>
        {props.children}
      </HeadingFive>
    );
  if (props.variant == "h6")
    return (
      <HeadingSix ref={ref} {...props}>
        {props.children}
      </HeadingSix>
    );
  return (
    <DefaultTypo ref={ref} {...props}>
      {props.children}
    </DefaultTypo>
  );
});

Typo.displayName = "Typo";

export default Typo;
