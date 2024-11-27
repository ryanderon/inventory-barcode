import { useState, useTransition } from "react";
import html2canvas from "html2canvas";
import "./App.css";
import FlexBox from "./components/atoms/FlexBox";
import LoadingSpinner from "./components/molecules/LoadingSpinner";
// import ShownData from "./components/organisms/ShownData";
import Typo from "./components/atoms/Typo";
// import { rowDDL } from "./helpers";
import NumberOnly from "./components/organisms/ShownData/NumberOnly";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState("");
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  const handleFile = async (e) => {
    // setSearch("");
    // setFilter("");
    setIsLoading(true);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = async (e) => {
      const jsonData = await JSON.parse(e.target.result);

      setData(jsonData);
      setFilteredData(jsonData);

      setIsLoading(false);
    };
  };

  // const handleChange = (e) => {
  //   setSearch(e?.target?.value);

  //   startTransition(() => {
  //     setFilteredData(
  //       data?.filter(
  //         (val) =>
  //           val?.upc_code?.toString()
  //             ?.toLowerCase?.()
  //             ?.includes(e?.target?.value?.toLowerCase())
  //       )
  //     );
  //   });
  // };

  // const handleFilter = (e) => {
  //   setFilter(e?.target?.value);

  //   if (e?.target?.value == "ALL ROW") {
  //     startTransition(() => {
  //       setFilteredData(
  //         data?.filter((val) =>
  //           val?.description?.toLowerCase?.()?.includes(search?.toLowerCase())
  //         )
  //       );
  //     });
  //   }

  //   startTransition(() => {
  //     setFilteredData(
  //       data?.filter(
  //         (val) =>
  //           val?.row
  //             ?.toLowerCase?.()
  //             ?.includes(e?.target?.value?.toLowerCase()) &&
  //           val?.description?.toLowerCase?.()?.includes(search?.toLowerCase())
  //       )
  //     );
  //   });
  // };

  const downloadSpecificItem = async (binNumber) => {
    setIsLoading(true);

    setTimeout(async () => {
      const element = document.getElementById(`print-${binNumber}`);
      const canvas = await html2canvas(element);
      const dataURL = canvas.toDataURL("image/jpeg");

      const link = document.createElement("a");
      link.href = dataURL;
      link.download = `${binNumber}.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsLoading(false);
    }, 0);
  };

  // const clearData = () => {
  //   setData([]);
  //   setFilteredData([]);
  //   setSearch("");
  //   setFilter("");
  // };

  return (
    <div className="App">
      <FlexBox w="100wh" dir="column" gap="12px" p="24px">
        <LoadingSpinner isVisible={isLoading} />
        <FlexBox w="100%" gap="12px" ai="center" wrap="wrap">
          {/* <input value={search} onChange={handleChange} /> */}
          {/* <select name="row" onChange={handleFilter}>
            {rowDDL?.map((v, idx) => (
              <option key={idx}>{v}</option>
            ))}
          </select> */}
          {/* <button onClick={clearData}>Clear Data</button> */}
          <input
            accept="application/json"
            type={"file"}
            onChange={handleFile}
          />
        </FlexBox>

        {data?.length === 0 && (
          <FlexBox w="100%" dir="column">
            <Typo size="14px" weight="800">
              NO DATA FOUND.
            </Typo>
            <Typo size="14px" weight="800" textAlign="left" color={"#A80000"}>
              IMPORTANT NOTES: <br />
              UPLOAD A JSON FILE THAT CONTAINS: upc_code & description
            </Typo>
          </FlexBox>
        )}

        {!isPending && (
          <NumberOnly data={filteredData} onDownload={downloadSpecificItem} />
        )}
      </FlexBox>
    </div>
  );
}

export default App;
