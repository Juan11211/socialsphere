"use client" 

import React from 'react'
import { sidebarLinks } from '@constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

function BottomBar() {
  // reads the current url user is on
  const pathname = usePathname();

  // map through array  z-20 w-full bg-dark-1 px-6 py-3 items-center justify-between md:hidden
  return (
    <div className="sticky flex bottom-0 z-20 w-full px-6 py-3 items-center justify-between md:hidden">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link href={link.route} key={link.label} 
            className={`flex justify-start gap-4 rounded-lg py-2 px-4 ${isActive && "bg-purple-1"}`}>
            {link.icon} <p className='text-small-medium max-sm:hidden'>{link.label.split(/\s+/)[0]}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default BottomBar;
