// src/components/MobileMenu.tsx
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { navBarLinks } from '@/config'

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <VisuallyHidden>
            <SheetTitle>
                Mobile Menu
            </SheetTitle>
        </VisuallyHidden>
        <nav className="flex flex-col space-y-4 ms-8 mt-8">
            {navBarLinks.map((lnk, index) => (
                <a key={index} href={lnk.url} className="text-lg font-semibold">
                    <span className="inline-block font-bold">{lnk.title}</span>
                </a>  
            ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
