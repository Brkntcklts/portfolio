import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1000px] mx-auto px-8 flex flex-col-reverse md:flex-row items-center justify-center h-full"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <p className="text-[#00df9a] font-bold text-xl">Merhaba, ben</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-[#38ef7d]">
            Berkant Çakıltaş
          </h1>
          <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            Frontend Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-[700px] text-lg">
            Web teknolojileri konusunda tutkulu ve yenilikçi çözümler üreten bir yazılım geliştiricisiyim.
          </p>
          <div>
            <Link to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00df9a] hover:border-[#00df9a] duration-300 rounded-lg">
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
          className="flex-1 mb-8 md:mb-0 md:ml-8"
        >
          <div className="w-[250px] h-[250px] mx-auto rounded-full overflow-hidden border-4 border-[#00df9a] shadow-lg shadow-[#00df9a]/50">
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