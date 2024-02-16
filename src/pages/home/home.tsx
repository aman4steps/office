import "../../app/globals.css";
// import VideoBackground from '../../../public/video/'
// import VideoBackground from '../../assets/video/travel.mp4';

export default function home(){
    return (
        <>
            <div  className="relative h-screen flex items-center justify-center">
        <div  className="container-wrapper absolute z-30 top-5 text-white flex  items-center justify-between">
            <div>
                <img  className="w-40" src="https://www.bizarexpedition.com/bx/images/logo/15903060991.png" alt=""/>
            </div>
            <div  className="flex items-center justify-between gap-10">

                <div  className="flex gap-5 items-center">
                    <div  className="py-2">
                        <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-8a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"/>
                        </svg>
                    </div>
                    <a  className="transition duration-700 ease-in-out" href="">Destination</a>
                    <a href="">Experience</a>
                    <a href="">About</a>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg"  className=" h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </div>
                </div>
                
                
                <div  className="flex items-center gap-5 z-30">
                    <p >+44 54 554 54552</p>
                    <button  className="border rounded-md hover:bg-orange-500 px-5 py-1" >Sign in</button>
                </div>
            </div>
        </div>
        {/* <!-- Background Image --> */}
        {/* <!-- <div  className="absolute  inset-0 z-0">
            <img  className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1707570071990-d51f6d902d91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" />
        </div> --> */}
    

        <video  className="absolute  inset-0 z-0 w-full h-full object-cover" autoplay muted loop poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
            <source src="../../assets/video/travel.mp4" type="video/mp4"/>
            {/* <!-- Your browser does not support the video tag. --> */}
        </video>
        




        {/* <!-- Overlay --> */}
        <div  className="absolute inset-0 z-10 bg-black opacity-10"></div>
    
        {/* <!-- Text Content --> */}
        <div  className="z-20 text-white text-center relative">
            <h1  className="text-4xl font-bold">Lorem ipsum dolor. Explicabo, quam!</h1>
            <p  className="mt-2">Additional text or content can go here.</p>
            <button  className="border px-20 py-4 mt-3 rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out" >Submit</button>
        </div>

        {/* <!-- scroll arrow sign --> */}
        <div  className="absolute bottom-10 z-30 animate-bounce items-center flex flex-col">
            <p   className="text-white">scroll down</p>
            <svg xmlns="http://www.w3.org/2000/svg"  className=" h-6 w-6 mt-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
    </div>



    
        </>
    )
}