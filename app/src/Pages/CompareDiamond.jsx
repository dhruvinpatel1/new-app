import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ArrowNarrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import { GlobleVal } from "../Hooks/GlobleVal";
const { shapeList, DefaultImageUrl } = GlobleVal();

const CompareDiamond = () => {
  const [handleHover, setHandleHover] = useState("");
  const [hideTitle, setHideTitle] = useState(true);
  const [compareData, setCompareData] = useState([]);

  const CompareDiamondIds =
    JSON.parse(localStorage.getItem("compare_diamond")) || [];

  const GetCompareDiamondData = async () => {
    if (!CompareDiamondIds.length) return; // Exit if no IDs are stored

    try {
      const response = await axios.get(
        `https://supplier.goldport.pl/wp-json/netfillip/v1/stone-details?stock_no=${CompareDiamondIds}`
      );
      setCompareData(response.data.result);
    } catch (error) {
      console.error("Error fetching recent diamonds:", error);
    }
  };

  useEffect(() => {
    GetCompareDiamondData();
  }, []);

  const handleremove = (el, id) => {
    el.stopPropagation();
    let e = el.target.parentNode.parentNode;
    e.classList.add("duration-500", "wzero");

    // Get stored IDs from localStorage
    const storedIds = JSON.parse(localStorage.getItem("compare_diamond")) || [];

    // Remove the ID from stored list
    const updatedIds = storedIds.filter((storedId) => storedId !== id);
    // Update localStorage
    localStorage.setItem("compare_diamond", JSON.stringify(updatedIds));

    setTimeout(() => {
      e.parentNode.removeChild(e);
    }, 800);
  };


  const swapr = (e) => {
    e.stopPropagation()

      let elm =
        e.target.nodeName === "svg"
          ? e.target.parentNode.parentNode
          : e.target.parentNode.parentNode.parentNode;
      elm.style.opacity = "0.5";
      elm.nextElementSibling.style.opacity = "0.5";
      elm.classList.add("duration-1000");
      elm.nextElementSibling.classList.add("duration-1000", "ltm20");
      elm.classList.add("lt20");
      setTimeout(() => {
        elm.nextElementSibling.style.opacity = "1";
        elm.style.opacity = "1";
        elm.classList.remove("duration-1000");
        elm.nextElementSibling.classList.remove("duration-1000", "ltm20");
        elm.classList.remove("lt20");
        let next = elm.nextElementSibling;
        if (next && elm) {
          elm.parentNode.insertBefore(next, elm);
        }
      }, 800);
  
  };

  const swapl = (e) => {
    e.stopPropagation()
      let elm =
        e.target.nodeName === "svg"
          ? e.target.parentNode.parentNode
          : e.target.parentNode.parentNode.parentNode;
      elm.previousElementSibling.style.opacity = "0.5";
      elm.style.opacity = "0.5";
      elm.classList.add("duration-1000");
      elm.previousElementSibling.classList.add("duration-1000", "lt20");
      elm.classList.add("ltm20");
      setTimeout(() => {
        elm.previousElementSibling.style.opacity = "1";
        elm.style.opacity = "1";
        elm.classList.remove("duration-1000");
        elm.previousElementSibling.classList.remove("duration-1000", "lt20");
        elm.classList.remove("ltm20");
        let previous = elm.previousElementSibling;
        if (previous && elm) {
          elm.parentNode.insertBefore(elm, previous);
        }
      }, 800);
  };

  const [mobwidth, setMobwidth] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        setMobwidth("mob");
      }
    }
  }, []);

  return (
    <div className="my-12">
      <div className="mx-auto max-w-[1780px]">
        <div className="relative min-h-[827px]">
          <div
            className={`inline-block align-top 2xl:w-[10%] lg:w-[15%] md:w-[21%] ${
              hideTitle ? "w-0" : "w-[25%]"
            } overflow-hidden duration-500 z-[5] bg-white border-white border-[1px] child:h-10 child:flex child:items-center child-even:bg-[#f8f5ee] child:px-3`}
          >
            <p
              onMouseEnter={() => setHandleHover("1")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] ${
                handleHover === "1" ? "!bg-[#f3f3f3]" : ""
              }`}
            ></p>
            <p
              onMouseEnter={() => setHandleHover("2")}
              onMouseLeave={() => setHandleHover("")}
              className={`!h-[110px] sm:!h-[170px] bg-[#f8f5ee] ${
                handleHover === "2" ? "!bg-[#f3f3f3]" : ""
              }`}
            ></p>
            {/* <p
              onMouseEnter={() => setHandleHover("3")}
              onMouseLeave={() => setHandleHover("")}
              className={`${handleHover === "3" ? "!bg-[#f3f3f3]" : ""}`}
            >
              Stock No.
            </p> */}
            <p
              onMouseEnter={() => setHandleHover("4")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] ${
                handleHover === "4" ? "!bg-[#f3f3f3]" : ""
              }`}
            >
              CENA
            </p>
            <p
              onMouseEnter={() => setHandleHover("5")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] bg-[#f8f5ee] ${
                handleHover === "5" ? "!bg-[#f3f3f3]" : ""
              }`}
            ></p>
            <p
              onMouseEnter={() => setHandleHover("6")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] ${
                handleHover === "6" ? "!bg-[#f3f3f3]" : ""
              }`}
            >
              KSZTAŁT{" "}
            </p>
            <p
              onMouseEnter={() => setHandleHover("7")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] bg-[#f8f5ee] ${
                handleHover === "7" ? "!bg-[#f3f3f3]" : ""
              }`}
            >
              CARAT
            </p>
            <p
              onMouseEnter={() => setHandleHover("8")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] ${
                handleHover === "8" ? "!bg-[#f3f3f3]" : ""
              }`}
            >
              BARWA{" "}
            </p>
            <p
              onMouseEnter={() => setHandleHover("9")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] bg-[#f8f5ee] ${
                handleHover === "9" ? "!bg-[#f3f3f3]" : ""
              }`}
            >
              CZYSTOŚĆ{" "}
            </p>
            <p
              onMouseEnter={() => setHandleHover("10")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] ${
                handleHover === "10" ? "!bg-[#f3f3f3]" : ""
              }`}
            >
              SZLIF{" "}
            </p>
            <p
              onMouseEnter={() => setHandleHover("11")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] bg-[#f8f5ee] ${
                handleHover === "11" ? "!bg-[#f3f3f3]" : ""
              }`}
            >
              WYPOLEROWANIE{" "}
            </p>
            <p
              onMouseEnter={() => setHandleHover("12")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] ${
                handleHover === "12" ? "!bg-[#f3f3f3]" : ""
              }`}
            >
              SYMETRIA
            </p>
            {/* <p
              onMouseEnter={() => setHandleHover("13")}
              onMouseLeave={() => setHandleHover("")}
              className={`bg-[#f8f5ee] ${handleHover === "13" ? "!bg-[#f3f3f3]" : ""}`}
            >
              {mobwidth ? "Fluor." : "Fluorescence"}
            </p> */}
            <p
              onMouseEnter={() => setHandleHover("14")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] bg-[#f8f5ee] ${
                handleHover === "14" ? "!bg-[#f3f3f3]" : ""
              }`}
            >
              WYMIARY
            </p>
            <p
              onMouseEnter={() => setHandleHover("15")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] ${
                handleHover === "15" ? "!bg-[#f3f3f3]" : ""
              }`}
            >
              GŁĘBOKOŚĆ%{" "}
            </p>
            <p
              onMouseEnter={() => setHandleHover("16")}
              onMouseLeave={() => setHandleHover("")}
              className={`h-[30px] bg-[#f8f5ee] ${
                handleHover === "16" ? "!bg-[#f3f3f3]" : ""
              }`}
            >
              TAFLA %{" "}
            </p>
          </div>
          <div
            className={`relative inline-block 2xl:w-[90%] lg:w-[85%] md:w-[79%] duration-500 ${
              hideTitle ? "w-[99%]" : "w-[75%]"
            }`}
          >
            {hideTitle ? (
              <ChevronRightIcon
                className="md:hidden absolute w-7 bg-white border-[1px] border-l-0 -left-[1px] top-2 z-[2]"
                onClick={() => setHideTitle(false)}
              />
            ) : (
              <ChevronLeftIcon
                className="md:hidden absolute w-7 bg-white border-[1px] border-l-0 -left-[1px] top-2 z-[2]"
                onClick={() => setHideTitle(true)}
              />
            )}
            {(compareData.length === 0 || CompareDiamondIds.length === 0) && (
              <div className="text-center p-[10%]">
                <p className="text-[22px] font-medium mb-[20px]">
                Obecnie nie wybrano żadnych diamentów.
                </p>
                <p className="text-slate-400">
                Aby porównać diamenty, wyszukaj je, wybierz interesujące Cię opcje i kliknij „Porównaj”.
                </p>
              </div>
            )}
            <div className="relative overflow-x-auto overflow-y-hidden whitespace-nowrap compare">
              {compareData.length > 0 &&
                compareData.map((data, i) => (
                  <div
                    key={data.stock_no}
                    className="inline-block relative sm:w-[200px] w-[130px] overflow-hidden compare-col left-[0%] border-[1px] border-white child:h-10 child:flex child:items-center child:justify-center child-even:bg-[#f8f5ee] text-center"
                    id={data.stock_no}
                  >
                    <p
                      onMouseEnter={() => setHandleHover("1")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`relative text-center compare-row h-[30px] ${
                        mobwidth && "text-[18px]"
                      } ${handleHover === "1" ? "!bg-[#f3f3f3]" : ""}`}
                    >
                      <ArrowNarrowLeftIcon
                        className="absolute left-0 top-0 h-[27px] w-1/5 cursor-pointer"
                        onClick={(e) => swapl(e)}
                      />
                      <span
                        onClick={(e) => handleremove(e, data.stock_no)}
                        className="cursor-pointer"
                      >
                        {" "}
                        {mobwidth ? "X" : "remove"}
                      </span>
                      <ArrowNarrowRightIcon
                        className="absolute right-0 top-0 h-[27px] w-1/5 cursor-pointer"
                        onClick={(e) => swapr(e)}
                      />
                    </p>
                    <p
                      onMouseEnter={() => setHandleHover("2")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`!h-[110px] sm:!h-[170px] ${
                        handleHover === "2" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      <p className="relative h-full w-full bg-[#f8f5ee]">
                        <img
                          src={
                            data?.ImageB
                              ? data.ImageB
                              : `${DefaultImageUrl}/diamond-${data.Shape}.jpg`
                          }
                          fill
                          alt={data.Shape}
                          className="p-[4%] mix-blend-multiply !h-[110px] sm:!h-[170px] w-full"
                        />
                      </p>
                    </p>
                    {/* <p
                      onMouseEnter={() => setHandleHover("3")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`whitespace-normal leading-[1]  ${
                        handleHover === "3" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      {data.stock_no}
                    </p> */}
                    <p
                      onMouseEnter={() => setHandleHover("4")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] complete-ring ${
                        handleHover === "4" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      PLN {data.goldport_price}
                    </p>
                    <p
                      onMouseEnter={() => setHandleHover("5")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] bg-[#f8f5ee] px-4 ${
                        handleHover === "5" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      <a
                        href={`/pages/widok-diament/?diamond_id=${data.stock_no}`}
                        className="flex items-center w-full h-full justify-center underline"
                      >
                        View{" "}
                        <span className="hidden sm:block ml-1">Diamond</span>
                      </a>
                    </p>
                    <p
                      onMouseEnter={() => setHandleHover("6")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] ${
                        handleHover === "6" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      {shapeList[data.Shape]}{" "}
                    </p>
                    <p
                      onMouseEnter={() => setHandleHover("7")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] bg-[#f8f5ee] ${
                        handleHover === "7" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      {data.Wt}
                    </p>
                    <p
                      onMouseEnter={() => setHandleHover("8")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] ${
                        handleHover === "8" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      {data.Colour}{" "}
                    </p>
                    <p
                      onMouseEnter={() => setHandleHover("9")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] bg-[#f8f5ee] ${
                        handleHover === "9" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      {data.Clarity}{" "}
                    </p>
                    <p
                      onMouseEnter={() => setHandleHover("10")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] ${
                        handleHover === "10" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      {data.Cut}{" "}
                    </p>
                    <p
                      onMouseEnter={() => setHandleHover("11")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] bg-[#f8f5ee] ${
                        handleHover === "11" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      {data.Polish}{" "}
                    </p>
                    <p
                      onMouseEnter={() => setHandleHover("12")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] ${
                        handleHover === "12" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      {data.Symmetry}
                    </p>
                    {/* <p
                      onMouseEnter={() => setHandleHover("13")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`bg-[#f8f5ee] ${
                        handleHover === "13" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      none
                    </p> */}
                    <p
                      onMouseEnter={() => setHandleHover("14")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] text-[12px] sm:text-[1.6rem] bg-[#f8f5ee] my-auto ${
                        handleHover === "14" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      {data.Measurements.replace(/[-x]/g, " x ")} mm
                    </p>
                    <p
                      onMouseEnter={() => setHandleHover("15")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] ${
                        handleHover === "15" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      {data.DepthPer}
                    </p>
                    <p
                      onMouseEnter={() => setHandleHover("16")}
                      onMouseLeave={() => setHandleHover("")}
                      className={`h-[30px] bg-[#f8f5ee] ${
                        handleHover === "16" ? "!bg-[#f3f3f3]" : ""
                      }`}
                    >
                      {data.TablePer}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareDiamond;
