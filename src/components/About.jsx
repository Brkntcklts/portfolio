import { motion } from 'framer-motion'
import { HiCode, HiColorSwatch, HiLightningBolt } from 'react-icons/hi'

const About = () => {
  const features = [
    {
      icon: <HiCode className="w-8 h-8" />,
      title: "Clean Code",
      description: "Modern ve okunabilir kod yazarak sürdürülebilir projeler geliştiriyorum."
    },
    {
      icon: <HiColorSwatch className="w-8 h-8" />,
      title: "Modern Tasarım",
      description: "En son tasarım trendlerini takip ederek etkileyici arayüzler oluşturuyorum."
    },
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: "Yüksek Performans",
      description: "Optimizasyon teknikleriyle hızlı ve performanslı uygulamalar geliştiriyorum."
    }
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
            Neler Yapıyorum?
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Modern web teknolojileri ile kullanıcı dostu ve etkileyici web uygulamaları geliştiriyorum.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gradient-start to-gradient-end opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
              <div className="relative p-8 rounded-xl bg-dark hover:shadow-xl transition-shadow duration-300">
                <div className="text-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-light mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 