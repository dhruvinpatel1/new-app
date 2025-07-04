import React from "react";
import { GlobleVal } from "../Hooks/GlobleVal";
const { shapeList } = GlobleVal();

const DiamondList = ({
  data,
  onSelectDiamond,
  selectedDiamond,
  compareDiamonds,
  setCompareDiamonds,
}) => {
  const handleCheckboxChange = (diamondId) => {
    let updatedSelected = [...compareDiamonds];

    if (updatedSelected.includes(diamondId)) {
      updatedSelected = updatedSelected.filter((id) => id !== diamondId);
    } else {
      updatedSelected.push(diamondId);
    }

    setCompareDiamonds(updatedSelected); // ✅ Update state
  };

  return (
    <>
      {data?.length > 0 ? (
        data?.map((diamond, index) => (
          <tr
          id={`diamond-${diamond.stock_no}`}
          key={diamond.stock_no}
            className={`text-center cursor-pointer ${
              selectedDiamond?.stock_no === diamond.stock_no
                ? "bg-gray-300"
                : "hover:bg-gray-200"
            } ${index % 2 == 0 ? "bg-[#f8f5ee]" : ""}`}
            onClick={() => onSelectDiamond(diamond)}
          >
            <td className="py-6">
              <div className="sm:hidden mb-16">
                {shapeList[diamond.Shape]}
                <p>KSZTAŁT</p>
              </div>
              <div
                className="flex justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="checkbox"
                  checked={compareDiamonds.includes(diamond.stock_no)}
                  onChange={() => handleCheckboxChange(diamond.stock_no)}
                />

                {diamond?.VideoLink && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-9"
                  >
                    <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                  </svg>
                )}
              </div>
            </td>
            <td className="sm:!table-cell hidden py-6">
              {shapeList[diamond.Shape]}
            </td>
            <td className="py-6">
              <div className="mb-6  sm:mb-0">
                {diamond.Wt}
                <p className="sm:hidden">Carat</p>
              </div>
              <div className="sm:hidden">
                <p>{diamond.Cut}</p>
                <p>SZLIF</p>
              </div>
            </td>
            <td className="py-6">
              <div className="mb-6  sm:mb-0">
                {diamond.Colour}
                <p className="sm:hidden">BARWA</p>
              </div>
              <div className="sm:hidden">
                <p>{diamond.Clarity}</p>
                <p>CZYSTOŚĆ</p>
              </div>
            </td>
            <td className="hidden sm:!table-cell py-6">{diamond.Clarity}</td>
            <td className="hidden sm:!table-cell py-6">{diamond.Cut}</td>
            <td className="py-6">
              <div className="mb-16 sm:mb-0">
                PLN {diamond.goldport_price}
                <p className="sm:hidden ">CENA</p>
              </div>
              <div className="sm:hidden underline"  onClick={(e) => e.stopPropagation()}>
                <a href={`/pages/widok-diament/?diamond_id=${diamond.stock_no}`} className="sm:hidden">SZCZEGÓŁY</a>
              </div>
            </td>
            <td className="hidden sm:!table-cell py-6 underline"  onClick={(e) => e.stopPropagation()}>
              <a href={`/pages/widok-diament/?diamond_id=${diamond.stock_no}`} >SZCZEGÓŁY</a>
            </td>
          </tr>
        ))
      ) : (
        <td colSpan="12" className="text-center h-[590px] py-6">
          <h2 className="text-center text-2xl my-auto">Brak wyników</h2>
        </td>
      )}
    </>
  );
};

export default DiamondList;
