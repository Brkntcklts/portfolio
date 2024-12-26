import { motion } from 'framer-motion'
import { DiReact, DiJavascript1, DiHtml5, DiCss3, DiNodejs, DiGit } from 'react-icons/di'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills = () => {
  const skills = [
    {
      name: 'React',
      icon: <DiReact className="w-16 h-16" />,
      color: '#61DAFB',
      description: 'Modern ve interaktif kullanıcı arayüzleri'
    },
    {
      name: 'JavaScript',
      icon: <DiJavascript1 className="w-16 h-16" />,
      color: '#F7DF1E',
      description: 'Dinamik web uygulamaları'
    },
    {
      name: 'HTML5',
      icon: <DiHtml5 className="w-16 h-16" />,
      color: '#E34F26',
      description: 'Semantik ve erişilebilir markup'
    },
    {
      name: 'CSS3',
      icon: <DiCss3 className="w-16 h-16" />,
      color: '#1572B6',
      description: 'Modern ve responsive tasarımlar'
    },
    {
      name: 'TailwindCSS',
      icon: <SiTailwindcss className="w-16 h-16" />,
      color: '#38B2AC',
      description: 'Hızlı ve özelleştirilebilir stil'
    },
    {
      name: 'Node.js',
      icon: <DiNodejs className="w-16 h-16" />,
      color: '#339933',
      description: 'Backend geliştirme ve API'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="w-16 h-16" />,
      color: '#3178C6',
      description: 'Tip güvenli kod geliştirme'
    },
    {
      name: 'Git',
      icon: <DiGit className="w-16 h-16" />,
      color: '#F05032',
      description: 'Versiyon kontrolü'
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
            Yeteneklerim
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Kullandığım teknolojiler ve uzmanlık alanlarım
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-dark p-6 rounded-xl overflow-hidden"
            >
              {/* Arka plan efekti */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />
              
              {/* İkon */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex justify-center mb-4"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </motion.div>

              {/* İsim ve Açıklama */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-light mb-2">{skill.name}</h3>
                <p className="text-sm text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 