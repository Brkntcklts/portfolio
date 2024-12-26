import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMail, HiX } from 'react-icons/hi'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log(formData)
    setIsOpen(false)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      {/* Sabit İletişim Butonu */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-50"
      >
        <HiMail className="w-8 h-8" />
      </motion.button>

      {/* Açılır Form */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />

            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.3 }}
              className="fixed bottom-8 right-8 w-full max-w-md bg-dark rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-light">İletişime Geç</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <HiX className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
                      İsim
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-primary text-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-primary text-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg bg-primary text-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    Gönder
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Contact 