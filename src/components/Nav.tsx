import React from 'react'
import Logo from '../../public/images/group-462.svg'
import { ModeToggle } from './ui/toggle-mode'

const Nav = () => {
  return (
    <header>
    <nav className='flex h-16 py-2 px-20  border-b-2 items-center w-full'>
        <ul className='flex items-center justify-between w-full'>
            <li><Logo /></li>
            <li>About Vouch</li>
            <ModeToggle />
        </ul>
    </nav>
</header>
  )
}

export default Nav