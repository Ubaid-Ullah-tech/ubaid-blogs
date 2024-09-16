import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function FooterWithLogo() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVj-T08Y93KX4OTxjcN-GdI1cUxQwupNr1w&s"
          alt="logo-ct"
          className="w-10"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              to="/"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <Typography color="blue-gray">
                Home
              </Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <Typography color="blue-gray">
                Contact
              </Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <Typography color="blue-gray">
                Dashboard
              </Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <Typography color="blue-gray">
                About Us
              </Typography>
            </Link>
          </li>

          <li>
            <Link
              to="/certificate"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <Typography color="blue-gray">
              My-Certificates
              </Typography>
            </Link>
          </li>

        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Ubaid_Blogs_Website
      </Typography>
    </footer>
  );
}
