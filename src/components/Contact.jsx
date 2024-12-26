import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div name="contact">
      {/* Contact Button */}
      <button
        onClick={toggleModal}
        className="fixed bottom-8 left-8 z-50 bg-zinc-900/80 px-6 py-3 rounded-sm backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/50 text-emerald-400 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] transition-all duration-300"
      >
        İletişim
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] z-50 p-4"
            >
              <div className="relative bg-zinc-900 border border-emerald-400/20 rounded-sm shadow-[0_0_30px_rgba(52,211,153,0.1)] p-8">
                {/* Close Button */}
                <button
                  onClick={toggleModal}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  <FaTimes size={24} />
                </button>

                {/* Form Content */}
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 mb-4">
                    İletişim
                  </h2>
                  <p className="text-zinc-400">
                    Aşağıdaki formu doldurarak veya{' '}
                    <a
                      href="mailto:berkantcakiltas@gmail.com"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      berkantcakiltas@gmail.com
                    </a>
                    {' '}adresinden bana ulaşabilirsiniz.
                  </p>
                </div>

                <form
                  action="https://getform.io/f/a1c5d5e2-3f3f-4c2a-9c0f-5c5c5c5c5c5c"
                  method="POST"
                  className="flex flex-col gap-4"
                >
                  <input
                    type="text"
                    placeholder="İsim"
                    name="name"
                    required
                    className="bg-zinc-800 border border-zinc-700 focus:border-emerald-400/50 text-zinc-200 p-3 rounded-sm outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="bg-zinc-800 border border-zinc-700 focus:border-emerald-400/50 text-zinc-200 p-3 rounded-sm outline-none transition-colors"
                  />
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Mesajınız"
                    required
                    className="bg-zinc-800 border border-zinc-700 focus:border-emerald-400/50 text-zinc-200 p-3 rounded-sm outline-none transition-colors resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="text-zinc-200 border border-emerald-400/50 px-8 py-4 hover:bg-emerald-400/10 duration-300 rounded-sm backdrop-blur-sm hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] mt-4"
                  >
                    Gönder
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact; 