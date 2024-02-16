import '../../../app/globals.css';
import Menu from "../../../components/Itinerary/viewPlanMenu/menu"

const Details = () => {
return (
<div>

    <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto">
            <div className="bg-white p-4 md:p-8">
                {/* Header */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Japan in 16 Days, 14 Nights in Destination Tour Package
                </h1>
                {/* Image */}
                <div className="mb-6 flex flex-col md:flex-row">
                    {/* Left side image */}
                    <div className="w-full md:w-2/3 pr-0 md:pr-2 mb-2 md:mb-0">
                        <img src="https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F9479%2F347774.jpg&w=1080&q=75"
                            alt="Tour Package Image" className="w-full h-64 object-cover rounded-md" />
                    </div>

                    {/* Right side images */}
                    <div className="w-full md:w-1/3 pl-0 md:pl-2 flex flex-col">
                        <img src="https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F9479%2F262387.jpg&w=1080&q=75"
                            alt="Tour Package Image" className="mb-2 h-32 md:h-64 object-cover rounded-md" />
                        <img src="https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F9479%2F214715.jpg&w=1080&q=75"
                            alt="Tour Package Image" className="h-32 md:h-64 object-cover rounded-md" />
                    </div>
                </div>


                {/* Description */}
                <div className="mb-6">
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam vel nisi eget nisl tristique convallis at sit amet
                        nulla. ...
                    </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                    <p className="text-xl font-semibold text-green-600">
                        $999.99
                    </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Key Features:</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Accommodation included</li>
                        <li>Guided tours</li>
                        <li>Meals provided</li>
                        {/* Add more features */}
                    </ul>
                </div>

                {/* CTA Button */}
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    Book Now
                </button>
            </div>
        </div>
    </div>
    {/* code is here  */}

    <div className='mb-[850px] border max-w-xl m-auto px-3 rounded-lg py-5'>
        <div className=''>
            <p className='pb-3 px-1'>EMI plan Sankash</p>
            <div className=' columns-1 border rounded-lg overflow-hidden'>
                <div className='grid grid-cols-4 bg-slate-300 px-3 py-2 font-semibold'>
                    <p className='col-span-1'></p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                </div>
                <div className='grid grid-cols-4 px-3 py-1'>
                    <p className='font-semibold'>Hello</p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                </div>
                <div className='grid grid-cols-4 px-3 py-1'>
                    <p className='col-span-1'></p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                </div>
                <hr />
                <div className='grid grid-cols-4 px-3 py-1'>
                    <p className='font-semibold'>Hello</p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                </div>
                <div className='grid grid-cols-4 px-3 py-1'>
                    <p className='col-span-1'></p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                </div>
                <div className='grid grid-cols-4 px-3 py-1'>
                    <p className='col-span-1'></p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                </div>
                <div className='grid grid-cols-4 px-3 py-1'>
                    <p className='col-span-1'></p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                    <p className='text-right'>hello</p>
                </div>


            </div>

            <div>
                <p className='py-3 px-1'>Get in touch with us</p>
                <div>
                    <form action="" className='flex gap-3'>
                        <input type="text"  className=' grow border rounded-md p-2 w-[120px]' placeholder='Your Full name'/>
                        <div className='border flex rounded-md overflow-hidden'>
                            <Menu/>
                            <input type="text" className='grow w-[120px]' />
                        </div>
                        <button className='bg-orange-500 grow text-white p-2 rounded-md '>Submit</button>
                    </form>
                </div>
            </div>
            <div className='py-3 px-1'>
                <p>Please Note:</p>
                <div className="px-5">
                    <ul>
                        <li className='text-[14px] leading-7 list-disc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li className='text-[14px] leading-7 list-disc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li className='text-[14px] leading-7 list-disc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li className='text-[14px] leading-7 list-disc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li className='text-[14px] leading-7 list-disc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li className='text-[14px] leading-7 list-disc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </div>
            </div>


        </div>

    </div>

</div>
);
};

export default Details;