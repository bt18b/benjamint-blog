import React from 'react';
import { Button } from "@/components/ui/button";
import { Rss } from "lucide-react";

const RssFeedButton: React.FC = () => {
  const handleClick = () => {
    // TODO: add functionality to RssFeed for posts
    console.log('RssFeed')
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={handleClick} 
      aria-label="RssFeed blog posts"
    >
      <Rss className="h-5 w-5" />
    </Button>
  );
};

export default RssFeedButton;
