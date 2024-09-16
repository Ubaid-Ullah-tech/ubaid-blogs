import React from 'react';
import screen1 from '../../assets/images/screen1.png'
import screen2 from '../../assets/images/screen2.png'
import screen3 from '../../assets/images/screen3.png'
const Certification = () => {
  return (
    <div className="max-w-screen-2xl mt-20 mx-auto container md:px-20  bg-gray-100 text-gray-800">
      
      {/* Main Content */}
      <main className="container mx-auto p-6">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <p className="mb-6">Here are some of the certifications I have earned to enhance my skills and knowledge in the field of web development.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certification 1 */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src={screen1} alt="Certification 1" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2"><span className='text-blue-500 font-bold'>Certification THTML CSS JAVASCRIPT</span></h3>
              <h3 className="text-xl font-semibold mb-2"><span className='text-green-500 font-bold'>What You’ll Learn:</span></h3>
              <p className="text-gray-700"><span className='text-blue-500 font-bold'>HTML :</span> The backbone of web content. Learn how to structure your web pages with semantic HTML5, create compelling content, and understand the essential elements that make a website functional and accessible.</p>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>CSS :</span> Transform your static HTML pages into beautiful, responsive designs. Explore the art of styling with modern CSS techniques, including Flexbox, Grid, and advanced animations. Discover how to make your websites look amazing on any device.</p>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>JAVASCRIPT :</span> Bring your websites to life with dynamic interactions. Gain hands-on experience with JavaScript to manipulate the DOM, handle events, and create engaging user experiences. Master essential programming concepts and best practices to build interactive web applications.</p>

              <h3 className="text-xl font-semibold mb-2"><span className='text-green-500 font-bold'>Why This Course?</span></h3>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>HANDS-ON PROJECTS:</span> Apply your skills to real-world projects, from building responsive layouts to creating interactive features. Build a portfolio that showcases your abilities and impresses potential employers.</p>


              <p className="text-gray-700"><span className='text-blue-500 font-bold'>EXPERT INSTRUCTION :</span>  Learn from industry professionals with extensive experience in web development. Gain insights into current best practices, tools, and technologies.</p>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>FLEXIBLE LEARNING :</span> Enjoy the freedom to learn at your own pace with 24/7 access to course materials. Whether you're a beginner or looking to refresh your skills, this course adapts to your learning style.</p>
            </div>










            {/* Certification 2 */}
           <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src={screen2} alt="Certification 1" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2"><span className='text-blue-500 font-bold'>Certification CLOUD COMPUTING APPLICATION</span></h3>
              <h3 className="text-xl font-semibold mb-2"><span className='text-green-500 font-bold'>What You’ll Learn:</span></h3>
              <p className="text-gray-700"><span className='text-blue-500 font-bold'>CLOUD FUNDAMENTALS :</span> Get a solid foundation in cloud computing concepts, including the different types of clouds (public, private, hybrid) and core services (IaaS, PaaS, SaaS). Understand how the cloud can enhance your IT infrastructure and operations.</p>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>CLOUD PLATFORMS :</span> Dive into popular cloud platforms like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Learn how to navigate their environments, utilize their services, and integrate them into your application workflows.</p>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>APPLICATION DEVELOPMENT :</span> Discover how to develop and deploy cloud-native applications. Explore serverless computing, containerization with Docker and Kubernetes, and microservices architecture to build scalable and resilient applications.</p>

              <h3 className="text-xl font-semibold mb-2"><span className='text-green-500 font-bold'>Why This Course?</span></h3>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>HANDS-ON LABS:</span> Engage in practical, hands-on labs and projects to apply your knowledge in real-world scenarios. Build and deploy cloud applications, manage services, and optimize performance.</p>


              <p className="text-gray-700"><span className='text-blue-500 font-bold'>EXPERT GUIDANCE :</span>  Benefit from instruction by seasoned cloud professionals who bring real-world experience and insights. Gain access to industry best practices and current trends in cloud computing.</p>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>FLEXIBLE LEARNING :</span>  Enjoy the convenience of learning at your own pace with 24/7 access to course materials. Whether you're new to cloud computing or looking to enhance your skills, this course fits your schedule.</p>
            </div>






            {/* Certification 3 */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src={screen3} alt="Certification 1" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2"><span className='text-blue-500 font-bold'>Certification EXCEL SKILLS FOR BUSINESS ESSENTIAL</span></h3>
              <h3 className="text-xl font-semibold mb-2"><span className='text-green-500 font-bold'>What You’ll Learn:</span></h3>
              <p className="text-gray-700"><span className='text-blue-500 font-bold'>EXCEL FUNDAMENTALS :</span> Get acquainted with the core features of Excel, including cell formatting, basic formulas, and essential functions. Build a solid foundation to handle various spreadsheet tasks with ease.</p>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>DATA ANALYSIS VISUALIZATION :</span>  Learn how to use advanced functions and tools to analyze and interpret data. Master PivotTables, VLOOKUP, and data validation, and create impactful charts and graphs to visualize trends and insights effectively.</p>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>AUTOMATIC TASKS WITH MACROS :</span> Discover how to streamline repetitive tasks using Excel macros. Learn to record, edit, and run macros to automate complex processes and save valuable time.</p>

              <h3 className="text-xl font-semibold mb-2"><span className='text-green-500 font-bold'>Why This Course?</span></h3>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>HANDS-ON PRACTICE:</span> Apply your skills through real-world scenarios and interactive exercises. Build practical, business-oriented spreadsheets and reports to reinforce your learning.</p>


              <p className="text-gray-700"><span className='text-blue-500 font-bold'>EXPERT INSTRUCTION :</span>  Learn from experienced instructors who provide practical insights and tips to enhance your Excel proficiency. Benefit from industry best practices and practical applications.</p>

              <p className="text-gray-700"><span className='text-blue-500 font-bold'>FLEXIBLE LEARNING :</span>  Study at your own pace with 24/7 access to course materials. Whether you're a beginner or looking to refine your skills, this course adapts to your learning needs.</p>
            </div>
          </div>
          <a href='/'>
        <button className='btn btn-success mt-3'>Back-To-Home_page</button>
      </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Blogs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Certification;