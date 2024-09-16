import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardDefault } from './BlogPostCard';
import Data from './Data.json';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";


const Slideer = () => {
    
    const [selectedItem , setSelecetedItem] = useState(null);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
      const handleClick = (item)=>{
        setSelecetedItem(item)
      }
      
  return (
    <div className="slider-container mb-10">

        <h1 className='flex text-2xl text-bold mt-3 justify-center items-center bg-blue-gray-300 p-3'>Services</h1>
      {selectedItem ?(

<div className="px-4 mt-10 flex justify-center items-center min-w-full">
<Card className="mt-8 w-80">
  <CardHeader color="blue-gray" className="relative h-56">
    <img
      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      alt="card-image"
    />
  </CardHeader>
  <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2">
      {selectedItem.title}
    </Typography>
    <Typography>
      {selectedItem.description}
    </Typography>
  </CardBody>
  <CardFooter className="pt-0">
    <Button onClick={()=> handleClick(null)}>Back-To-All-Card</Button>
  </CardFooter>
</Card>
</div>
      ):(

<Slider {...settings}>
        {Data.map((item)=>(
       <div key={item.id}>
       <CardDefault item={item} handleClick={handleClick}/>
       </div>
       ))}
       </Slider> 
      )}
     
       
       
  </div>
  )
}

export default Slideer
