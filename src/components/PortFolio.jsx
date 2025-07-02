import React from 'react'

const PortFolio = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 mt-6 md:px-24 mb-4'>
                <h1 className='font-bold text-2xl'>PortFolio</h1>
                <span className='underline cursor-pointer mt-3 font-medium text-justify'>Featured Projects</span>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7'>
                    <div className="bg-white hover:scale-105 duration-200 border-gray-200 rounded-lg shadow dark:border-gray-700">
                        <a href="#" className="flex justify-center cursor-default">
                            <img
                                className="rounded-full h-[100px] w-[100px]"
                                src="mongo.png"
                                alt="MongoDB"
                            />
                        </a>
                        <div className="p-5">
                            <a href="https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_emea-all_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646455&adgroup=131761126492&cq_cmp=14412646455&gad_source=1&gclid=Cj0KCQjw_sq2BhCUARIsAIVqmQtt9baF5UrYMsLel4GDhv5eFlae8x_DvGANEdxCxl_QAfCJWb4vccEaAlujEALw_wcB" target='_blank'>
                                <h5 className="mb-2 text-2xl font-medium tracking-tight text-black text-center">
                                    MongoDB
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-black text-center">
                                MongoDB is a NoSQL database scalability and flexibility.
                            </p>
                            <div className='space-x-2 flex justify-center'>
                                <a
                                    href="https://youtu.be/oMrKVEedpHg?si=GIsYNTzPUxhsl8yv" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Video
                                </a>
                                <a
                                    href="https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/tree/main/Video%2094" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white hover:scale-105 duration-200 border-gray-200 rounded-lg shadow dark:border-gray-700">
                        <a href="#" className="flex justify-center cursor-default">
                            <img
                                className="rounded-full h-[100px] w-[100px]"
                                src="react.png"
                                alt="React"
                            />
                        </a>
                        <div className="p-5">
                            <a href="https://react.dev/" target='_blank'>
                                <h5 className="mb-2 text-2xl font-medium tracking-tight text-black text-center">
                                    React
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-black text-center">
                            React is JS library focused on components and the Virtual DOM.
                            </p>
                            <div className='space-x-2 flex justify-center'>
                                <a
                                    href="https://youtu.be/-mJFZp84TIY?si=5Wp3Qqcy3-naP1vW" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Video
                                </a>
                                <a
                                    href="https://github.com/facebook/react" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white hover:scale-105 duration-200 border-gray-200 rounded-lg shadow dark:border-gray-700">
                        <a href="#" className="flex justify-center cursor-default">
                            <img
                                className="rounded-full h-[100px] w-[100px]"
                                src="js.png"
                                alt="JS"
                            />
                        </a>
                        <div className="p-5">
                            <a href="/" target='_blank'>
                                <h5 className="mb-2 text-2xl font-medium tracking-tight text-black text-center">
                                    JavaScript
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-black text-center">
                            JavaScript has event-driven nature and types for inheritance.
                            </p>
                            <div className='space-x-2 flex justify-center'>
                                <a
                                    href="https://youtu.be/ER9SspLe4Hg?si=60j1uIPo8zjCUa27" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Video
                                </a>
                                <a
                                    href="/" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white hover:scale-105 duration-200 border-gray-200 rounded-lg shadow dark:border-gray-700">
                        <a href="#" className="flex justify-center cursor-default">
                            <img
                                className="rounded-full h-[100px] w-[100px]"
                                src="python.jpg"
                                alt="Python"
                            />
                        </a>
                        <div className="p-5">
                            <a href="/" target='_blank'>
                                <h5 className="mb-2 text-2xl font-medium tracking-tight text-black text-center">
                                    Python
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-black text-center">
                            Python is programming language.It allows quick testing and development
                            </p>
                            <div className='space-x-2 flex justify-center'>
                                <a
                                    href="/" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Video
                                </a>
                                <a
                                    href="/" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white hover:scale-105 duration-200 border-gray-200 rounded-lg shadow dark:border-gray-700">
                        <a href="#" className="flex justify-center cursor-default">
                            <img
                                className="rounded-full h-[100px] w-[100px]"
                                src="java.webp"
                                alt="Java"
                            />
                        </a>
                        <div className="p-5">
                            <a href="" target='_blank'>
                                <h5 className="mb-2 text-2xl font-medium tracking-tight text-black text-center">
                                    Java
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-black text-center">
                            Java is programming language known for WORA (Write Once, Run Anywhere)
                            </p>
                            <div className='space-x-2 flex justify-center'>
                                <a
                                    href="/" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Video
                                </a>
                                <a
                                    href="/" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white hover:scale-105 duration-200 border-gray-200 rounded-lg shadow dark:border-gray-700">
                        <a href="#" className="flex justify-center cursor-default">
                            <img
                                className="rounded-full h-[100px] w-[100px]"
                                src="c.png"
                                alt="Angular"
                            />
                        </a>
                        <div className="p-5">
                            <a href="/" target='_blank'>
                                <h5 className="mb-2 text-2xl font-medium tracking-tight text-black text-center">
                                    C++
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-black text-center">
                            C++ is programming language that offers low-level memory management.
                            </p>
                            <div className='space-x-2 flex justify-center'>
                                <a
                                    href="/" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Video
                                </a>
                                <a
                                    href="/" target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default PortFolio
