// src/components/MobileMenu.tsx
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SheetTitle } from "@/components/ui/sheet";  // Import SheetTitle
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        {/* Add a SheetTitle */}
        <VisuallyHidden>
            <SheetTitle>
                Mobile Menu
            </SheetTitle>
        </VisuallyHidden>
        <nav className="flex flex-col space-y-4 ms-8 mt-8">
          <a href="/" className="text-lg font-semibold">Home</a>
          <a
            href="https://github.com/AREA44/astro-shadcn-ui-template"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-semibold"
          >
            GitHub
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
