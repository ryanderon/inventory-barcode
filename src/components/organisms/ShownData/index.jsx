import React from "react";
import styled from "styled-components";
import Barcode from "react-barcode";
import Typo from "../../atoms/Typo";
import FlexBox from "../../atoms/FlexBox";

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

const ShownData = ({ data, onDownload }) => {
  return data?.map((data, index) => (
    <TableContainer
      key={index}
      id={`print-${data?.bin_number}`}
      onClick={() => onDownload(data?.bin_number)}
    >
      <tbody>
        <tr>
          <TableData width="50%" height="100px">
            <Barcode value={data?.bin_number} />
          </TableData>
          <TableData
            padding="0 24px "
            width="50%"
            height="100px"
            textAlign="left"
          >
            <Typo size="48px" weight="800">
              {data?.description}
            </Typo>
          </TableData>
        </tr>
        <tr>
          <TableData width="50%" height="100px">
            <Typo size="48px" weight="800">
              {data?.bin_number}
            </Typo>
            <FlexBox p="8px 16px" bgColor={"#A80000"} jc="center">
              <Typo color={"#FFFFFF"} weight="800" size="16px">
                WAREHOUSE FINNS BEACH CLUB
              </Typo>
            </FlexBox>
          </TableData>
          <TableData width="50%" height="100px">
            <FlexBox dir="column" w="100%" ai="flex-start">
              <Typo size="24px" weight="800">
                Max
              </Typo>
              <Typo size="78px" weight="800">
                {data?.max_mainwarehouse || data?.max_coldroom || 0}
              </Typo>
            </FlexBox>
          </TableData>
        </tr>
      </tbody>
    </TableContainer>
  ));
};

export default ShownData;
