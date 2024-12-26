import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Arkaplan animasyonlu daireler */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-radial from-gradient-start/20 to-transparent rounded-full animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-radial from-gradient-end/20 to-transparent rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Ana içerik */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profil Resmi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-lg">
              <img
                src="/profile.jpg"
                alt="Profil"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent text-lg font-semibold tracking-wide uppercase animate-glow">
              Merhaba, Ben
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient-start to-gradient-end"
          >
            Berkant Çakıltaş
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mt-6 text-xl text-muted max-w-3xl mx-auto">
              Full Stack Developer & UI/UX Designer olarak modern ve kullanıcı dostu web uygulamaları geliştiriyorum.
              Yaratıcı çözümler ve etkileyici kullanıcı deneyimleri sunuyorum.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex justify-center gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-gradient-start to-gradient-end text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              Projelerimi Gör
            </button>
            <button className="px-8 py-3 border-2 border-gradient-start text-gradient-start font-medium rounded-lg hover:bg-gradient-start hover:text-white transition-all duration-300 transform hover:scale-105">
              İletişime Geç
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 flex justify-center space-x-6"
          >
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-muted hover:text-accent transition-colors duration-300 transform hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Aşağı kaydırma g��stergesi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <HiArrowDown className="text-accent text-3xl animate-bounce" />
      </motion.div>
    </section>
  )
}

export default Hero 