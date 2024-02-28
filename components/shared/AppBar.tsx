import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'

const AppBar = () => {
  return (
    <header className='w-full'>
      <nav className='w-full flex flex-row items-center justify-between'>
        <div>Logo</div>
        <div>Name</div>
        <div className='flex flex-row items-center justify-center gap-2'>
          Socials
          <ConnectButton />
        </div>
      </nav>
    </header>
  )
}

export default AppBar