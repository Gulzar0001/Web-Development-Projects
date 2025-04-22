import React from 'react'
import partnerData from "../utils/objectData/partnerData";

function Partnerships() {
  return (
    <>
      <h1 className="ml-3 font-bold text-4xl mb-6">Partnerships</h1>
      <div className="flex flex-wrap justify-between gap-2 mb-8 px-4">
        {partnerData.map((item, index) => (
          <div
            key={index}
            className="w-[14%] h-[200px] bg-white rounded-xl border p-2 shadow-sm flex flex-col items-center justify-between"
          >
            <div className="w-[60%] h-[60%] flex justify-center items-center mb-2">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-center text-base font-medium text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Partnerships;
