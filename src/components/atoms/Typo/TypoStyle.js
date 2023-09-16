import styled from "styled-components";

export const HeadingOne = styled.h1`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpace};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

export const HeadingTwo = styled.h2`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpace};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

export const HeadingThree = styled.h3`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpace};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

export const HeadingFour = styled.h4`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpace};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

export const HeadingFive = styled.h5`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpace};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

export const HeadingSix = styled.h6`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpace};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

export const DefaultTypo = styled.p`
  font-weight: ${(props) => props.weight || "400"};
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size || "14px"};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpace};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.width};
  text-decoration: ${({ textDecoration }) => textDecoration};
  cursor: ${({ cursor }) => cursor};
`;
