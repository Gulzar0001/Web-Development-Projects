import React from 'react'
import offerData from "../utils/objectData/offerData"

function OfferCards() {
  return (
  <>
    <h1 className=" ml-3 font-bold text-4xl mb-4 ">Most Popular</h1>
    <div className="flex flex-wrap gap-2  mb-8 ml-3  ">
     

      {offerData.map((item, index) => (
        
         <div key={index} className="w-1/7 mx-2 bg-gray-100 rounded-xl border p-3 relative">
         
         <div className="relative"> 
          <img
            src={item.img}
            alt={item.title}
            className="w-[90%]  object-contain rounded-md    "
          
          />
    <button className="absolute bottom-2 right-2 bg-green-500 text-white text-sm px-4 py-1 rounded-full hover:bg-green-600 shadow-md z-10 flex items-center gap-1">
      <i className="fa-solid fa-bag-shopping"></i> Add
    </button>
    </div>
            
   <div>
          <h3 className="text-xl text-gray-900 justify-center font-semibold ">{item.title}</h3>
          <h6 className="text-sm mb-2">{item.description}</h6>
</div>

   <div className="flex gap-10 text-2xl  font-semibold">

   <h6 className=" text-green-600">{item.price}</h6>
   <h6 className=" text-gray-600 line-through">{item.discount}</h6>

    </div>

        </div>
        
      ))}
      
      </div>
      </>
  );
};




export default OfferCards
