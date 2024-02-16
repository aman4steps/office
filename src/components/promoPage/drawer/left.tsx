import "../../../app/globals.css";

import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox'; //check box 
// import './styles.css'; // Import your Tailwind CSS styles

const Left = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="flex ">
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="">
          <button
            className=" focus:outline-none border py-1 px-8 bg-white rounded-lg my-5"
            onClick={toggleSidebar}
          >
            Filter
          </button>
        </div>
        {/* Your main content goes here */}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed overflow-scroll inset-y-0 right-0 w-64  bg-slate-100 transition-transform transform ${
          sidebarVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar content goes here */}
        <button
          className="text-white mt-4 mx-2 focus:outline-none"
          onClick={toggleSidebar}
        >
          Close Sidebar
        </button>
        





        <div className=" block bg-white rounded-md ">
        <div className="p-5">
            <div className="flex justify-between pb-5">
                <p className="text-[16px] font-semibold">Filter Your Tour</p>
                <p className="text-[12px] underline text-blue-800 cursor-pointer">Clear All</p>
            </div>
            <div>
                <div className="badge badge-lg text-[14px]">987,654
                    <svg className="ml-2" width="10" height="9" viewBox="0 0 10 9" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.27588 8.00024L4.92199 4.49998L8.56809 8.00024" stroke="#212220"
                            stroke-width="1.15385" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M1.27588 1L4.92199 4.50026L8.56809 1" stroke="#212220" stroke-width="1.15385"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>

            </div>

        </div>
        <div>
            <div className="border-t p-5">
                <div>
                    <p className="text-[16px] font-semibold my-2">Tour Duration</p>
                </div>
                <input type="range" min="0" max="100" value="40" className="range range-xs mt-4" />
                <div>
                    <div className="flex justify-between mb-4">
                        <p className="text-[14px]">Min <span>9 days</span></p>
                        <p className="text-[14px]">Max <span>15 days</span></p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3 justify-between ">
                        <p className="border grow text-center px-6 py-3 rounded-md text-[12px]">9-11 days</p>
                        <p className="border grow text-center px-6 py-3 rounded-md text-[12px]">9-11 days</p>
                    </div>
                    <div className="flex gap-3 justify-between ">
                        <p className="border grow text-center px-6 py-3 rounded-md text-[12px]">9-11 days</p>
                        <p className="border grow text-center px-6 py-3 rounded-md text-[12px]">9-11 days</p>
                    </div>
                </div>
            </div>
            <div className="border-b mt-2"></div>
            <div className="px-5 py-2">
                <p className="text-[16px] font-semibold my-2">Tour Duration</p>
            </div>
            <div>
                <div className="form-control px-5 pb-2">
                    <label className="cursor-pointer flex gap-4">
                        <input type="checkbox" checked="checked" className="checkbox checkbox-sm" />
                        <span className="label-text text-[14px]">Banglore</span>
                    </label>
                </div>
                <div className="form-control px-5 pb-2">
                    <label className="cursor-pointer flex gap-4">
                        <input type="checkbox" checked="checked" className="checkbox checkbox-sm" />
                        <span className="label-text text-[14px]">Kolkata</span>
                    </label>
                </div>
                <div className="form-control px-5 pb-2">
                    <label className="cursor-pointer flex gap-4">
                        <input type="checkbox" checked="checked" className="checkbox checkbox-sm" />
                        <span className="label-text text-[14px]">Banglore</span>
                    </label>
                </div>
                <div className="form-control px-5">
                    <label className="cursor-pointer flex gap-4">
                        <input type="checkbox" checked="checked" className="checkbox checkbox-sm" />
                        <span className="label-text text-[14px]">Mumbai</span>
                    </label>
                </div>
            </div>
            <div className="border-b mt-5"></div>
            <div className="px-5 py-2">
                <p className="text-[16px] font-semibold my-2">Package Type</p>
                <div>
                    <div className="flex gap-3 text-[14px] py-2">
                        <input type="radio" name="radio-1" className="radio radio-sm" checked />
                        <p>Women's days</p>
                    </div>
                    <div className="flex gap-3 text-[14px] py-2">
                        <input type="radio" name="radio-1" className="radio radio-sm" checked />
                        <p>Faimly</p>
                    </div>
                    <div className="flex gap-3 text-[14px] py-2">
                        <input type="radio" name="radio-1" className="radio radio-sm" checked />
                        <p>Valentine days</p>
                    </div>
                    <div className="flex gap-3 text-[14px] py-2">
                        <input type="radio" name="radio-1" className="radio radio-sm" checked />
                        <p>Senior special</p>
                    </div>
                    <div className="flex gap-3 text-[14px] py-2">
                        <input type="radio" name="radio-1" className="radio radio-sm" checked />
                        <p>Customized days</p>
                    </div>

                </div>
            </div>
        </div>

    </div>













      </div>
    </div>
  );
};

export default Left;

