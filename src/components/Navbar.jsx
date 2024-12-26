import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
      <div>
        <h1 className='text-2xl font-bold text-[#00df9a]'>BC.</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        <li className='hover:text-[#00df9a] duration-300'>
          <Link to='home' smooth={true} duration={500} className='cursor-pointer px-4'>
            Ana Sayfa
          </Link>
        </li>
        <li className='hover:text-[#00df9a] duration-300'>
          <Link to='about' smooth={true} duration={500} className='cursor-pointer px-4'>
            Hakkımda
          </Link>
        </li>
        <li className='hover:text-[#00df9a] duration-300'>
          <Link to='skills' smooth={true} duration={500} className='cursor-pointer px-4'>
            Yetenekler
          </Link>
        </li>
        <li className='hover:text-[#00df9a] duration-300'>
          <Link to='work' smooth={true} duration={500} className='cursor-pointer px-4'>
            Projeler
          </Link>
        </li>
        <li className='hover:text-[#00df9a] duration-300'>
          <Link to='contact' smooth={true} duration={500} className='cursor-pointer px-4'>
            İletişim
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:text-[#00df9a] duration-300'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Ana Sayfa
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#00df9a] duration-300'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Hakkımda
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#00df9a] duration-300'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Yetenekler
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#00df9a] duration-300'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Projeler
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#00df9a] duration-300'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            İletişim
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar 