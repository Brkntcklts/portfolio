import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1000px] mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full gap-12"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-left mt-[-50px] md:mt-0"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#00df9a] font-bold text-xl mb-4"
          >
            Merhaba, ben
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] via-[#38ef7d] to-[#00df9a] mb-4 drop-shadow-[0_0_10px_rgba(0,223,154,0.3)]"
          >
            Berkant Çakıltaş
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          >
            Frontend Developer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-300 py-4 max-w-[700px] text-lg mx-auto md:mx-0"
          >
            Web teknolojileri konusunda tutkulu ve yenilikçi çözümler üreten bir yazılım geliştiricisiyim.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-8 py-4 my-4 flex items-center mx-auto md:mx-0 hover:bg-[#00df9a] hover:border-[#00df9a] duration-300 rounded-lg hover:shadow-[0_0_15px_rgba(0,223,154,0.5)]">
                Projelerim
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-[250px] md:w-[300px] flex justify-center items-center"
        >
          <div className="w-full h-[250px] md:h-[300px] rounded-full overflow-hidden border-4 border-[#00df9a] shadow-lg shadow-[#00df9a]/50 hover:shadow-[#00df9a]/75 transition-all duration-300 hover:scale-105">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero; 