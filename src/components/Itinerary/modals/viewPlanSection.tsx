
import '../../../app/globals.css';
import Menu from "../viewPlanMenu/menu"


const ViewPlanSection = () => {
    return (
        <>
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
        </>
    )
}