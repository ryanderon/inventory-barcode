import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir || "row"};
  justify-content: ${(props) => props.jc || "flex-start"};
  align-items: ${(props) => props.ai || "flex-start"};
  flex-grow: ${(props) => props.grow || 0};
  flex-basis: ${(props) => props.basis || "auto"};
  flex-shrink: ${(props) => props.shrink || 1};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex: ${(props) => props.flex || "0 1 auto"};
  order: ${(props) => props.order || 0};
  margin: ${(props) => props.m || "0"};
  padding: ${(props) => props.p || "0"};
  width: ${(props) => props.w || "auto"};
  height: ${(props) => props.h || "auto"};
  max-width: ${(props) => props.maxW || "none"};
  max-height: ${(props) => props.maxH || "none"};
  min-width: ${(props) => props.minW || "none"};
  min-height: ${(props) => props.minH || "none"};
  background: ${(props) => props.bgColor || "unset"};
  border-radius: ${(props) => props.radius || "unset"};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-right: ${(props) => props.borderRight};
  border-top: ${(props) => props.borderTop};
  gap: ${(props) => props.gap || "0"};
  cursor: ${(props) => props.cursor || "unset"};
  overflow: ${(props) => props.overflow};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex || "unset"};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 2px;
    width: 2px;
  }

  .react-datepicker-popper {
    z-index: 999;
  }
`;
