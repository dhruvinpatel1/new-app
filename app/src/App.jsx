import { useEffect, useState } from "react";
import StepBuilder from "./Components/StepBuilder";
import StartWithDiamond from "./Pages/StartWithDiamond";
import ViewDiamond from "./Pages/ViewDiamond";
import CompleteRing from "./Pages/CompleteRing";
import CompareDiamond from "./Pages/CompareDiamond";

function App() {
  const [dataType, setDataType] = useState({});

  useEffect(() => {
    const meta = document.querySelector('meta[name="viewport"]');
    if (meta) {
      let content = meta.getAttribute("content") || "";
      if (!content.includes("maximum-scale")) {
        content += ", maximum-scale=1";
        meta.setAttribute("content", content.trim());
      }
    }

    const root = document.getElementById("root");
    if (root) {
      setDataType(root.dataset);
    }
  }, []);

  console.log("dataType",dataType)

  return (
    <>
      {dataType.collection == "engagement-ring" &&
      dataType.page == "collection" ? (
        <StepBuilder pagetype={"ring-list"} />
      ) : dataType.productCollection == "engagement-ring" &&
        dataType.page == "product" ? (
        <StepBuilder pagetype={"ring-detail"} />
      ) : dataType.handle == "picking-a-diamond" ? (
        <StartWithDiamond />
      ) : dataType.handle == "view-diamond" ? (
        <ViewDiamond />
      ) : dataType.handle == "complete-ring" ? (
        <CompleteRing />
      ) : dataType.handle == "porownaj-diament" ? (
        <CompareDiamond />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
