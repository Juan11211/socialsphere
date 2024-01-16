import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { sidebarLinks } from '@constants'
import { SignedIn, SignOutButton, UserButton, useUser } from '@clerk/nextjs'
import { Logout } from '@mui/icons-material'

function LeftSideBar() {

  const { user, isLoaded } = useUser(); 
  console.log(user)
  return (
    <div className='h-screen left-0 top-0 sticky overflow-auto px-10 flex flex-col gap-6 max-md:hidden custom-scrollbar bg-white-1'>
      <Link href='/'>
        <Image src='/sociallogo.png' alt='logo' width={150} height={150} />
      </Link>
      
      <div className='flex flex-col gap-2'>
        
        <div className='flex flex-col gap-2 items-center'>
          <Link href='/'>
            <Image src='/avatar.jpg' alt="avatar" height={50} width={50} className='rounded-full' />
          </Link>
          <p className='text-small-bold'>Juan A</p>
        </div>

        {/* friends */}
        <div className='flex justify-between'>
          <div className='flex flex-col items-center'>
            <p className='text-base-bold'>1</p>
            <p className='text-tiny-medium'>Posts</p>
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-base-bold'>1</p>
            <p className='text-tiny-medium'>Followers</p>
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-base-bold'>1</p>
            <p className='text-tiny-medium'>Following</p>
          </div>
        </div>

        <hr />

        <Menu />

        <hr />

        <div className='flex gap-3 items-center'>
          <UserButton />
          <p className='text-body-bold'>Manage Account</p>
        </div>

 
          <SignedIn>
          <SignOutButton>
            <div className='flex gap-4 items-center mt-3'>
              
            </div>
          </SignOutButton>
  
          
        </SignedIn>
     
        
      </div>
    </div>
  )
}

export default LeftSideBar
