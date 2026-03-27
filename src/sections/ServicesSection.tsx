import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'AI Receptionist',
    description: 'Intelligent voice systems that answer calls 24/7 with natural human-like conversations. Handle inquiries, bookings, and support seamlessly.',
    image: '/images/alina.jpg',
    badge: 'Voice AI',
  },
  {
    id: 2,
    title: 'AI Chatbot',
    description: 'Smart chatbots that engage visitors instantly, answer questions, qualify leads, and guide customers through their journey.',
    image: '/images/ai-chatbot.jpg',
    badge: 'Conversational AI',
  },
  {
    id: 3,
    title: 'AI-Based Websites',
    description: 'Websites engineered for conversion with smart automation, personalization, and performance analytics built in.',
    image: '/images/ai-website.jpg',
    badge: 'Web Development',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 reveal"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Settings className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Solutions Built for the </span>
            <span className="gradient-text">Future</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive AI and technology services designed to transform your business 
            operations and drive sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to="/services" className="block group">
                <div className="glass-card rounded-3xl overflow-hidden card-hover h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-purple-500/30 text-white hover:bg-purple-500/10 hover:border-purple-500/50"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
