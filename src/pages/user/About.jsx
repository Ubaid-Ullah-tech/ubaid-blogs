import React from 'react';
// import about from '../../assets/images/about.png'
import image1 from '../../assets/images/ubaid.webp'
const About = () => {
  return (
    <div className="flex flex-col items-center flex-wrap justify-center min-h-screen text-white px-5 py-10 pt-28">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-lg md:text-xl mb-6">
          Hello, I'm Ubaid, a passionate web developer specializing in building dynamic and responsive web applications using modern technologies like React, Node.js, and MongoDB.
        </p>
        <p className="flex text-lg md:text-xl">
          With a strong focus on delivering efficient and scalable solutions, I love working with the MERN stack and exploring new tools like Tailwind CSS to craft beautiful and functional user interfaces.
        </p>
      </div>

      <div className=" w-full max-w-4xl flex flex-wrap justify-center items-center gap-10 mt-10">
        <div className="text-center">
          <img className="w-64 h-60 mx-auto mb-3" src={image1} alt="React" />
        </div>
        
      </div>
      <a href='/'>
        <button className='btn btn-success mt-3'>Back-To-Home_page</button>
      </a>
    </div>
  );
};

export default About;
