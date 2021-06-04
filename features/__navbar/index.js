import Button from 'components/Button'
import Logo from 'components/Logo'
import SearchBox from 'features/__navbar/SearchBox'
import { useState } from 'react'

export default function Navbar({ ...props }) {
  return (
    <header className="flex justify-between items-center w-full px-4 py-2 border-b border-gray-300 relative z-10">
      <Logo />
      <SearchBox />
      <Button onClick={() => console.log('sign out')}>Выйти</Button>
    </header>
  )
}
