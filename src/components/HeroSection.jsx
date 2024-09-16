import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { myContext } from '../context/Context';
import ubaid1 from '../assets/images/ubaid1.jpg'
function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center mb-6">
                        <img
                            className="w-32 h-32 rounded-full shadow-lg border-4 border-white transform transition-all hover:scale-110"
                            src={ubaid1}
                            alt="Ubaid Ullah"
                        />
                    </div>
                            {/* <div className="flex justify-center">
                                <img className='w-20 h-20 rounded-full' src={ubaid1} alt="" />
                            </div> */}

                            {/* Text  */}
                            <h1 className=' text-3xl text-white font-bold'>Ubaid Ullah</h1>
                            <h1 className=' text-2xl text-gray-300 mt-4 mb-5'> Software Engineer &amp; Blogger</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl text-gray-200 font-extralight sm:mx-auto ">
                            Welcome to my blog! Here you'll find insightful tutorials, articles, and blogs that share my knowledge on web development and software engineering. Let's learn and grow together!
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection