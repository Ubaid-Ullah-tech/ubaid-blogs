import React from 'react'
import { Button } from '@material-tailwind/react'
import ubaid1 from '../assets/images/ubaid1.jpg'
const Profile = () => {
  return (
    <div>
      <div className="left">
           <div className="flex justify-center items-center mt-10">
          <img className='w-32 h-32 rounded-full' 
               src={ubaid1} alt="" />
           </div>
        </div>
        <div className="right flex flex-col justify-center items-center mt-5">
              <p className='text-2xl font-bold'>Ubaid ullah</p>
              <p className='text-2xl font-bold'>Software Engineer</p>
               <p className='text-2xl font-bold'>Total-Blogs 15 </p>
            <div className="button flex gap-5 mt-4">
                <Button>Create-Blog</Button>
                 <Button>Logout</Button>
            </div>
           </div>
    </div>
  )
}

export default Profile
