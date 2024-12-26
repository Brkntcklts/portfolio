import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'web', name: 'Web Uygulamaları' },
    { id: 'mobile', name: 'Mobil' },
    { id: 'design', name: 'UI/UX' }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Platformu',
      description: 'Modern ve kullanıcı dostu bir e-ticaret platformu. React ve Node.js ile geliştirildi.',
      tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
      category: 'web',
      image: '/project1.jpg',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Sosyal Medya Uygulaması',
      description: 'Gerçek zamanlı mesajlaşma ve paylaşım özellikleri olan sosyal platform.',
      tech: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile',
      image: '/project2.jpg',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'UI Kit Tasarımı',
      description: 'Modern ve yeniden kullanılabilir UI bileşenleri koleksiyonu.',
      tech: ['Figma', 'TailwindCSS', 'React'],
      category: 'design',
      image: '/project3.jpg',
      github: '#',
      demo: '#',
      featured: false
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
            Projelerim
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Geliştirdiğim bazı özel projeler
          </p>

          {/* Kategori Filtreleri */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category.id 
                    ? 'bg-gradient-to-r from-gradient-start to-gradient-end text-white' 
                    : 'bg-dark text-muted hover:text-light'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-dark rounded-xl overflow-hidden"
            >
              {/* Proje Görseli */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-start/20 group-hover:bg-gradient-start/40 transition-colors duration-300" />
                <div className="h-full bg-primary" /> {/* Görsel placeholder */}
              </div>

              {/* Proje Detayları */}
              <div className="p-6">
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-4">
                    Öne Çıkan
                  </span>
                )}
                
                <h3 className="text-xl font-bold text-light mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-primary/50 text-accent rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 