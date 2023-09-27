import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0;
  margin: ${({ margin }) => margin};
  border-collapse: collapse;
  cursor: pointer;
`;

export const TableData = styled.td`
  vertical-align: ${({ va }) => va || "center"};
  border: ${({ border }) => border || `1px solid #000000`};
  border-style: ${({ borderStyle }) => borderStyle};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-collapse: collapse;
  text-align: ${({ textAlign }) => textAlign || "center"};
  padding: ${({ padding }) => padding || "8px"};
`;
