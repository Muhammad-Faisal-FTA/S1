import React from 'react'

const Experience = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 mt-6 md:px-24 mb-4'>
                <div>
                    <h1 className='font-bold text-2xl'>Experience</h1>
                    <p className='text-justify font-medium'>I've Experience in the Following Technologies:</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                    <div className='flex justify-center md:justify-normal'>
                        <img
                            className='rounded-full h-[200px] w-[200px] object-cover mt-4 hover:scale-105 duration-200 cursor-pointer '
                            src="java.webp"
                            alt="Experience"
                        />
                    </div>
                    <div className='flex justify-center md:justify-normal'>
                        <img
                            className='rounded-full h-[200px] w-[200px] object-cover mt-4 hover:scale-105 duration-200 cursor-pointer '
                            src="css.png"
                            alt="Experience"
                        />
                    </div>
                    <div className='flex justify-center md:justify-normal'>
                        <img
                            className='rounded-full h-[200px] w-[200px] object-cover mt-4 hover:scale-105 duration-200 cursor-pointer  border-[2px]'
                            src="html3.png"
                            alt="Experience"
                        />
                    </div>
                    <div className='flex justify-center md:justify-normal'>
                        <img
                            className='rounded-full h-[200px] w-[200px] object-cover mt-4 hover:scale-105 duration-200 cursor-pointer '
                            src="js.png"
                            alt="Experience"
                        />
                    </div>
                    <div className='flex justify-center md:justify-normal'>
                        <img
                            className='rounded-full h-[200px] w-[200px] object-cover mt-4 hover:scale-105 duration-200 cursor-pointer '
                            src="python.jpg"
                            alt="Experience"
                        />
                    </div>
                    <div className='flex justify-center md:justify-normal'>
                        <img
                            className='rounded-full h-[200px] w-[200px] object-cover mt-4 hover:scale-105 duration-200 cursor-pointer '
                            src="react.png"
                            alt="Experience"
                        />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Experience
