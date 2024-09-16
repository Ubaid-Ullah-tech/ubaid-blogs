import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { IoSearch } from "react-icons/io5";
import Data from './Data.json';  // Import the JSON file

function DialogDefault() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Data);  // Use Data from the JSON file

  const handleOpen = () => setOpen(!open);

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter books based on search term
    const filtered = Data.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        <IoSearch className="w-10 h-4" />
        Search
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Search for a Book</DialogHeader>

        <DialogBody>
          {/* Search Input */}
          <Input 
            label="Search" 
            value={searchTerm}
            onChange={handleSearchChange} 
          />
        </DialogBody>

        <DialogBody>
          {/* Render filtered books */}
          <div>
            {filteredBooks.length > 0 ? (
              <ul>
                {filteredBooks.map((book) => (
                  <li key={book.id}>
                    <strong>{book.title}</strong> by {book.author}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No books found.</p>
            )}
          </div>
        </DialogBody>
        
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default DialogDefault;
