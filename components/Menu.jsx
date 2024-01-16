"use client" 

import React from 'react'
import { sidebarLinks } from '@constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

function Menu() {
  // reads the current url user is on
  const pathname = usePathname();

  // map through array
  return (
    <di className="flex flex-col gap-2">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link href={link.route} key={link.label} className={`flex justify-start gap-4 rounded-lg px-2 py-4 ${isActive && "bg-purple-1"}`}>
            {link.icon} <p>{link.label}</p>
          </Link>
        );
      })}
    </di>
  );
}

export default Menu;
