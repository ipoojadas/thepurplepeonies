import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-evenly items-center text-[color:var(--text-primary)] w-full py-6 uppercase'>
        <div>Home</div>
        <div>About</div>
        <div>Portfolio</div>
        <div>Services</div>
        <div>Blog</div>
        <div>Shoplist</div>
        <div>Contact</div>
    </div>
  )
}

export default NavBar