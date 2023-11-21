import React from "react";
import Barcode from "react-barcode";
import { TableContainer, TableData } from "../../atoms/Table";

const NumberOnly = ({ data, onDownload }) => {
  return data?.map((data, index) => (
    <TableContainer
      key={index}
      id={`print-${data?.upc_code}`}
      onClick={() => onDownload(data?.upc_code)}
    >
      <tbody>
        <tr>
          <TableData width="100%" height="350px">
            <Barcode
              width={6}
              height={250}
              fontSize={32}
              fontOptions="bold"
              value={data?.upc_code?.toString()}
            />
          </TableData>
        </tr>
        
      </tbody>
    </TableContainer>
  ));
};

export default NumberOnly;
