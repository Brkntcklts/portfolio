import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1000px] mx-auto px-8 flex flex-col-reverse md:flex-row items-center justify-center h-full gap-8"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-[#00df9a] font-bold text-xl mb-2">Merhaba, ben</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] via-[#38ef7d] to-[#00df9a] mb-4">
            Berkant Çakıltaş
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 mb-4">
            Frontend Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-[700px] text-lg mx-auto md:mx-0">
            Web teknolojileri konusunda tutkulu ve yenilikçi çözümler üreten bir yazılım geliştiricisiyim.
          </p>
          <div>
            <Link to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-8 py-4 my-4 flex items-center mx-auto md:mx-0 hover:bg-[#00df9a] hover:border-[#00df9a] duration-300 rounded-lg">
                Projelerim
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-[#00df9a] shadow-lg shadow-[#00df9a]/50 hover:shadow-[#00df9a]/75 transition-shadow duration-300">
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