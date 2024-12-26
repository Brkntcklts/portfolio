import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div name="home" className="relative w-full min-h-screen bg-black pt-20 sm:pt-0">
      {/* Metalik Arka Plan Efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-80"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>

      <motion.div 
        style={{ opacity }}
        className="relative max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4 gap-8 sm:gap-12 py-8 sm:py-0"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-emerald-400 font-bold text-lg sm:text-xl mb-3 sm:mb-4"
          >
            Merhaba, ben
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4"
          >
            <span className="animate-pulse text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              Berkant Çakıltaş
            </span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 mb-4 sm:mb-6"
          >
            Frontend Developer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-zinc-400 py-2 sm:py-4 max-w-[700px] text-base sm:text-lg mx-auto lg:mx-0"
          >
            Web teknolojileri konusunda tutkulu ve yenilikçi çözümler üreten bir yazılım geliştiricisiyim.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link to="work" smooth={true} duration={500}>
              <button className="text-zinc-200 group border border-emerald-400/50 px-6 sm:px-8 py-3 sm:py-4 my-2 sm:my-4 flex items-center mx-auto lg:mx-0 hover:bg-emerald-400/10 duration-300 rounded-sm backdrop-blur-sm hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                Projelerim
                <span className="group-hover:translate-x-2 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[200px] sm:w-[240px] lg:w-[320px] relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-300"></div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover transform group-hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicators */}
      <Link to="about" smooth={true} duration={500} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden sm:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-emerald-400 hover:text-emerald-300"
        >
          <FaChevronDown size={30} />
        </motion.div>
      </Link>

      <Link to="home" smooth={true} duration={500} className="fixed bottom-8 right-8 cursor-pointer z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-zinc-900/80 p-3 rounded-full backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/50 text-emerald-400 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] transition-all duration-300"
        >
          <FaChevronUp size={20} />
        </motion.div>
      </Link>
    </div>
  );
};

export default Hero; 