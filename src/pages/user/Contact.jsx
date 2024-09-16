import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container p-10 pt-24">
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <p className="mb-6 text-lg text-gray-700">
        We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, 
        feel free to reach out to us. We're here to help and look forward to connecting with you.
      </p>
      <div className="contact-info">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-lg text-gray-800">+92 3493673578 </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-lg text-gray-800">ubaidullah.uoh@gmail.com</p>
        </div>
      </div>
      <a href='/'>
        <button className='btn btn-success mt-3'>Back-To-Home_page</button>
      </a>
    </div>
  );
};

export default Contact;
