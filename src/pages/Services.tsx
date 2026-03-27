import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'AI Receptionist',
      description: 'Intelligent voice systems that handle customer calls 24/7 with natural, human-like conversations. Never miss a call again.',
      image: '/images/alina.jpg',
      badge: 'Voice AI',
      features: [
        '24/7 automated call answering',
        'Natural voice interaction',
        'Appointment scheduling',
        'Multi-language support',
        'Call routing & transfer',
      ],
    },
    {
      id: 2,
      title: 'AI Chatbot',
      description: 'Smart chatbots that engage website visitors instantly, answer questions, qualify leads, and guide customers through their journey.',
      image: '/images/ai-chatbot.jpg',
      badge: 'Conversational AI',
      features: [
        'Instant response to queries',
        'Lead qualification & capture',
        'Smart conversation routing',
        'Analytics dashboard',
        'Custom training on your data',
      ],
    },
    {
      id: 3,
      title: 'AI-Based Websites',
      description: 'Websites engineered for conversion with smart automation, personalization, and performance analytics built in from day one.',
      image: '/images/ai-website.jpg',
      badge: 'Web Development',
      features: [
        'Conversion-optimized design',
        'Smart automation features',
        'SEO & performance optimized',
        'Analytics integration',
        'Mobile-first responsive',
      ],
    },
    {
      id: 4,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your unique business needs - from automation workflows to intelligent data processing systems.',
      image: '/images/custom-ai.jpg',
      badge: 'Custom Development',
      features: [
        'Bespoke solution design',
        'Process automation',
        'Data intelligence & analysis',
        'API integration',
        'Scalable architecture',
      ],
    },
    {
      id: 5,
      title: 'Remote IT & Non-IT Services',
      description: 'Access skilled remote professionals for IT and non-IT operations including support, development, and backend services.',
      image: '/images/remote-services.jpg',
      badge: 'Staffing',
      features: [
        'Skilled professionals',
        'Flexible engagement models',
        'Cost-effective solutions',
        'Quality assurance',
        'Time zone flexibility',
      ],
    },
    {
      id: 6,
      title: 'AI Strategy Consulting',
      description: 'Expert guidance on AI implementation strategy, technology selection, and roadmap development for digital transformation.',
      image: '/images/ai-consulting.jpg',
      badge: 'Consulting',
      features: [
        'AI readiness assessment',
        'Technology roadmap',
        'ROI analysis',
        'Implementation planning',
        'Change management',
      ],
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Chatbot (1,000 conversations)',
        'Basic website integration',
        'Email support',
        'Monthly analytics report',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$1,499',
      period: '/month',
      description: 'Complete AI solution for growing businesses',
      features: [
        'AI Chatbot (unlimited)',
        'AI Receptionist',
        'AI-powered website',
        'Priority support (24/7)',
        'Custom training & setup',
        'Real-time analytics',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI development',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise deployment',
        'Advanced security features',
      ],
      cta: 'Contact Sales',
      highlighted: false,
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
              <span className="text-white">Our </span>
              <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-400">
              Comprehensive AI-powered solutions designed to transform your business 
              operations, enhance customer experiences, and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-500/80 backdrop-blur-sm text-white">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Simple, </span>
              <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-purple-600 to-purple-700 scale-105 shadow-xl shadow-purple-500/25'
                    : 'glass-card'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'gradient-text'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.highlighted ? 'text-white/70' : 'text-gray-500'}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`mt-3 text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-400'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm ${
                      plan.highlighted ? 'text-white/90' : 'text-gray-400'
                    }`}>
                      <Check className={`w-4 h-4 flex-shrink-0 ${
                        plan.highlighted ? 'text-cyan-400' : 'text-green-400'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full py-3.5 rounded-xl font-semibold text-center transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-purple-700 hover:bg-gray-100 hover:shadow-lg'
                      : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-lg hover:shadow-purple-500/25'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 lg:p-12"
          >
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Fast Implementation</h4>
                <p className="text-gray-400 text-sm">Get up and running in weeks, not months</p>
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-cyan-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Enterprise Security</h4>
                <p className="text-gray-400 text-sm">SOC 2 compliant and encrypted</p>
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-pink-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">AI-Powered</h4>
                <p className="text-gray-400 text-sm">Cutting-edge machine learning technology</p>
              </div>
            </div>
          </motion.div>
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
                Not Sure Which Plan?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Let's discuss your needs and find the perfect solution for your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-purple-700 hover:bg-gray-100 transition-all duration-300"
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
