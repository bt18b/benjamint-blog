import React from 'react';
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

const SearchButton: React.FC = () => {
  const handleClick = () => {
    // TODO: add functionality to search for posts
    console.log('search')
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={handleClick} 
      aria-label="Search blog posts"
    >
      <SearchIcon className="h-5 w-5" />
    </Button>
  );
};

export default SearchButton;
