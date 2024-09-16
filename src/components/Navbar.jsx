import React, { useContext } from "react";
import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
    Collapse
} from "@material-tailwind/react";
import ubaid from '../assets/images/ubaid.webp'
import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    MoonIcon,
    SunIcon

} from "@heroicons/react/24/solid"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { myContext } from "../context/Context";
import DialogDefault from "./SearchDialog";


// profile menu component
const profileMenuItems = [
  
    {
      label: "My Profile",
      icon: UserCircleIcon,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
  
  ];
   
  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
    const closeMenu = () => setIsMenuOpen(false);
   
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full  py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src={ubaid}
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }
  
 
function NavList() {
  return (
    <>
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="/" className="flex items-center hover:text-blue-500 transition-colors">
         Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="/create-blog" className="flex items-center hover:text-blue-500 transition-colors">
          Create-Blogs
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="/allblogs" className="flex items-center hover:text-blue-500 transition-colors">
         All Blogs
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="/certificate" className="flex items-center hover:text-blue-500 transition-colors">
         My-Certificates
        </a>
      </Typography>



      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="/dashboard" className="flex items-center hover:text-blue-500 transition-colors">
        Dashboard
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="admin-login" className="flex items-center hover:text-blue-500 transition-colors">
          Login
        </a>
      </Typography>
      
         <Typography>
          <DialogDefault/>
         </Typography>
    </ul>
    </>
  );
}


export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
  const {mode  , toggleMode} = useContext(myContext);
  
   // const textColor  = mode === "dark" ? 'text-white' : 'text-black';
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-2xl px-6 py-3 bg-blue-gray-600 top-0">
      <div className={`flex items-center justify-between text-blue-gray-900`}>
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-auto cursor-pointer py-1.5"
        >
          Ubaid_Blogs
        </Typography>



        <div className="lg:block">
         <ProfileMenu/>
        </div>



        <div className="hidden lg:block">
          <NavList />
        </div>
         
         {/* toogle mode  */}
        <Button variant="text" onClick={toggleMode} className="ml-4">
           {mode === 'light' ? (
            <MoonIcon className="h-6 w-6 text-gray-800"/>
           ):(
            <SunIcon className="h-6 w-6 text-gray-800"/>
           )}
        </Button>
       
       
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}