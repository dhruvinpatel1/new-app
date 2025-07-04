import axios from "axios";
import React, { useEffect, useState } from "react";
import DiamondGallary from "../Components/DiamondGallary";
import StepBuilder from "../Components/StepBuilder";
import { GlobleVal } from "../Hooks/GlobleVal";
const { shapeList } = GlobleVal();

const ViewDiamond = () => {
  const [diamondData, setDiamondData] = useState(null);
  const queryParams = new URLSearchParams(window.location.search);
  const diamondId = queryParams.get("diamond_id");

  // Fetch Diamond Details
  const fetchDiamondDetail = async () => {
    if (!diamondId) return;

    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/data/getsinglediamonds?diamond_id=${diamondId}`
      );
      const newData = response.data.result;
      setDiamondData(newData); // Store the response in state
      // Retrieve existing IDs from localStorage
      const existingIds =
        JSON.parse(localStorage.getItem("Recently_view_diamond")) || [];

      // Append the new ID if it's not already in the array
      if (newData?.stock_no && !existingIds.includes(newData.stock_no)) {
        const updatedIds = [...existingIds, newData.stock_no];

        // Store back in localStorage
        localStorage.setItem(
          "Recently_view_diamond",
          JSON.stringify(updatedIds)
        );
      }
    } catch (error) {
      console.error("Error fetching diamond details:", error);
    }
  };

  useEffect(() => {
    fetchDiamondDetail();
  }, [diamondId]);

  const AddDiamond = (diamondId) => {
    sessionStorage.setItem("diamondId", diamondId);
    const ringId = sessionStorage.getItem("ringId");
    if (ringId) {
      window.location.href = "/pages/complete-ring";
    } else {
      window.location.href = "/collections/engagement-ring";
    }
  };

  return (
    <>
      {" "}
      <StepBuilder
        page={"Diamond"}
        pageProp={"diamondPage"}
        pageType={"diamondDetailpage"}
      />
      <div className="container mx-auto max-w-[1290px] my-12">
        <div className="mb-[50px]">
          {diamondData ? (
            <div className="grid_step grid-cols-1 lg:grid-cols-2 gap-[25px]">
              <div className="mx-7">
                <DiamondGallary diamondData={diamondData} />
              </div>
              <div className="my-5 mx-7 lg:mx-0  text-black">
                <h1 className="pb-2 !text-[25px]">
                  {diamondData.carat}-Carat {diamondData.shape} Shape Natural Diamond
                </h1>
                <p className="text-[20px] my-[10px]">
                  Price: ${diamondData.price}
                </p>
                <p className="text-[18px] mt-[10px] mb-[20px]">
                  {diamondData.cut} Cut | {diamondData.color} Color | {diamondData.clarity} Clarity | <a
                    target="_blank"
                    className="underline"
                    href={
                      diamondData.lab
                        ? diamondData.lab === "GIA"
                          ? `https://www.gia.edu/report-check?reportno=${diamondData.certificateNumber}`
                          : diamondData.lab === "IGI"
                            ? `https://www.igi.org/verify-your-report/?r=${diamondData.certificateNumber}`
                            : diamondData.lab === "AGS"
                              ? `https://agslab.com/ym-vdgr/diamonds/${diamondData.certificateNumber}`
                              : diamondData.lab === "HRD"
                                ? `https://my.hrdantwerp.com/?record_number=${diamondData.certificateNumber}`
                                : ""
                        : ""
                    }
                  > {diamondData.lab} Report
                  </a>
                </p>
                <p>
                  This {diamondData.carat} carat, {diamondData.color} color diamond, rated as having {diamondData.clarity} clarity with a {diamondData.shape} shape supplied with a {diamondData.lab} grading report.
                </p>
                <div className="flex gap-2 my-5">
                  <div
                    className="w-full border-[1px] border-[#545454] text-center py-5 hover:bg-[#545454] text-[#545454] hover:text-white font-bold cursor-pointer"
                    onClick={() => AddDiamond(diamondData.stockNumber)}
                  >
                    Choose This Diamond
                  </div>
                </div>
                <div className="my-5 ">
                  <p className="uppercase  md:text-3xl my-3">
                    Need Help?
                  </p>
                  <div className="flex ">
                    <a
                      href="tel:+91 123456789"
                      className="w-[50%] lg:w-[40%] text-[#a51b26]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-8 h-8 inline-block mr-4"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      +91 123456789
                    </a>
                    <a
                      href="mailto:piotr@goldport.pl"
                      className="w-[40%] text-[#a51b26]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-8 h-8 inline-block mr-4"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      E-mail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-5 grid_step grid-cols-1 lg:!grid-cols-2 mb-[10px] gap-3.5">
              <div className=" w-full">
                <div className="bg-gray-300 animate-pulse h-[200px] md:h-[500px]"></div>
                <div className="bg-gray-300 animate-pulse h-28 mt-5"></div>
                <div className="bg-gray-300 animate-pulse h-28 mt-5 hidden md:!block"></div>
              </div>

              <div className="">
                <div className="bg-gray-300 animate-pulse h-[80px]"></div>
                <div className="bg-gray-300 animate-pulse h-[200px] w-1/2 mt-[10px]"></div>
                <div className="bg-gray-300 animate-pulse h-[40px] mt-[10px]"></div>
                <div className="bg-gray-300 animate-pulse h-[400px] mt-[10px]"></div>
              </div>
            </div>
          )}
        </div>
        <div className="border-t border-[#545454]">
          {diamondData ? (<div className="my-[20px]">
            <span className="text-[25px] text-[#545454] font-bold">Diamond Details</span>
            <div className="!grid grid-cols-2 gap-[10px] mt-[20px]">
              <div className="text-[#545454]">
                <div className="!grid grid-cols-2 py-[10px] px-[20px] bg-[#EEEEEE]">
                  <div className="font-bold">
                    Report Number
                  </div>
                  <div>
                    {diamondData.stockNumber}
                  </div>
                </div>
                <div className="!grid grid-cols-2 py-[10px] px-[20px]">
                  <div className="font-bold">
                    Grading Report
                  </div>
                  <div>
                    <a
                      target="_blank"
                      className="underline"
                      href={
                        diamondData.lab
                          ? diamondData.lab === "GIA"
                            ? `https://www.gia.edu/report-check?reportno=${diamondData.certificateNumber}`
                            : diamondData.lab === "IGI"
                              ? `https://www.igi.org/verify-your-report/?r=${diamondData.certificateNumber}`
                              : diamondData.lab === "AGS"
                                ? `https://agslab.com/ym-vdgr/diamonds/${diamondData.certificateNumber}`
                                : diamondData.lab === "HRD"
                                  ? `https://my.hrdantwerp.com/?record_number=${diamondData.certificateNumber}`
                                  : ""
                          : ""
                      }
                    > {diamondData.lab}
                    </a>
                  </div>
                </div>
                <div className="!grid grid-cols-2 py-[10px] px-[20px] bg-[#EEEEEE]">
                  <div className="font-bold">
                    Shape
                  </div>
                  <div>
                    {diamondData.shape}
                  </div>
                </div>
                <div className="!grid grid-cols-2 py-[10px] px-[20px]">
                  <div className="font-bold">
                    Carat Weight (ct.)
                  </div>
                  <div>
                    {diamondData.carat}
                  </div>
                </div>
                <div className="!grid grid-cols-2 py-[10px] px-[20px] bg-[#EEEEEE]">
                  <div className="font-bold">
                    Color
                  </div>
                  <div>
                    {diamondData.color}
                  </div>
                </div>
                <div className="!grid grid-cols-2 py-[10px] px-[20px]">
                  <div className="font-bold">
                    Clarity
                  </div>
                  <div>
                    {diamondData.clarity}
                  </div>
                </div>
                <div className="!grid grid-cols-2 py-[10px] px-[20px] bg-[#EEEEEE]">
                  <div className="font-bold">
                    Cut
                  </div>
                  <div>
                    {diamondData.cut}
                  </div>
                </div>
                <div className="!grid grid-cols-2 py-[10px] px-[20px]">
                  <div className="font-bold">
                    Polish
                  </div>
                  <div>
                    {diamondData.polish}
                  </div>
                </div>
              </div>
              <div className="text-[#545454]">
                <div className="text-[#545454]">
                  <div className="!grid grid-cols-2 py-[10px] px-[20px] bg-[#EEEEEE]">
                    <div className="font-bold">
                      Symmetry
                    </div>
                    <div>
                      {diamondData.symmetry}
                    </div>
                  </div>
                  <div className="!grid grid-cols-2 py-[10px] px-[20px]">
                    <div className="font-bold">
                      Fluorescence
                    </div>
                    <div>
                      {diamondData.fluorescence}
                    </div>
                  </div>
                  <div className="!grid grid-cols-2 py-[10px] px-[20px] bg-[#EEEEEE]">
                    <div className="font-bold">
                      Intensity
                    </div>
                    <div>
                      NA
                    </div>
                  </div>
                  <div className="!grid grid-cols-2 py-[10px] px-[20px]">
                    <div className="font-bold">
                      Table %
                    </div>
                    <div>
                      {diamondData.tablePerc}
                    </div>
                  </div>
                  <div className="!grid grid-cols-2 py-[10px] px-[20px] bg-[#EEEEEE]">
                    <div className="font-bold">
                      Depth %
                    </div>
                    <div>
                      {diamondData.deptPerc}
                    </div>
                  </div>
                  <div className="!grid grid-cols-2 py-[10px] px-[20px]">
                    <div className="font-bold">
                      L/W Ratio
                    </div>
                    <div>
                      {diamondData.l_w_ratio}
                    </div>
                  </div>
                  <div className="!grid grid-cols-2 py-[10px] px-[20px] bg-[#EEEEEE]">
                    <div className="font-bold">
                      Measurement (mm)
                    </div>
                    <div>
                      {diamondData.width} * {diamondData.length} * {diamondData.depth}
                    </div>
                  </div>
                  <div className="!grid grid-cols-2 py-[10px] px-[20px]">
                    <div className="font-bold">
                      Girdle
                    </div>
                    <div>
                      {diamondData.girdle}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>) : <></>}

        </div>
      </div>
    </>
  );
};

export default ViewDiamond;
