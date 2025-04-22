import React, { useState } from "react";
import {
  cleaningSubMenuData,
  foodSubMenuData,
  nestedMenuData,
  personalCareSubMenuData,
  babyCareSubMenuData,
  healthSubMenuData,
  homeKitchenSubMenuData,
  
} from "../utils/objectData/navdata";

function NestedMenu() {
  const [subMenu, setSubMenu] = useState();

  // console.log(nestedMenuData)
  return (
    <div className=" absolute mt-1 w-40 bg-slate-100 border border-slate-200 rounded-md pt-2">
      {nestedMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onMouseEnter={() => setSubMenu(index)}
            // onClick={() => setSubMenu(index)}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}

      {subMenu == 0 ? <Foods /> : subMenu == 1 ? <Cleaning /> :  subMenu == 2 ? <Personal/>  :subMenu == 3 ? <Health/> :subMenu == 4 ? <Home/> :subMenu == 5 ? <BabyCare/> : ""}
    </div>
  );
}

const Foods = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-2 pl-2 text-xs ease-in-out delay-200 ">
      {foodSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onMouseEnter={() => console.log("enter")}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>
            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};
const Cleaning = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-300 ">
      {cleaningSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};

const Personal = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-300 ">
      {personalCareSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};

const Health = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-300 ">
      {healthSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};

const Home = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-300 ">
      {homeKitchenSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};

const BabyCare = () => {
  return (
    <div className="absolute top-0 left-full w-40 bg-slate-100 border border-slate-200 rounded-md  pt-5 pl-2 text-xs ease-in-out delay-300 ">
      {babyCareSubMenuData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => console.log("kkk")}
            className="my-2 w-full flex justify-between items-center text-sm text-slate-900  "
          >
            <span className="text-xs">{`${item.mainTitle} `}</span>

            <i class="fa-solid fa-angle-right text-sm"></i>
          </button>
        );
      })}
    </div>
  );
};

export default NestedMenu;
