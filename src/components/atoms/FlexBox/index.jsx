import { Flex } from "./FlexBoxStyle";

const FlexBox = (props) => {
  return <Flex {...props}>{props.children}</Flex>;
};

export default FlexBox;
