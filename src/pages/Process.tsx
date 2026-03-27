import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Headphones, Check, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We analyze your requirements, business goals, and current challenges to understand exactly what you need.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We recommend the optimal AI solution tailored to your needs, timeline, and budget constraints.',
    },
    {
      number: '03',
      title: 'Develop',
      description: 'We build and implement your solution with precision, keeping you informed throughout the process.',
    },
    {
      number: '04',
      title: 'Support',
      description: 'We provide ongoing support, monitoring, and continuous improvement to ensure lasting success.',
    },
  ];

  const processDetails = [
    {
      icon: Search,
      title: 'Discovery Phase',
      items: [
        'In-depth business analysis',
        'Stakeholder interviews',
        'Current system audit',
        'Goal definition & KPI setting',
        'Technical requirements gathering',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Strategy Phase',
      items: [
        'Solution architecture design',
        'Technology stack selection',
        'Project roadmap creation',
        'Resource allocation planning',
        'Risk assessment & mitigation',
      ],
    },
    {
      icon: Code,
      title: 'Development Phase',
      items: [
        'Agile development sprints',
        'Regular progress updates',
        'Quality assurance testing',
        'User acceptance testing',
        'Deployment & launch',
      ],
    },
    {
      icon: Headphones,
      title: 'Support Phase',
      items: [
        '24/7 system monitoring',
        'Performance optimization',
        'Regular maintenance updates',
        'Feature enhancements',
        'Dedicated support team',
      ],
    },
  ];

  const timeline = [
    {
      week: 'Week 1',
      title: 'Kickoff & Discovery',
      description: 'Initial meetings, requirements gathering, and project setup',
    },
    {
      week: 'Week 2-3',
      title: 'Design & Planning',
      description: 'Architecture design, UI/UX mockups, and detailed planning',
    },
    {
      week: 'Week 4-6',
      title: 'Development',
      description: 'Core development, AI model training, and integration',
    },
    {
      week: 'Week 7',
      title: 'Testing & QA',
      description: 'Comprehensive testing, bug fixes, and optimization',
    },
    {
      week: 'Week 8',
      title: 'Launch & Handover',
      description: 'Production deployment, training, and documentation',
    },
  ];

  return (
    <div className="relative pt-24">
      {/* Page Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">How We </span>
              <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl text-gray-400">
              Our transparent, proven 4-step process ensures every project is delivered 
              on time, within budget, and exceeds expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Steps Overview */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-background shadow-xl shadow-purple-500/30"
                  >
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Details Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-20">
            {processDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <detail.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{detail.title}</h3>
                </div>
                <ul className="space-y-3">
                  {detail.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Typical Project </span>
              <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-gray-400">
              Most projects are completed within 4-8 weeks
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.week}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="glass-card rounded-2xl p-6 inline-block">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white mb-3">
                        {item.week}
                      </span>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-4 border-background shadow-lg shadow-purple-500/30 z-10" />
                  
                  {/* Empty Space */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600" />
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            
            <div className="relative z-10 px-8 py-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Let's begin the journey to transform your business with AI solutions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-purple-700 hover:bg-gray-100 transition-all duration-300"
              >
                <Rocket className="w-5 h-5" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Process;
