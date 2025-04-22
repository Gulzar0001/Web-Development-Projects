import React from "react";
import cardData from "../utils/objectData/cardData"

const BrowseCategory = () => {
  return (
<>
    <h1 className="  font-bold text-4xl mb-4 ml-8  ">Browse by Categories</h1>
    <div className="flex flex-wrap mb-8 ml-5 ">
     

      {cardData.map((item, index) => (

        <div key={index} className="w-[15%] h-30 bg-gray-100 rounded-xl border p-3 flex flex-col items-center mx-3 my-5 ">
          
          <img
            src={item.img}
            alt={item.title}
            className="w-[50%] h-18 object-contain rounded-md mb-3   "
          />
            

          <h3 className="text-sm text-gray-900 font-medium justify-center">{item.title}</h3>


        </div>
        
      ))}
      
      </div>
      </>
  );
};

export default BrowseCategory;