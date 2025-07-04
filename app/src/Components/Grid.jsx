import React, { useState } from 'react'
import { InformationCircleIcon, ScaleIcon, XIcon } from "@heroicons/react/outline";

export default function Grid({ diamonds }) {
    const [stockNumber, setInfoClick] = useState("")
    return (
        <div className="!grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-[20px] mt-[60px]">
            {diamonds.length > 0 && diamonds.map((data, i) =>
                <a href={`/pages/view-diamond/?diamond_id=${data.stockNumber}`}>
                    <div className="border border-[#EEEEEE] p-[10px] hover:shadow-xl relative">
                        {stockNumber === data.stockNumber ?
                            <>
                                <div className='bg-white overflow-scroll'>
                                    <div className='absolute top-[10px] right-[10px] flex flex-col gap-2'>
                                        <XIcon className='w-[20px] h-[20px] inline-block text-white p-[4px] bg-[#545454] rounded-full' onClick={() => setInfoClick('')} />
                                    </div>
                                    <div className='!grid grid-rows-12'>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Report Number</span>
                                            <span>{data.certificateNumber}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Symmetry</span>
                                            <span>{data.symmetry}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Grading Report</span>
                                            <span>{data.lab}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Shape</span>
                                            <span>{data.shape}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Carat Weight (ct.)</span>
                                            <span>{data.carat}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Color</span>
                                            <span>{data.color}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Clarity</span>
                                            <span>{data.clarity}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Polish</span>
                                            <span>{data.polish}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Flourescence</span>
                                            <span>{data.fluorescence}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Measurements (mm.)</span>
                                            <span>{data.width} * {data.length} * {data.depth}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Table %</span>
                                            <span>{data.tablePerc}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Depth %</span>
                                            <span>{data.deptPerc}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>L/W Ratio</span>
                                            <span>{data.l_w_ratio}</span>
                                        </p>
                                        <p className='!grid grid-cols-2 text-[#545454] sm:text-[14px] text-[12px]'>
                                            <span className='font-bold'>Girdle</span>
                                            <span>{data.girdle}</span>
                                        </p>
                                    </div>

                                </div>
                            </>
                            :
                            <>
                                <div className='absolute top-[15px] right-[15px] flex flex-col gap-2'>
                                    <InformationCircleIcon className='w-[30px] h-[30px] inline-block text-[#545454] p-[4px] bg-white rounded-full' onClick={() => setInfoClick(data.stockNumber)} />
                                    <ScaleIcon className='w-[30px] h-[30px] inline-block text-[#545454] p-[4px] bg-white rounded-full' />
                                </div>
                                <div>
                                    <img src={data.diamondImage} className='h-52 sm:h-60 2xl:h-[300px]' />
                                </div>
                                <div className="mt-[10px] text-center">
                                    <p className="text-[16px] mb-[10px]">{`${data.carat}-carat ${data.shape} Shape Natural Diamond`}</p>
                                    <p className="mb-[10px] text-[14px]  ">{data.color} {data.clarity} {data.cut} {data.polish} {data.symmetry}</p>
                                    <p className="text-[#545454] text-[20px] font-bold">${data.price}</p>
                                </div></>
                        }

                    </div>
                </a>)}
        </div>
    )
}
