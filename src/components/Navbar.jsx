import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const menuItems = [
    { title: 'Anasayfa', to: 'home' },
    { title: 'Hakkımda', to: 'about' },
    { title: 'Yetenekler', to: 'skills' },
    { title: 'Projeler', to: 'work' },
    { title: 'İletişim', to: 'contact' },
  ];

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]/90 backdrop-blur-sm text-gray-300 z-50'>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-2xl font-bold text-[#00df9a]'>BC</h1>
      </motion.div>

      {/* Desktop Menu */}
      <motion.ul 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='hidden md:flex gap-x-8'
      >
        {menuItems.map(({ title, to }) => (
          <li key={to}>
            <Link 
              to={to} 
              smooth={true} 
              duration={500}
              className='relative group cursor-pointer'
            >
              {title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00df9a] transition-all group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </motion.ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          >
            <ul className='flex flex-col items-center gap-y-8'>
              {menuItems.map(({ title, to }) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className='text-4xl'
                >
                  <Link
                    onClick={handleClick}
                    to={to}
                    smooth={true}
                    duration={500}
                    className='relative group'
                  >
                    {title}
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#00df9a] transition-all group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar; 