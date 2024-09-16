import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardDefault({item , handleClick}) {
     
 
   const des = item.description.split(' ').slice(0 , 3).join(' ')+ '...';
  
  <h1 className='flex text-2xl text-bold  justify-center items-center bg-blue-gray-300 p-3'>Services</h1>
  return (
    <>  
    <section>
  

     <div className="px-11 sm:px-2 md:px-8 lg:px-11 mt-10">
    <Card className="mt-4 w-80">
      <CardHeader color="blue-gray" className="relative h-65">
        <img className=""
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {item.title}
        </Typography>
        <Typography>
          {des}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={()=> handleClick(item)}>Read More</Button>
      </CardFooter>
    </Card>
    </div>
    </section>
    </>

  );
}