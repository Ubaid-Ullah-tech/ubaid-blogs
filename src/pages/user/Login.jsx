import React, {  useContext, useState } from 'react'
import ubaid1 from '../../assets/images/lrimage.jpg';
import { Button } from '@material-tailwind/react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthContext';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    

  const navigate = useNavigate();
   const {checkLogin} = useContext(authContext)
  const handleSubmit = (e)=>{
    e.preventDefault();
    
     const isValid = checkLogin(email , password)
    
     if(isValid){
        toast.success("Login Succesfully")
        navigate('/')
    }else{
        toast.error("Wrong Email or Password")
    }

}




    return (
        <div className='flex justify-center items-center mt-10 mb-10'>
            <div className='flex flex-col w-80 border-2 justify-center items-center gap-1'>
                <h1 className='text-2xl mt-6 bg-blue-gray-300 px-2 py-1'>Login Page</h1>
                <div>
                    <img className='w-20 h-20 rounded-full' src={ubaid1} alt="Profile" />
                </div>
                <div className='flex flex-col  mb-4'>
                    <form onSubmit={handleSubmit}>
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

                        <div className='flex flex-col justify-center items-center mt-4'>
                            <Button type='submit'>Login</Button>
                        </div>
                    </form>
                </div>
                <p className='text-center'>If you do not have an account, please register:</p>
                
                <a className='mb-2' href='/admin-login'>
                    <Button>Register</Button>
                </a>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Login;
