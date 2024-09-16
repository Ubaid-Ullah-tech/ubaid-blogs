// src/components/BlogForm.jsx
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../context/AuthContext';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

   const {isAuthenticated} = useContext(authContext)

    const handleClick = ()=>{
        if(isAuthenticated){
          navigate('/create-blog')
        }else{
          navigate('/login')
        }
    }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author && description && image) {
      // Here you would typically send the data to your backend
      // For demonstration, we'll just simulate success
      toast.success('Blog created successfully!');
      navigate('/allblogs'); // Redirect to the All Blogs page
    } else {
      toast.error('Please fill in all fields!');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a URL for the selected file
    }
  };

  return (
    <>
    <h1 className='flex justify-center items-center mt-10 mb-10 text-2xl'>Create_Blogs_Here</h1>
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <div style={{ marginBottom: '10px' }}>
        Title:
        <input
          name='title'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        {/* <label>Author:</label> */}
        Author:
        <input
        name='author'
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
         Description:
        <textarea
        name='textarea'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', minHeight: '100px' }}
        ></textarea>
      </div>
      <div style={{ marginBottom: '10px' }}>
        Choose Image:
        <input
        name='file'
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          required
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        {image && (
          <div style={{ marginTop: '10px' }}>
            <img src={image} alt="Selected preview" style={{ maxWidth: '100%', borderRadius: '4px' }} />
          </div>
        )}
      </div>
      <button onClick={handleClick}
        type="submit"
        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Add Blog
      </button>
    </form>
    </>
  );
};

export default BlogForm;
