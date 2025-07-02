import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { ReactTyped } from "react-typed";
const Home = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-24 my-20'>
                <div className='flex flex-col md:flex-row mt-28 md:mt-44'>

                    <div className='w-full font-semibold space-y-2 md:order-1 order-2'><span>Welcome to my Page</span>
                        <div className='flex  gap-1 text-2xl md:text-3xl'>
                            <h1 className=''>Hello, I'm a
                                <ReactTyped
                                    className='font-bold text-red-700 ml-2'
                                    strings={["Developer", "Coder", "Programmer"]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop={true}
                                /></h1>
                        </div>
                        <br />
                        <p className='font-medium text-justify'>I am a skilled Full Stack Developer with a strong grasp of both front-end and back-end technologies, enabling me to build comprehensive and efficient web applications. In addition to my development expertise, I have a solid understanding of Data Structures and Algorithms (DSA), which allows me to write optimized and scalable code. My ability to seamlessly integrate my knowledge of DSA into my development work ensures that I create robust and high-performance solutions.</p>


                        <div className='flex md:justify-between flex-col md:flex-row gap-6 justify-center items-center'>
                            <div>
                                <h1 className='mt-3'>Available On</h1>
                                <ul className='flex space-x-4 text-xl md:text-2xl mt-2'>

                                    <a href="https://web.facebook.com/login/?_rdc=1&_rdr" target="_blank">
                                        <li className='cursor-pointer hover:scale-110  duration-200 rounded-full'>
                                            <FaFacebook />
                                        </li>
                                    </a>
                                    <a href="https://www.linkedin.com/login" target="_blank">
                                        <li className='cursor-pointer hover:scale-110  duration-200 rounded-full'>
                                            <FaLinkedin />
                                        </li>
                                    </a>
                                    <a href="https://www.youtube.com/" target="_blank">
                                        <li className='cursor-pointer hover:scale-110  duration-200 rounded-full'>
                                            <FaYoutube />
                                        </li>
                                    </a>
                                    <a href="https://web.whatsapp.com/" target="_blank">
                                        <li className='cursor-pointer hover:scale-110  duration-200 rounded-full'>
                                            <IoLogoWhatsapp />
                                        </li>
                                    </a>
                                    <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">
                                        <li className='cursor-pointer hover:scale-110  duration-200 rounded-full'>
                                            <FaInstagramSquare />
                                        </li>
                                    </a>




                                </ul>
                            </div>
                            <div className='mt-3 font-semibold'>

                                <h2>Currently Working on</h2>
                                <div className='text-xl md:text-3xl flex space-x-4 mt-2'>
                                    <a href="https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_emea-all_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646455&adgroup=131761126492&cq_cmp=14412646455&gad_source=1&gclid=Cj0KCQjw28W2BhC7ARIsAPerrcKv3e59zhz-_JyqWtwEIkaWYUHLcNVf1I_fGb8wn29UTydlPiMMHdEaArtyEALw_wcB" target="_blank">
                                        <BiLogoMongodb className='hover:scale-110  cursor-pointer duration-200 rounded-full border-[2px]' />
                                    </a>
                                    <a href="https://react.dev/" target="_blank">
                                        <FaReact className='hover:scale-110  cursor-pointer duration-200 rounded-full border-[2px]' />
                                    </a>
                                    <a href="https://expressjs.com/" target="_blank">
                                        <SiExpress className='hover:scale-110  cursor-pointer duration-200 rounded-full border-[2px]' /></a>
                                    <a href="https://tailwindcss.com/" target="_blank">
                                        <SiTailwindcss className='hover:scale-110  cursor-pointer duration-200 rounded-full border-[2px]' />
                                    </a>
                                    <a href="https://nodejs.org/en" target="_blank">
                                        <FaNodeJs className='hover:scale-110  cursor-pointer duration-200 rounded-full border-[2px]' />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='w-full md:ml-28 md:mt-0 ml-3 md:mr-5 mr-7 mt-6 mb-5 md:mb-0 order-1 md:order-2'>
                        <img className='md:h-[450px] md:w-[450px] rounded-full md:rounded-full' src="software.webp" alt="" />
                    </div>
                </div>
            </div>
        
            <hr />
        </>
    )
}

export default Home
