import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from '../pages/admin/Dashboard'

// import Blog from '../pages/Blog'
import Nopage from '../pages/Nopage'
import { BlogCard } from '../pages/AllBlogs'
import CreateBlog from '../pages/admin/CreateBlog'
import Register from '../pages/user/Register'
import Login from '../pages/user/Login'
import Contact from '../pages/user/Contact'
import About from '../pages/user/About'
import Certificate from '../pages/user/Certification'
// import Profile from '../pages/admin/Profile'

const Routing = () => {
  return (
  

    <>
     <Routes>
       <Route path='/' element={<Layout/>}>
       <Route path='/dashboard' element={<Dashboard/>}/>
       {/* <Route path='/blogs' element={<Blog/>}/> */}
       <Route path='/allblogs' element={<BlogCard/>}/>
       <Route path='/create-blog' element={<CreateBlog/>}/>
       <Route path='/admin-login' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/certificate' element={<Certificate/>}/>
       {/* <Route path='/profile' element={<Profile/>}/> */}
       <Route path='/*' element={<Nopage/>}/>
     </Route>
        </Routes> 
    </>
  )
}

export default Routing
