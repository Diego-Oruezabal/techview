"use client"

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { links } from "../Navbar.data";

export function NavbarMobile() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex md:hidden">
      <Button className="text-black" variant="outline"
      onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}

      </Button>

        {isOpen && (
            <div className="absolute top-16 right-5 bg-purple-500/30 backdrop-blur-md rounded-lg shadow-lg border border-purple-400/20 flex flex-col items-center p-4 space-y-2">
                {links.map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} >
                        {link.name}
                    </Link>
                ))}
            </div>
        )}

    </div>
  )
}
