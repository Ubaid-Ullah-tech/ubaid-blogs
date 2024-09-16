import React, { useContext } from 'react'

import ubaid1 from '../../assets/images/ubaid1.jpg'
import { Button } from '@material-tailwind/react'

import Data from '../../components/Data.json'
import { MembersTable } from './MemberList'
import { authContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { myContext } from '../../context/Context'

const Dashboard = () => {

  const {mode} = useContext(myContext);
  
  const {logout ,isAuthenticated } = useContext(authContext);
  const navigate = useNavigate();
  
    const handleClick = ()=>{
      try {
        if(isAuthenticated){
          navigate('/create-blog')
        }else{
           navigate('/login')
           toast.error('Please_Login')
        }
      } catch (error) {
          toast.error("error")
      }
    }
  return (
<div>
    <div>
      <div className="left">
           <div className="flex justify-center items-center mt-10">
          <img className='w-32 h-32 rounded-full' 
               src={ubaid1} alt="" />
           </div>
        </div>
        <div className="right flex flex-col justify-center items-center mt-5">
              <p className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Ubaid ullah</p>
              <p className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Software Engineer</p>
               <p className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Total-Blogs 15 </p>
            <div className="button flex gap-5 mt-4">
                
                <Button onClick={handleClick}>Create-Blog</Button>

                 <Button onClick={logout}>Logout</Button>
            </div>
           </div>
    </div>
      <hr className='mt-4 mb-4' />

      <div className='mb-6'>
      <p className='text-2xl flex justify-center items-center my-3 bg-blue-gray-100 p-2'>Users</p>
       <table className='w-full border-2 bg-deep-orange-100 text-center'>
        <thead>
            
            <tr>
                <th className='p-2'>Name</th>
                <th>author</th>
                <th>age</th>
                <th>Status</th>
                
            </tr>
        </thead>
        <tbody>
                {Data.map((item)=>(
                    <tr key={item.id}>
                    <td className='bg-green-300 p-2'>{item.author}</td>
                    <td className='bg-yellow-400'>{item.title}</td>
                    <td className='bg-teal-200'>25</td>
                    <td className='bg-deep-purple-200'>online</td>
                    
                </tr>
                ))}
                
            </tbody>
       </table>
      </div>
      <div>
        <MembersTable/>
      </div>
    </div>
  )
}

export default Dashboard