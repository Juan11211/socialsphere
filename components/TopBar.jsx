"use client"
import { SignedIn, SignOutButton } from '@clerk/nextjs'
import { Add, Logout, Search } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'

function TopBar() {

  const { search, setSearch } = useState("")

  function handleChange(){

  }

  // top bar + small screen 
  return (
    <div className='flex justify-between items-center mt-6'>
      <div className='relative'>
        <input type="text" className="search-bar" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)}/>
          <Search className='search-icon' />
      </div>

      <button className='create-post-btn' onClick={() => router.push("/create-post")}>
        <Add />  
        <p>Create Post</p>
      </button>

      <div className="flex gap-4 md:hidden">
        {/* using sign in, is like determining if the user is in the session or not */}
        <SignedIn>
          <SignOutButton>
            <div className='flex gap-2 items-center mt-3 md:hidden'>
              <Logout sx={{color: "black", fontSize: "32px"}}/>
            </div>
          </SignOutButton>
        </SignedIn>
    
         <Link href="/">
        <Image src='/avatar.jpg' alt="avatar" height={50} width={50} className='rounded-full' />
        </Link>
      </div>
     


    </div>
  )
}

export default TopBar
