import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub size={20} />,
      href: '#'
    },
    {
      id: 2,
      icon: <FaLinkedin size={20} />,
      href: '#'
    },
    {
      id: 3,
      icon: <FaTwitter size={20} />,
      href: '#'
    }
  ]

  return (
    <footer className="bg-tertiary py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-lightestText text-sm mb-4 md:mb-0">
            © 2024 [İsminiz]. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(({ id, icon, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightText hover:text-secondary transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 