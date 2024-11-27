import React from "react";
import Barcode from "react-barcode";
// import Typo from "../../atoms/Typo";
// import FlexBox from "../../atoms/FlexBox";
import { TableContainer, TableData } from "../../atoms/Table";

const ShownData = ({ data, onDownload }) => {
  return data?.map((data, index) => (
    <TableContainer
      key={index}
      id={`print-${data?.bin_number}`}
      onClick={() => onDownload(data?.bin_number)}
    >
      <tbody>
        <tr>
          <TableData width="50%" height="350px">
            <Barcode
              width={5.5}
              height={250}
              fontSize={32}
              fontOptions="bold"
              value={data?.bin_number}
            />
          </TableData>
          {/* <TableData
            padding="0 24px "
            width="50%"
            height="100px"
            textAlign="left"
          >
            <Typo size="48px" weight="800">
              {data?.description}
            </Typo>
          </TableData> */}
        </tr>
        {/* <tr>
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
            <FlexBox w="100%" ai="center" gap="12px">
              <Typo size="48px" weight="800">
                MAX:
              </Typo>
              <Typo size="100px" weight="800">
                {`${
                  [null, "", undefined].includes(
                    data?.max_mainwarehouse || data?.max_coldroom
                  )
                    ? data?.max_mainwarehouse || data?.max_coldroom
                    : data?.max_mainwarehouse || data?.max_coldroom || 0
                } ${data?.unit || ""}`}
              </Typo>
            </FlexBox>
          </TableData>
        </tr> */}
      </tbody>
    </TableContainer>
  ));
};

export default ShownData;
