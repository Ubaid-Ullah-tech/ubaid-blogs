import React, { useState } from 'react';
import ubaid1 from '../../assets/images/lrimage.jpg';
import { Button } from '@material-tailwind/react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();
  
   const handleSubmit = (e)=>{
         e.preventDefault();

        try {

          const fromData ={
            name : name,
            email : email,
            password : password,
            phone : phone
          }

         localStorage.setItem("formData" , JSON.stringify(fromData))
         console.log(fromData)
         toast.success("Register Succesfully")
              navigate('/login') 
        } catch (error) {
             toast.error('Error in Register')
        }
   }
   

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   try {
      
  //     if(name === "" || email === " " || password === " " || phone === " " ){
        
  //       toast.error('Please Fill All the Fields');
  //       return;
  //   }

  //   const formData = {
  //     name: name,
  //     email: email,
  //     password: password,
  //     phone: phone
  //   };

  //   // Store form data in localStorage
  //   localStorage.setItem('formData', JSON.stringify(formData));

  //   // Optionally clear the form after submission
  //   setName('');
  //   setEmail('');
  //   setPassowrd('');
    
  //   console.log('Form data saved:', formData);
  //   toast.success("Register Succesfully")
    
  //   navigate('/login')
  //   } 
    
    
  //   catch (error) {
  //       toast.error("Error in Register")
  //   }

    
  // };

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='flex flex-col w-80 border-2 border-gray-300 shadow-lg bg-white p-5 rounded-lg mb-10 mt-5 justify-center items-center gap-3'>
        <h1 className='text-2xl mt-4 bg-blue-gray-200 p-1 mb-3'>Register Page</h1>
        <div className='flex'>
          <img className='w-20 h-20 rounded-full' src={ubaid1} alt="Profile" />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <form onSubmit={handleSubmit} className='w-full'>
            <label className="block w-full mb-2">
              Name:
              <input
                className='w-full px-2 py-1 mt-1 rounded-md border border-gray-300'
                type='text'
                name='name'
                placeholder='Enter your name'
                autoComplete='off'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label className="block w-full mb-2">
              Email:
              <input
                className='w-full px-2 py-1 mt-1 rounded-md border border-gray-300'
                type='email'
                name='email'
                placeholder='Enter your email'
                autoComplete='off'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label className="block w-full mb-2">
              Password:
              <input
                className='w-full px-2 py-1 mt-1 rounded-md border border-gray-300'
                type='password'
                name='password'
                placeholder='Enter your password'
                autoComplete='off'
                value={password}
                onChange={(e) => setPassowrd(e.target.value)}
                required
              />
            </label>

            <label className="block w-full mb-4">
              Phone:
              <input
                className='w-full px-2 py-1 mt-1 rounded-md border border-gray-300'
                type='text'
                name='phone'
                placeholder='Enter your phone number'
                value={phone}
                onChange={(e)=>  setPhone(e.target.value)}
                autoComplete='off'
                required
              />
            </label>

            <div className='flex flex-col justify-center items-center mb-3'>
              <Button type='submit' className='w-full mb-2'>Register</Button>
              <p className='mb-1'>Already have an account? Please login below:</p>
              <a href='/login'>
                <Button className='w-full'>Login</Button>
              </a>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Register;
