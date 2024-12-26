import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center h-full'>
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col justify-center'
        >
          <p className='text-[#00df9a]'>Merhaba, ben</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Berkant Çakıltaş
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            Frontend Developer
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            Modern ve kullanıcı dostu web uygulamaları geliştiriyorum.
          </p>
          <div>
            <Link to="work" smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00df9a] hover:border-[#00df9a] duration-300'>
                Projelerim
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='md:ml-8 mt-8 md:mt-0 flex justify-center items-center'
        >
          <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-[#00df9a] to-[#88efbb] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative'>
              <img 
                src='/profile.jpg' 
                alt='Profile' 
                className='rounded-full w-64 h-64 object-cover border-4 border-[#00df9a] shadow-lg shadow-[#00df9a]/50 hover:shadow-[#00df9a]/75 transition duration-300'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 