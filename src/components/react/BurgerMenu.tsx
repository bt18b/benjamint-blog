import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetTitle, SheetContent, SheetClose } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Hamburger Button */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <HamburgerMenuIcon className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      {/* Sidebar Navigation */}
      <SheetContent side="left" className="w-64 bg-white dark:bg-gray-900 p-6 shadow-lg">
        <VisuallyHidden>
          <SheetTitle>Menu</SheetTitle>
        </VisuallyHidden>

        <nav className="flex flex-col space-y-4">
          <SheetClose asChild>
            <a href="/" className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary">
              Home
            </a>
          </SheetClose>

          <SheetClose asChild>
            <a href="/about" className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary">
              About
            </a>
          </SheetClose>

          <SheetClose asChild>
            <a href="/services" className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary">
              Services
            </a>
          </SheetClose>

          <SheetClose asChild>
            <a href="/contact" className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary">
              Contact
            </a>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default BurgerMenu;
