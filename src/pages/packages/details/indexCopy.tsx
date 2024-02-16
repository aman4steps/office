


import '../../../../src/app/globals.css'
// import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
import ViewPlanAlertDialog from '@/components/Itinerary/modals/viewPlanAlert';
import { Link as ScrollLink } from 'react-scroll';





export default function details() {

    // tour details
    const[activeTab,setActiveTab]=useState('tab1')

    const handleTabClick = (tour_details:string) => {
        setActiveTab(tour_details);
        // console.log(tour_details)
      };
      
      // upgrades available
      
      const[UpgradesAvalilable,setUpgradesAvalilable]=useState('tab1')
  
      const UpgradesAvalilableTabClick=(UpgradesAvalilable:string)=> {
        setUpgradesAvalilable(UpgradesAvalilable);
        console.log(UpgradesAvalilable)
        };

    
    // Itinerary
    const [isItinerary,setIsItinerary]=useState(true)
    // const openCloseItinerary=()=>{
    //     setIsItinerary(!isItinerary)
    //     console.log(isItinerary)
    // }
    






return <div className=''>
    
    {/*Bo0king Summary View Plan  */}
    
    
      {/* <ViewPlanAlertDialog/> */}
      
                

    {/*  */}



    
    
        <div className='xl:hidden items-center bg-green fixed bottom-0 z-[60] px-5 bg-slate-100 rounded-lg md:bg-slate-100 w-full pb-2 md:py-3'>
            <div className='block md:justify-evenly md:flex items-center'>
            <div className="mt-5 relative ">
                            <div className='z-40 absolute m-auto top-[-5px] flex items-center justify-center'>

                            <p className="hidden md:block  rounded-full bg-yellow-400 w-[120px] px-[12px] text-[10px] font-bold">
                                ₹
                                EMI
                                AVAIABLE
                            </p>
                            </div>
                            <div className="z-30  flex justify-between align-middle bg-orange-200 py-1 sm:py-6 px-2 rounded-md  ">
                                <div>
                                    <p className="text-[12px] md:text-[14px] font-bold mb-2">From ₹2,0399/month</p>
                                    <p className="text-[10px] md:text-[12px]">No Cost EMI also a available</p>
                                </div>
                                <div><ViewPlanAlertDialog/>
                                    {/* <p className="text-[14px] font-bold underline text-blue-900"> > </p> */}
                                </div>
                            </div>
                        </div>
                {/*  */}
                <div className="md:flex  md:justify-end">
                <div className="md:flex justify-between md:gap-3 items-center">
                    <div className=" grow text-right ">
                        <p className="text-[12px] sm:text-[14px] leading-5 text-green-600 font-semibold">SUPER DEAL PRICE</p>
                        <p className="text-[10px] sm:text-[12px] leading-5">Starts From <span className="text-[22px] font-medium">₹
                                3,50,000</span>
                        </p>
                        <p className="hidden sm:block text-[9px] md:text-[10px] leading-5">per person on twin sharing</p>
                        <p className="text-[12px] sm:text-[14px] leading-5 font-medium underline text-blue-900">from ₹ 19,423/months</p>
                    </div>
                    <div className="grow">
                        <p className=" sm:leading-7 mb-2 bg-orange-400 px-5 py-1 sm:py-2 rounded-md text-white text-center"><a>Date & Price</a></p>
                        <p className=" sm:leading-7 border px-5 sm:py-2 py-1 rounded-md text-center bg-white"><a>View Price</a></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    





    <div className="container-wrapper">
        <div className="text-sm breadcrumbs my-3">
            <ul>
                <li ><a>Home</a></li>
                <li><a>Documents</a></li>
                <li>Add Document</li>
            </ul>
        </div>
    </div>

    {/* */}
    <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[2fr,1fr]  gap-4 ">
        <div className="">
            <img className="rounded-md h-[350px] object-cover shadow-md"
                src="https://img.veenaworld.com/group-tours/world/europe/eujw/eujw-bnn-1.jpg" alt="" />
        </div>

        <div className="justify-end flex-col gap-2 md:justify-center hidden xl:flex ">
            <div className="">
                <img className="rounded-md h-[170px] object-cover shadow-md"
                    src="https://img.veenaworld.com/group-tours/world/europe/eujw/eujw-bnn-1.jpg" alt="" />
            </div>
            <div className="">
                <img className="rounded-md h-[170px] max-md-full object-cover shadow-md"
                    src="https://img.veenaworld.com/group-tours/world/europe/eujw/eujw-bnn-1.jpg" alt="" />
            </div>
        </div>
        <div>
            <div>
                <div className="flex justify-between my-2">
                    <h1 className="  text-[24px] font-semibold">Europe jewels with Versailles</h1>
                    <div className="flex items-center justify-center border rounded-full w-6 h-6">
                        <img className=" p-1 " src="https://www.svgrepo.com/show/13666/heart.svg" alt="" />
                    </div>
                </div>
                <div className='stick top-1'>
                    <div className="flex flex-wrap gap-5 ">
                        <p className="text-sm font-semibold flex gap-1 items-center"> <span>
                                <img className="w-4"
                                    src="https://cdn.iconscout.com/icon/free/png-512/free-calendar-1439790-1214120.png?f=webp&w=256"
                                    alt="" />
                            </span> 15 Days</p>
                        <p className="text-sm font-semibold flex gap-1 items-center"> <span>
                                <img className="w-4" src="https://www.svgrepo.com/show/229132/internet.svg" alt="" />
                            </span> 15 Days</p>
                        <p className="text-sm font-semibold flex gap-1 items-center"> <span>
                                <img className="w-4" src="https://www.svgrepo.com/show/38705/location-pin.svg" alt="" />
                            </span> 23 Cities</p>

                    </div>
                    <div className="flex justify-between mt-2">
                        <div className="flex flex-wrap gap-1 items-center">
                            <p className="text-[12px]"> <span>London</span> 15 Days ---</p>
                            <p className="text-[12px]"> <span>Paris</span> 15 Days ---</p>
                            <p className="text-[12px]"> <span>Brussels</span> 15 Days</p>
                            <p className="text-[12px] underline"> +20 more cities</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div>
                                <img className="w-5" src="https://www.svgrepo.com/show/475692/whatsapp-color.svg"
                                    alt="" />
                            </div>
                            <div>
                                <img className="w-5" src="https://www.svgrepo.com/show/522439/printer.svg" alt="" />
                            </div>
                            <div>
                                <img className="w-5" src="https://www.svgrepo.com/show/522399/envelope-closed.svg"
                                    alt="" />
                            </div>
                            <div>
                                <img className="w-5" src="https://www.svgrepo.com/show/527876/share.svg" alt="" />
                            </div>
                            <div>
                            <ScrollLink
                                to="ItinerarySection" // The ID of the section you want to scroll to
                                spy={true}
                                smooth={true}
                                offset={0} // Adjust this offset based on your layout (navbar height, etc.)
                                duration={500}
                            >
                                <p  className="text-sm underline text-blue-900 font-medium cursor-pointer">View Iternery Page</p>
                            </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-end">
            <div className="hidden xl:flex gap-1">
                <div className="text-right flex flex-col items-end justify-center ">
                    <p className="text-[14px] leading-5 text-green-600 font-semibold">SUPER DEAL PRICE</p>
                    <p className="text-[12px] leading-5">Starts From <span className="text-[22px] font-medium">₹
                            3,50,000</span>
                    </p>
                    <p className="text-[10px] leading-5">per person on twin sharing</p>
                    <p className="text-[14px] leading-5 font-medium underline text-blue-900">from ₹ 19,423/months</p>
                </div>
                <div className="flex flex-col align-middle my-auto pl-2 gap-2">
                    <p className="bg-orange-400 px-5 py-2 rounded-md text-white text-center"><a>Date & Price</a></p>
                    <p className="border px-5 py-2 rounded-md text-center"><a>View Price</a></p>
                </div>
            </div>
        </div>

        {/* 3images */}


    </div>

    {/* Select departure city */}
    <div className="bg-gray-100 mt-[20px]">
        <div className="container-wrapper">

            <div className="mb-[20px] pt-[40px]">
                <h1 className="text-[18px] font-medium">Select departure city, dates & add guest to book your tour</h1>
                <p className="italic text-slate-600">As seats fill, prices increase! So book today!</p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
                <div className="flex flex-col gap-4 border rounded-md p-3 relative bg-white">
                    <div className="">
                        <div className="flex gap-3">
                            <p className="text-[14px] font-bold p-4">1. SELECT DEPARTURE CITY & DATE</p>
                        </div>
                        <hr />
                        <div className="overflow-y-scroll h-[400px]">
                            <div className="flex gap-3 py-4">
                                <div className="font-semibold text-[14px] border rounded-full py-2 px-3.5">
                                    <span></span>All
                                    departure</div>
                                <div className="font-semibold text-[14px] border rounded-full py-2 px-3.5"><span></span>
                                    Mumbai
                                </div>
                                <div className="font-semibold text-[14px] border rounded-full py-2 px-3.5"><span></span>
                                    Joining/Leaving</div>
                            </div>
                            <div className="flex gap-4 py-4">
                                <p className="text-[14px]">All departure dates (10)</p>
                                <p className="text-[13px]">All inclusive tours, lock in at this great price today.</p>
                            </div>
                            <div>
                                <div className="flex flex-wrap gap-4  py-4">
                                    <div className="w-[40px] border rounded-md flex flex-col text-center bg-slate-800">
                                        <p className="text-white"> Feb </p>
                                        <hr />
                                        <p className="m-auto text-white">2024</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>

                                    <div className="w-[40px] border rounded-md flex flex-col text-center bg-slate-800">
                                        <p className="text-white"> Feb </p>
                                        <hr />
                                        <p className="m-auto text-white">2024</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>

                                    <div className="w-[40px] border rounded-md flex flex-col text-center bg-slate-800">
                                        <p className="text-white"> Feb </p>
                                        <hr />
                                        <p className="m-auto text-white">2024</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>

                                    <div className="w-[40px] border rounded-md flex flex-col text-center bg-slate-800">
                                        <p className="text-white"> Feb </p>
                                        <hr />
                                        <p className="m-auto text-white">2024</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>

                                    <div className="w-[40px] border rounded-md flex flex-col text-center bg-slate-800">
                                        <p className="text-white"> Feb </p>
                                        <hr />
                                        <p className="m-auto text-white">2024</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>

                                    <div className="w-[40px] border rounded-md flex flex-col text-center bg-slate-800">
                                        <p className="text-white"> Feb </p>
                                        <hr />
                                        <p className="m-auto text-white">2024</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>

                                    <div className="w-[40px] border rounded-md flex flex-col text-center bg-slate-800">
                                        <p className="text-white"> Feb </p>
                                        <hr />
                                        <p className="m-auto text-white">2024</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>

                                    <div className="w-[40px] border rounded-md flex flex-col text-center bg-slate-800">
                                        <p className="text-white"> Feb </p>
                                        <hr />
                                        <p className="m-auto text-white">2024</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>

                                    <div className="w-[40px] border rounded-md flex flex-col text-center bg-slate-800">
                                        <p className="text-white"> Feb </p>
                                        <hr />
                                        <p className="m-auto text-white">2024</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>

                                    <div className="w-[40px] border rounded-md flex flex-col text-center bg-slate-800">
                                        <p className="text-white"> Feb </p>
                                        <hr />
                                        <p className="m-auto text-white">2024</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>
                                    <div className="w-[67px] border rounded-md flex flex-col text-center">
                                        <p className="bg-slate-100">Fri</p>
                                        <hr />
                                        <p>09</p>
                                        <p> ₹40,000</p>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className="mb-4" />
                    <div className="absolute bottom-0 bg-white my-1">
                        <p className="text-[12px]">View itinerary for the tours you have booked by logging into your
                            account.</p>
                    </div>

                </div>

                <div className="border p-3 rounded-md bg-white xs:mt-5 xl:mt-0 xs:hidden xl:block" >
                    <div>
                        <p className="14px font-bold">Booking Summary</p>
                        <hr />
                        <div className="flex mb-[10px] mt-5">
                            <p className="text-[12px] w-20">Dept. city</p>
                            <p className="text-[14px] font-semibold">Mumbai</p>
                        </div>
                        <div className="flex mb-[10px]">
                            <p className="text-[12px] w-20">Dept. date</p>
                            <p className="text-[14px] font-bold">10 Mar 2024 - 17 Mar 2024</p>
                        </div>
                        <div className="flex mb-[10px]">
                            <p className="text-[12px] w-20">Traveller</p>
                            <p className="text-[14px] font-semibold">0 Adults (s)</p>
                        </div>
                        <div className="flex mb-[10px]">
                            <p className="text-[12px] w-20">Rooms</p>
                            <p className="text-[14px] font-semibold">0 Rooms</p>
                        </div>
                        <hr className="border-dashed mt-10 mb-2" />
                        <div className="flex justify-between">
                            <div>
                                <p className="text-[14px]">Basic Price</p>
                                <p className="text-[12px]">View Pricing Table</p>
                            </div>
                            <div>
                                <p className="text-[18px] font-medium"> ₹ 40,000</p>
                                <p className="text-[10px]">per person on twin sharing</p>
                            </div>
                        </div>
                        <div className="mt-5 relative ">
                            <div className='z-40 absolute translate-x-full top-[-8px] flex items-center justify-center'>

                            <p className="  rounded-full bg-yellow-400 w-[120px] px-[12px] text-[10px] font-bold">
                                ₹
                                EMI
                                AVAIABLE
                            </p>
                            </div>
                            <div className="z-30  flex justify-between align-middle bg-orange-200 py-6 px-2 rounded-md  ">
                                <div>
                                    <p className="text-[14px] font-bold mb-2">From ₹2,0399/month</p>
                                    <p className="text-[12px]">No Cost EMI also a available</p>
                                </div>
                                <div><ViewPlanAlertDialog/>
                                    {/* <p className="text-[14px] font-bold underline text-blue-900"> > </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-2">
                            <div>
                                <p className="text-[12px]">1800 22 7972</p>
                            </div>
                            <div>
                                <p className="text-[12px]"><span className="text-[13px] underline">Locate</span> nearest
                                    Bizare
                                    Expenditure</p>
                            </div>
                        </div>
                        <hr className="border-dashed my-4" />
                        <div>
                            <span className="bg-yellow-500 text-white flex justify-center py-3 rounded-md">Add Guests
                                and
                                Rooms</span>
                        </div>

                    </div>


                </div>


               

                <div className="flex gap-5 py-4 mb-5">
                    <p className="text-[11px] font-semibold">Terms and Conditions apply</p>
                    <p className="text-[11px] font-semibold">5% GST is applicable on given tour price</p>
                    <p className="text-[11px] font-semibold">Mentioned tour prices are Per Person for Indian Nationals
                        only.
                    </p>
                </div>
            </div>
        </div>


    </div>



    {/* */}
    <div>
    <div id="ItinerarySection" className="bg-white py-3 shadow-md sticky top-0 z-40">
        <div className="container-wrapper gap-5 md:gap-12 xs:pb-5 md:pb-0  flex justity-start overflow-x-auto ">
            <div>
            <ScrollLink
            to="ItinerarySubSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className=" text-md cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">Itinerary</p>
          </ScrollLink>
            </div>
            <div>
            <ScrollLink
            to="TourDetailsSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className="text-center w-[120px] text-md cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">Tour Details</p>
          </ScrollLink>
            </div>
            <div><ScrollLink
            to="TourInformationSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className="text-center w-[120px] text-md cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">Tour Information</p>
          </ScrollLink>
            </div>
            <div>
            <ScrollLink
            to="NeedToKnowSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className="text-center w-[120px] text-md cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">Need to Know</p>
          </ScrollLink>
            </div>
            <div>
            <ScrollLink
            to="Policy&TermsSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className="text-center w-[120px] text-md cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">Policy & Terms</p>
          </ScrollLink>
            </div>
            <div>
            <ScrollLink
            to="UpgradesSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className="text-center w-[120px] text-md cursor-pointer hover:border-b-2 border-amber-600 py-2 hover:text-orange-800">Upgrades</p>
          </ScrollLink>
            </div>
        </div>
    </div>

    <div className="container-wrapper  grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
        <div>

            <div id='ItinerarySubSection'  className="flex justify-between my-5">
                <p className="text-[22px] font-semibold">Itinerary <span
                        className="text-[13px] italic text-slate-600 ">(Day Wise)</span></p>
                <p onClick={()=>setIsItinerary(!isItinerary)} className="cursor-pointer text-[14px] text-blue-800 font-medium underline">View all days</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id quibusdam! Veritatis qui,
                    nostrum praesentium labore corrupti consequatur sapiente provident. Omnis saepe laborum eveniet,
                    animi deleniti odit quisquam, sapiente voluptate expedita maiores voluptatum, illo rerum.</p>
            </div>
            <div className='p-5'>
                <img className='rounded-xl shadow-md'
                    src="https://uploads.exoticca.com/p/15367/45697/i/ism_horizontal_aspect_ratio_3_29.jpg" alt="" />
            </div>
            {/*
            <!-- itenery data show in multiple time  --> */}
            <div className="flex justify-between mt-8">
                <div className=" ">
                    <div className="flex">
                        <span className="">
                            <img className="w-8 mr-5 mt-3"
                                src="https://cdn.iconscout.com/icon/free/png-512/free-location-1438800-1214139.png?f=webp&w=256"
                                alt="" />
                            {/*
                            <!-- <hr className=" border-indigo-500  rotate-90"> --> */}
                        </span>
                        <div>
                            <p className="text-[12px]">Day1 / 10 Mar 24</p>
                            <p className="text-[16px]">Delhi - Chandigarh (1 Night)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img onClick={()=> setIsItinerary(!isItinerary)} className="w-5 cursor-pointer"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/add-icon.png" alt="" />
                </div>
            </div>


           

            
            <div className={`pl-14 border-l ml-4 border-dashed pb-10 pt-5 ${isItinerary?"block":"hidden"}`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam aspernatur nesciunt deleniti
                    repellendus cum architecto, porro accusamus quibusdam, omnis fuga fugiat possimus eveniet.</p>
                <p>Dress Color for today : Yellow</p>
                {/* 2 Time Multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
                {/* 2nd multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5 ' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
            </div>

            {/*
            <!-- ----------------------------------------------------------------------------------------------------------- -->
            {/*
            <!-- itenery data show in multiple time  --> */}
            <div className="flex justify-between mt-8">
                <div className=" ">
                    <div className="flex">
                        <span className="">
                            <img className="w-8 mr-5 mt-3"
                                src="https://cdn.iconscout.com/icon/free/png-512/free-location-1438800-1214139.png?f=webp&w=256"
                                alt="" />
                            {/*
                            <!-- <hr className=" border-indigo-500  rotate-90"> --> */}
                        </span>
                        <div>
                            <p className="text-[12px]">Day1 / 10 Mar 24</p>
                            <p className="text-[16px]">Delhi - Chandigarh (1 Night)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img onClick={()=> setIsItinerary(!isItinerary)} className="w-5 cursor-pointer"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/add-icon.png" alt="" />
                </div>
            </div>


           

            
            <div className={`pl-14 border-l ml-4 border-dashed pb-10 pt-5 ${isItinerary?"block":"hidden"}`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam aspernatur nesciunt deleniti
                    repellendus cum architecto, porro accusamus quibusdam, omnis fuga fugiat possimus eveniet.</p>
                <p>Dress Color for today : Yellow</p>
                {/* 2 Time Multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
                {/* 2nd multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5 ' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
            </div>

            {/*
            <!-- ----------------------------------------------------------------------------------------------------------- -->
            {/*
            <!-- itenery data show in multiple time  --> */}
            <div className="flex justify-between mt-8">
                <div className=" ">
                    <div className="flex">
                        <span className="">
                            <img className="w-8 mr-5 mt-3"
                                src="https://cdn.iconscout.com/icon/free/png-512/free-location-1438800-1214139.png?f=webp&w=256"
                                alt="" />
                            {/*
                            <!-- <hr className=" border-indigo-500  rotate-90"> --> */}
                        </span>
                        <div>
                            <p className="text-[12px]">Day1 / 10 Mar 24</p>
                            <p className="text-[16px]">Delhi - Chandigarh (1 Night)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img onClick={()=> setIsItinerary(!isItinerary)} className="w-5 cursor-pointer"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/add-icon.png" alt="" />
                </div>
            </div>


           

            
            <div className={`pl-14 border-l ml-4 border-dashed pb-10 pt-5 ${isItinerary?"block":"hidden"}`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam aspernatur nesciunt deleniti
                    repellendus cum architecto, porro accusamus quibusdam, omnis fuga fugiat possimus eveniet.</p>
                <p>Dress Color for today : Yellow</p>
                {/* 2 Time Multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
                {/* 2nd multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5 ' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
            </div>

            {/*
            <!-- ----------------------------------------------------------------------------------------------------------- -->
            {/*
            <!-- itenery data show in multiple time  --> */}
            <div className="flex justify-between mt-8">
                <div className=" ">
                    <div className="flex">
                        <span className="">
                            <img className="w-8 mr-5 mt-3"
                                src="https://cdn.iconscout.com/icon/free/png-512/free-location-1438800-1214139.png?f=webp&w=256"
                                alt="" />
                            {/*
                            <!-- <hr className=" border-indigo-500  rotate-90"> --> */}
                        </span>
                        <div>
                            <p className="text-[12px]">Day1 / 10 Mar 24</p>
                            <p className="text-[16px]">Delhi - Chandigarh (1 Night)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img onClick={()=> setIsItinerary(!isItinerary)} className="w-5 cursor-pointer"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/add-icon.png" alt="" />
                </div>
            </div>


           

            
            <div className={`pl-14 border-l ml-4 border-dashed pb-10 pt-5 ${isItinerary?"block":"hidden"}`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam aspernatur nesciunt deleniti
                    repellendus cum architecto, porro accusamus quibusdam, omnis fuga fugiat possimus eveniet.</p>
                <p>Dress Color for today : Yellow</p>
                {/* 2 Time Multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
                {/* 2nd multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5 ' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
            </div>

            {/*
            <!-- ----------------------------------------------------------------------------------------------------------- -->
            {/*
            <!-- itenery data show in multiple time  --> */}
            <div className="flex justify-between mt-8">
                <div className=" ">
                    <div className="flex">
                        <span className="">
                            <img className="w-8 mr-5 mt-3"
                                src="https://cdn.iconscout.com/icon/free/png-512/free-location-1438800-1214139.png?f=webp&w=256"
                                alt="" />
                            {/*
                            <!-- <hr className=" border-indigo-500  rotate-90"> --> */}
                        </span>
                        <div>
                            <p className="text-[12px]">Day1 / 10 Mar 24</p>
                            <p className="text-[16px]">Delhi - Chandigarh (1 Night)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img onClick={()=> setIsItinerary(!isItinerary)} className="w-5 cursor-pointer"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/add-icon.png" alt="" />
                </div>
            </div>


           

            
            <div className={`pl-14 border-l ml-4 border-dashed pb-10 pt-5 ${isItinerary?"block":"hidden"}`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam aspernatur nesciunt deleniti
                    repellendus cum architecto, porro accusamus quibusdam, omnis fuga fugiat possimus eveniet.</p>
                <p>Dress Color for today : Yellow</p>
                {/* 2 Time Multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
                {/* 2nd multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5 ' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
            </div>

            {/*
            <!-- ----------------------------------------------------------------------------------------------------------- -->
            {/*
            <!-- itenery data show in multiple time  --> */}
            <div className="flex justify-between mt-8">
                <div className=" ">
                    <div className="flex">
                        <span className="">
                            <img className="w-8 mr-5 mt-3"
                                src="https://cdn.iconscout.com/icon/free/png-512/free-location-1438800-1214139.png?f=webp&w=256"
                                alt="" />
                            {/*
                            <!-- <hr className=" border-indigo-500  rotate-90"> --> */}
                        </span>
                        <div>
                            <p className="text-[12px]">Day1 / 10 Mar 24</p>
                            <p className="text-[16px]">Delhi - Chandigarh (1 Night)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img onClick={()=> setIsItinerary(!isItinerary)} className="w-5 cursor-pointer"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/add-icon.png" alt="" />
                </div>
            </div>


           

            
            <div className={`pl-14 border-l ml-4 border-dashed pb-10 pt-5 ${isItinerary?"block":"hidden"}`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam aspernatur nesciunt deleniti
                    repellendus cum architecto, porro accusamus quibusdam, omnis fuga fugiat possimus eveniet.</p>
                <p>Dress Color for today : Yellow</p>
                {/* 2 Time Multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
                {/* 2nd multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5 ' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
            </div>

            {/*
            <!-- ----------------------------------------------------------------------------------------------------------- -->
            {/*
            <!-- itenery data show in multiple time  --> */}
            <div className="flex justify-between mt-8">
                <div className=" ">
                    <div className="flex">
                        <span className="">
                            <img className="w-8 mr-5 mt-3"
                                src="https://cdn.iconscout.com/icon/free/png-512/free-location-1438800-1214139.png?f=webp&w=256"
                                alt="" />
                            {/*
                            <!-- <hr className=" border-indigo-500  rotate-90"> --> */}
                        </span>
                        <div>
                            <p className="text-[12px]">Day1 / 10 Mar 24</p>
                            <p className="text-[16px]">Delhi - Chandigarh (1 Night)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img onClick={()=> setIsItinerary(!isItinerary)} className="w-5 cursor-pointer"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/add-icon.png" alt="" />
                </div>
            </div>


           

            
            <div className={`pl-14 border-l ml-4 border-dashed pb-10 pt-5 ${isItinerary?"block":"hidden"}`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam aspernatur nesciunt deleniti
                    repellendus cum architecto, porro accusamus quibusdam, omnis fuga fugiat possimus eveniet.</p>
                <p>Dress Color for today : Yellow</p>
                {/* 2 Time Multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
                {/* 2nd multiple */}
                <div className='bg-slate-100 rounded-md p-5 mr-5 max-w-lg my-5 ' >
                    <div className='flex gap-5'>
                        <img className='w-5'
                            src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                        <p>Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className=' mt-2'>
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    {/* multiple */}
                    <div className='flex items-center gap-3'>
                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                </div>
                            </div>
                        </div>
                        <p>Kirti Mandir</p>
                    </div>
                    {/*end */}
                    </div>
                </div>
            </div>

            {/*
            <!-- ----------------------------------------------------------------------------------------------------------- -->

            {/*
            <!-- TOUR DETAILS IS HERE --> */}
            <div id="TourDetailsSection">
                <div className="mt-12">
                    <p className="text-[20px] font-semibold">Tour Details</p>
                    <p className="text-[14px] italic text-slate-600">Best facilities with no added cost.</p>
                </div>
                <div className="flex justify-between mt-5 gap-2 border-b-2 border-indigo-900">
                    <div onClick={() => handleTabClick('tab1')} className={`cursor-pointer rounded-t-lg py-2  bg-indigo-900 grow text-center text-[16px]   ${activeTab === 'tab1' ? 'bg-indigo-900 text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-indigo-900  bg-slate-200'}`}>
                        <p>Akhf Details </p>
                    </div>
                    <div onClick={() => handleTabClick('tab2')} className={`cursor-pointer rounded-t-lg py-2  bg-indigo-900 grow text-center text-[16px]   ${activeTab === 'tab2' ? 'bg-indigo-900 text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-indigo-900  bg-slate-200'}`}>
                        <p>Flight Details </p>
                    </div>
                    <div onClick={() => handleTabClick('tab3')} className={`cursor-pointer rounded-t-lg py-2  bg-indigo-900 grow text-center text-[16px]   ${activeTab === 'tab3' ? 'bg-indigo-900 text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-indigo-900  bg-slate-200'}`}>
                        <p>Flight Details </p>
                    </div>

                </div>
                <div className="border rounded-b-lg  overflow-hidden">
                    <div className={`md:p-5 xs:p-0 xs:overflow-x-auto list-disc mx-5 ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                        <div>
                            <div className='mb-5'>
                                <p>Departure & Arrival</p>
                            </div>
                            <div className='flex'>
                                <div className='grow'>
                                    <p>Mumbai</p>
                                    <p>03 March 06:20 AM</p>
                                </div>
                                <div className='grow flex flex-col justify-center items-center' >
                                    <div >
                                        <img className='w-20' src="https://seeklogo.com/images/I/indigo-airlines-logo-B3BBFD5004-seeklogo.com.png" alt="" />
                                    </div>
                                    <div className='flex relative items-center mt-2'>
                                        
                                        <hr className=' w-10' />
                                        
                                        <div className='border px-7 rounded-full flex'>
                                            <span className='text-[10px]' >-:-</span>
                                        </div>
                                        <hr className=' w-10' />
                                    </div>
                                </div>
                                <div className='grow text-right'>
                                    <p>Mumbai</p>
                                    <p>03 March 06:20 AM</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* use this tour informatio ref veena world */}
                    {/* <ul className={`p-5 list-disc ml-[20px] ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        
                    </ul> */}
                    <div className={`py-5 list-disc  ${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
                        <div className=''>
                            <table className='w-full'>
                                <tbody>
                                    <tr className='flex justify-between '>
                                        <td className='grow text-[14px] text-center'>City - Country</td>
                                        <td className='grow text-[14px] text-center'>Hotel</td>
                                        <td className='grow text-[14px] text-center'>Check In - Check Out</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className=''>
                            <table className='w-full'>
                                <tbody>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-[16px] py-2  text-center'>City - Country</td>
                                        <td className='grow text-[16px] py-2  text-center'>Hotel</td>
                                        <td className='grow text-[16px] py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-[16px] py-2  text-center'>City - Country</td>
                                        <td className='grow text-[16px] py-2  text-center'>Hotel</td>
                                        <td className='grow text-[16px] py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-[16px] py-2  text-center'>City - Country</td>
                                        <td className='grow text-[16px] py-2  text-center'>Hotel</td>
                                        <td className='grow text-[16px] py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    <div className={` ${activeTab === 'tab3' ? 'block' : 'hidden'}`}>
                        <div className='grid grid-cols-[0.9fr,,2fr] border-b-2'>
                            <div className=' bg-slate-100 px-5  pt-3 pb-2 '>
                                <p className='leading-7'>Guest type</p>
                                <p className='leading-7'>reporting time</p>
                                <p className='leading-7'>dropping time</p>
                            </div>
                            <div className='px-5 pt-3 pb-2'>
                                <p className='leading-7'>shkjs shfj sjh</p>
                                <p className='leading-7'>lorem sdfsdfsf</p>
                                <p className='leading-7'>sdfev rtr er slorem</p>
                            </div>
                            
                        </div>
                        <div className='grid grid-cols-[0.9fr,,2fr]'>
                            <div className=' bg-slate-100 px-5  pt-3 pb-2 '>
                                <p className='leading-7'>Guest type</p>
                                <p className='leading-7'>reporting time</p>
                                <p className='leading-7'>dropping time</p>
                            </div>
                            <div className='px-5 pt-3 pb-2'>
                                <p className='leading-7'>shkjs shfj sjh</p>
                                <p className='leading-7'>lorem sdfsdfsf</p>
                                <p className='leading-7'>sdfev rtr er slorem</p>
                            </div>
                            
                        </div>
                        
                        
                        
                    </div>

                </div>

            </div>

            <div id='NeedToKnowSection'>
                <div className="my-[50px]">
                    <div className="my-[10px]">
                        <p className="text-[20px] font-semibold">Need to Know</p>
                        <p className="text-[14px] italic text-slate-600">Things to consider before the trip!</p>
                    </div>
                    <p className="text-[16px] font-semibold leading-9">Wheather</p>
                    <ul className="list-disc ml-[20px]">
                        <li className="text-[15px] leading-8">Cool and dry</li>
                        <li className="text-[15px] leading-8">For detailed Information about weather kindly visit
                            www.accuweather.com</li>
                    </ul>
                    <p className="text-[16px] font-semibold leading-9">Wheather</p>
                    <ul className="list-disc ml-[20px]">
                        <li className="text-[15px] leading-8">Cool and dry</li>
                        <li className="text-[15px] leading-8">For detailed Information about weather kindly visit
                            www.accuweather.com</li>
                    </ul>
                    <p className="text-[16px] font-semibold leading-9">Wheather</p>
                    <ul className="list-disc ml-[20px]">
                        <li className="text-[15px] leading-8">Cool and dry</li>
                        <li className="text-[15px] leading-8">For detailed Information about weather kindly visit
                            www.accuweather.com</li>
                    </ul>
                    <p className="text-[16px] font-semibold leading-9">Wheather</p>
                    <ul className="list-disc ml-[20px]">
                        <li className="text-[15px] leading-8">Cool and dry</li>
                        <li className="text-[15px] leading-8">For detailed Information about weather kindly visit
                            www.accuweather.com</li>
                    </ul>
                </div>
            </div>

            <div id='Policy&TermsSection'>
                <div className="my-[10px] mb-[20px]">
                    <p className="text-[20px] font-semibold">Cancellation Policy & Payment Terms</p>
                    <p className="text-[14px] italic text-slate-600">Things to consider before the trip!</p>
                </div>
                {/* only midium devices */}
                <div className="lg:block hidden">
                    <div className="border-b border-slate-600">
                        <div className="lg:flex max-[600px]:block">
                            <div className="bg-indigo-800 flex items-center p-3 rounded-tl-lg">
                                <p className="text-[14px] text-white w-[180px]">mobile Cancellation received no. of days prior
                                    to
                                    departure</p>
                            </div>
                            <div
                                className="bg-slate-200 lg:flex justify-between text-[14px] p-2 items-center w-full rounded-tr-lg border-t border-r border-slate-600 max-[600px]:block">
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center w-[70px] ">
                                    <p>D</p>
                                    <p>0 to 5</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>6 to 15</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>16 to 30</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>31 to 45</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>46 to 60</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>61 to 90</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>91 to 120</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>121 to 900</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    <!-- --> */}
                    <div>
                        <div className="flex">
                            <div className="bg-indigo-800 flex items-center p-3 rounded-bl-lg">
                                <p className="text-[14px] text-white w-[180px]">Cancellation received no. of days prior
                                    to
                                    departure</p>
                            </div>
                            <div
                                className="bg-white flex justify-between w-full text-[14px] p-2 items-center rounded-br-lg border-b border-r border-slate-600">
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>100%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>85%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>75%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>50%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>30%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>20%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>15%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>10%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    <!-- --> */}
                </div>

                {/* all small devices */}
                <div className='lg:hidden'>
                    <div className='flex  border-b rounded-md' >
                        <div className='grow'>
                            <div className='bg-indigo-800 p-3 text-white'>
                                <p>Cancellation received no. of days prior to departure</p>
                            </div>
                            <div>
                                <table className='w-full border-r'>
                                    <tbody >
                                        
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >Right-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>

                            
                        </div>
                        {/* right */}
                        <div className='grow'>
                            <div className='bg-indigo-800 p-3 text-white'>
                                <p>Cancellation received no. of days prior to departure</p>
                            </div>
                            <div>
                                <table className='w-full'>
                                    <tbody >
                                        
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >New-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>

                            
                        </div>
                        
                        
                    </div>                    
                </div>

                <div>

                    <div className="mt-5">
                        <div className="my-[10px]">
                            <p className="text-[16px] font-semibold">Payment Terms</p>
                            <p className="text-[14px]">Guest can pay by Cheque/ Demand Draft/ Debit card / Credit card/
                                NEFT/ RTGS/ IMPS. For Debit / Credit card payment additional 1.8 % convenience charge
                                will be applicable Cheque / Demand draft should be in favour of "Veena Patil Hospitality
                                Pvt ltd"</p>
                        </div>
                        <p className="text-[16px] font-semibold leading-9">Remark</p>
                        <ul className="list-disc ml-[20px]">
                            <li className="text-[15px] leading-8">All meals will be provided by Veena World in case the
                                flight reaches the stipulated destination early morning or leaves destination late in
                                the evening.</li>
                            <li className="text-[15px] leading-8">In Case if any sightseeing is not done due to weekly
                                closure, an alternative sightseeing will be done for the same.</li>
                            <li className="text-[15px] leading-8">All meals will be provided by Veena World in case the
                                flight reaches the stipulated destination early morning or leaves destination late in
                                the evening.</li>
                            <li className="text-[15px] leading-8">In Case if any sightseeing is not done due to weekly
                                closure, an alternative sightseeing will be done for the same.</li>
                        </ul>

                    </div>

                </div>

                {/*
                <!--  --> */}

                <div id='UpgradesSection'>
                    <div className="mt-12">
                        <p className="text-[20px] font-semibold">Upgrades Available</p>
                        <p className="text-[14px] italic text-slate-600">Best facilities with no added cost.</p>
                    </div>
                    <div className="flex justify-between mt-5 gap-2 border-b-2 border-indigo-900">
                        <div onClick={()=>{UpgradesAvalilableTabClick("tab1")}} className={`cursor-pointer rounded-t-lg py-2 px-10 bg-indigo-900 grow text-center text-[16px]   ${UpgradesAvalilable === 'tab1' ? 'bg-indigo-900 text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-indigo-900  bg-slate-200'}`}>
                            <p>Flight Details </p>
                        </div>
                        <div onClick={()=>{UpgradesAvalilableTabClick("tab2")}}  className={`cursor-pointer rounded-t-lg py-2 px-10 bg-indigo-900 grow text-center text-[16px]   ${UpgradesAvalilable === 'tab2' ? 'bg-indigo-900 text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-indigo-900  bg-slate-200'}`}>
                            <p>Flight Details </p>
                        </div>

                    </div>
                    <div className="border p-5 ">
                    <ul className={`list-disc ml-[20px] ${UpgradesAvalilable === 'tab1' ? 'block' : 'hidden'}`}>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        
                    </ul>
                    <ul className={`list-disc ml-[20px] ${UpgradesAvalilable === 'tab2' ? 'block' : 'hidden'}`}>
                        <li className="leading-8 text-[15px]"><span></span>Tab 2</li>
                        
                    </ul>
                    </div>

                </div>
            </div>

        </div>
        <div className="hidden xl:block mt-10">
            <div className='sticky top-20 z-20'>
                
            <div className="flex gap-1 items-center  justify-end ">
                <div className="items-center flex flex-col p-2 text-center">
                    <img className="w-4" src="https://www.svgrepo.com/show/475692/whatsapp-color.svg" alt="" />
                    <p className="text-[12px]">Send Itinerary</p>
                </div>

                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                    <img className="w-4" src="https://www.svgrepo.com/show/522439/printer.svg" alt="" />
                    <p className="text-[12px]">Print Itinerary</p>
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                    <img className="w-4" src="https://www.svgrepo.com/show/522399/envelope-closed.svg" alt="" />
                    <p className="text-[12px]">Email Itinerary</p>
                </div>

            </div>
            {/* card is here */}
            <div className="relative flex-shrink-0 max-w-[18rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg ml-[80px]">
            <div
                className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check" />
                <div
                    className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
                <button
                    className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-6 h-6">
                            <path
                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>
            <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-3">
                    <h5
                        className="block font-sans text-[18px] font-semibold antialiased  leading-snug tracking-normal text-blue-gray-900">
                        Wooden House, Florida
                    </h5>
                    <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p>
                </div>
                
                    <div>
                        <p className='text-[14px] line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing. Assenda maxime impedit adipisci? Ipsa cupiditate magnam ex, temporibus non cumque amet et saepe.</p>
                    </div>
                <div className="flex justify-center mt-5">
                    <div className="text-right">
                        {/* <p className="text-[14px] leading-5 text-cyan-400 font-semibold">SUPER DEAL PRICE</p> */}
                        <p className="text-[12px] leading-4 text-green-600">Starts From <span className="text-[20px] text-black font-medium">₹
                                3,50,000</span></p>
                        {/* <p className="text-[10px] leading-5">per person on twin sharing</p> */}
                        <p className="text-[14px] leading-5 font-medium underline text-blue-900">from ₹ 19,423/months
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-6 pt-3">
                <button
                    className="block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    View details
                </button>
            </div>
        </div>
            </div>
            
        </div>
    </div>

</div>


    {/* Reviews */}
    <div className="bg-cyan-950 mt-10">
        <div className="container-wrapper ">
            <div className="text-center py-5">
                <h3 className="text-[22px] font-semibold text-white">Bizare Expenditure tour reviews</h3>
                <p className="text-[16px] font-semibold text-white"> What are you waiting for? Chalo Bag Bharo Nikal
                    Pado!
                </p>
            </div>

            <div className="flex gap-3 justify-between py-10 max-[1180px]:overflow-x-scroll">
                {/*
                <!-- card 1--> */}
                <div
                    className=" bg-white rounded-lg p-5 relative flex-shrink-0 max-w-[22rem] flex-col bg-clip-border shadow-lg">
                    <div className="flex gap-3">
                        <p className="flex  gap-1">
                            <span className="flex align-middle">
                                <img className="w-[15px] " src="https://www.svgrepo.com/show/13695/star.svg" alt="" />
                            </span>
                            5</p>
                        <p
                            className="w-[45px] border rounded-sm text-[13px] text-center text-amber-600 border-amber-600">
                            Faimly</p>
                    </div>
                    <p className="text-[17px] font-semibold mb-5">European Jewels with Versailles</p>
                    <p className="line-clamp-3 text-[15px] italic ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, fugit! Vero, itaque pariatur
                        cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                        corporis dicta!
                    </p>
                    <span className="text-[15px] italic underline text-blue-500">more</span>
                    <div>
                        <p className="text-[15px] font-semibold mt-5">Anita Kumari</p>
                        <p className="text-[13px]">Travelled in Sep,2023</p>
                    </div>
                </div>

                {/*
                <!-- card 2--> */}
                <div
                    className=" bg-white rounded-lg p-5 relative flex-shrink-0 max-w-[22rem] flex-col bg-clip-border shadow-lg">
                    <div className="flex gap-3">
                        <p className="flex  gap-1">
                            <span className="flex align-middle">
                                <img className="w-[15px] " src="https://www.svgrepo.com/show/13695/star.svg" alt="" />
                            </span>
                            5</p>
                        <p
                            className="w-[45px] border rounded-sm text-[13px] text-center text-amber-600 border-amber-600">
                            Faimly</p>
                    </div>
                    <p className="text-[17px] font-semibold mb-5">European Jewels with Versailles</p>
                    <p className="line-clamp-3 text-[15px] italic ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, fugit! Vero, itaque pariatur
                        cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                        corporis dicta!
                    </p>
                    <span className="text-[15px] italic underline text-blue-500">more</span>
                    <div>
                        <p className="text-[15px] font-semibold mt-5">Anita Kumari</p>
                        <p className="text-[13px]">Travelled in Sep,2023</p>
                    </div>
                </div>

                {/*
                <!-- card 3--> */}
                <div
                    className=" bg-white rounded-lg p-5 relative flex-shrink-0 max-w-[22rem] flex-col bg-clip-border shadow-lg">
                    <div className="flex gap-3">
                        <p className="flex  gap-1">
                            <span className="flex align-middle">
                                <img className="w-[15px] " src="https://www.svgrepo.com/show/13695/star.svg" alt="" />
                            </span>
                            5</p>
                        <p
                            className="w-[45px] border rounded-sm text-[13px] text-center text-amber-600 border-amber-600">
                            Faimly</p>
                    </div>
                    <p className="text-[17px] font-semibold mb-5">European Jewels with Versailles</p>
                    <p className="line-clamp-3 text-[15px] italic ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, fugit! Vero, itaque pariatur
                        cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                        corporis dicta!
                    </p>
                    <span className="text-[15px] italic underline text-blue-500">more</span>
                    <div>
                        <p className="text-[15px] font-semibold mt-5">Anita Kumari</p>
                        <p className="text-[13px]">Travelled in Sep,2023</p>
                    </div>
                </div>
                {/*
                <!-- card --> */}



            </div>
            {/*
            <!-- button --> */}
            <div className="text-center pb-10">
                <button className="bg-yellow-400 p-3 px-5 text-md rounded-md">Read More Reviews</button>
            </div>

        </div>
    </div>


    {/* Similar tour */}

    <div className="container-wrapper">
        <h2 className="text-[22px] font-semibold my-[30px]">Similar Tours for You</h2>
    </div>

    <div className="container-wrapper flex gap-3 justify-between max-[1180px]:overflow-x-scroll  w-full p-1">
        {/*
        <!-- card 1 --> */}
        <div
            className="relative flex-shrink-0 max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div
                className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check" />
                <div
                    className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
                <button
                    className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-6 h-6">
                            <path
                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>
            <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-3">
                    <h5
                        className="block font-sans text-[18px] font-semibold antialiased  leading-snug tracking-normal text-blue-gray-900">
                        Wooden House, Florida
                    </h5>
                    <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p>
                </div>
                <p className="block font-sans text-[15px] antialiased font-light leading-relaxed text-gray-700">
                    Enter a freshly updated and thoughtfully furnished peaceful home
                    surrounded by ancient trees, stone walls, and open meadows.
                </p>
                <div className="flex justify-between mt-5">
                    <div>

                        <div className="flex">
                            <div className="z-30">
                                <p
                                    className="rounded-full bg-white w-[30px] h-[30px] text-center border-blue-300 border">
                                    ₹
                                </p>
                            </div>
                            <div className="bg-indigo-200 p-1 px-3 mx-[-10px] rounded-sm">
                                <p className="text-indigo-800 text-[12px] font-semibold">Quick Quote</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[14px] leading-5 text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                        <p className="text-[12px] leading-5">Starts From <span className="text-[22px] font-medium">₹
                                3,50,000</span></p>
                        <p className="text-[10px] leading-5">per person on twin sharing</p>
                        <p className="text-[14px] leading-5 font-medium underline text-blue-900">from ₹ 19,423/months
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-6 pt-3">
                <button
                    className="block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    View details
                </button>
            </div>
        </div>
        {/*
        <!-- card 2 --> */}
        <div
            className="relative flex-shrink-0 max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div
                className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check" />
                <div
                    className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
                <button
                    className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-6 h-6">
                            <path
                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>
            <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-3">
                    <h5
                        className="block font-sans text-[18px] font-semibold antialiased  leading-snug tracking-normal text-blue-gray-900">
                        Wooden House, Florida
                    </h5>
                    <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p>
                </div>
                <p className="block font-sans text-[15px] antialiased font-light leading-relaxed text-gray-700">
                    Enter a freshly updated and thoughtfully furnished peaceful home
                    surrounded by ancient trees, stone walls, and open meadows.
                </p>
                <div className="flex justify-between mt-5">
                    <div>

                        <div className="flex">
                            <div className="z-30">
                                <p
                                    className="rounded-full bg-white w-[30px] h-[30px] text-center border-blue-300 border">
                                    ₹
                                </p>
                            </div>
                            <div className="bg-indigo-200 p-1 px-3 mx-[-10px] rounded-sm">
                                <p className="text-indigo-800 text-[12px] font-semibold">Quick Quote</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[14px] leading-5 text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                        <p className="text-[12px] leading-5">Starts From <span className="text-[22px] font-medium">₹
                                3,50,000</span></p>
                        <p className="text-[10px] leading-5">per person on twin sharing</p>
                        <p className="text-[14px] leading-5 font-medium underline text-blue-900">from ₹ 19,423/months
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-6 pt-3">
                <button
                    className="block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    View details
                </button>
            </div>
        </div>
        {/*
        <!-- card 3 --> */}
        <div
            className="relative flex-shrink-0 max-w-[22rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div
                className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check" />
                <div
                    className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
                <button
                    className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-6 h-6">
                            <path
                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>
            <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-3">
                    <h5
                        className="block font-sans text-[18px] font-semibold antialiased  leading-snug tracking-normal text-blue-gray-900">
                        Wooden House, Florida
                    </h5>
                    <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p>
                </div>
                <p className="block font-sans text-[15px] antialiased font-light leading-relaxed text-gray-700">
                    Enter a freshly updated and thoughtfully furnished peaceful home
                    surrounded by ancient trees, stone walls, and open meadows.
                </p>
                <div className="flex justify-between mt-5">
                    <div>

                        <div className="flex">
                            <div className="z-30">
                                <p
                                    className="rounded-full bg-white w-[30px] h-[30px] text-center border-blue-300 border">
                                    ₹
                                </p>
                            </div>
                            <div className="bg-indigo-200 p-1 px-3 mx-[-10px] rounded-sm">
                                <p className="text-indigo-800 text-[12px] font-semibold">Quick Quote</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[14px] leading-5 text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                        <p className="text-[12px] leading-5">Starts From <span className="text-[22px] font-medium">₹
                                3,50,000</span></p>
                        <p className="text-[10px] leading-5">per person on twin sharing</p>
                        <p className="text-[14px] leading-5 font-medium underline text-blue-900">from ₹ 19,423/months
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-6 pt-3">
                <button
                    className="block w-full select-none rounded-lg bg-orange-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    View details
                </button>
            </div>
        </div>
    </div>






</div>
}