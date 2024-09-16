import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
 
import Data from '../components/Data.json';

export function BlogCard() {

  return (

    < div className="mt-10 px-2"> 
    <h1 className="flex justify-center items-center text-2xl font-bold mb-5">All Blogs</h1>
    {Data.map((item)=>(
       
      <Card key={item.id} className="max-w-[24rem] overflow-hidden mb-5 ">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {item.title}
        </Typography>
           <p className="text-2xl">by</p>
        <Typography variant="h4" color="blue-gray">
          {item.author}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
         {item.description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content="Natali Craig">
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          <Tooltip content="Tania Andrew">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
        </div>
        <Typography className="font-normal">January 10</Typography>
      </CardFooter>
    </Card>
    ))}
    </div>
  );
}















// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";

// import Data from '../components/Data.json';

// export function CardDefault() {
 
//   // Example function for handling the button click
//   const handleClick = (item) => {
//     console.log(item); // Handle the 'Read More' action here
//   };

//   return (
//     <>
//       <section className="px-4 py-6">
//         <h1 className="text-2xl font-bold text-center bg-blue-gray-300 p-3">
//           All_Blogs
//         </h1>

//         {/* Responsive Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
//           {Data.map((item) => (
//             <Card key={item.id} className="w-full mt-12">
//               <CardHeader className="relative h-56">
//                 <img
//                   src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//                   alt="card-image"
//                   className="w-full h-full object-cover"
//                 />
//               </CardHeader>
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-2">
//                   {item.title}
//                 </Typography>
//                 <Typography>
//                   {item.description.split(' ').slice(0, 3).join(' ')}...
//                 </Typography>
//               </CardBody>
//               <CardFooter className="pt-0">
//                 <Button
//                   onClick={() => handleClick(item)}
//                   className="bg-blue-500 hover:bg-blue-700 text-white"
//                 >
//                   Read More
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }
