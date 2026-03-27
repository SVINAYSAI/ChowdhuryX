import { motion } from 'framer-motion';
import { Target, Eye, Flag, Handshake, TrendingUp, Expand, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Flag,
      title: 'USA-Based',
      description: 'Trusted company operating under US business standards',
    },
    {
      icon: Handshake,
      title: 'Transparency',
      description: 'Clear communication and honest partnerships always',
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'Focused on delivering measurable business impact',
    },
    {
      icon: Expand,
      title: 'Scalability',
      description: 'Solutions that grow seamlessly with your business',
    },
  ];

  const team = [
    {
      name: 'Leadership',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Technical Lead',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Operations',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
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
              <span className="text-white">About </span>
              <span className="gradient-text">ChowdhuryX</span>
            </h1>
            <p className="text-xl text-gray-400">
              We're on a mission to democratize AI technology and help businesses of all 
              sizes harness the power of intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="/images/about-team.jpg"
                  alt="ChowdhuryX Team"
                  className="w-full h-auto rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-white">Who We </span>
                <span className="gradient-text">Are</span>
              </h2>
              
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  ChowdhuryX Organization LLC is a USA-based technology company specializing 
                  in AI-powered solutions. Founded with a vision to make advanced AI accessible 
                  to businesses of all sizes, we've grown into a trusted partner for companies 
                  seeking digital transformation.
                </p>
                <p>
                  Our team combines deep technical expertise with a practical understanding 
                  of business needs. We don't just build technology - we craft solutions that 
                  deliver measurable results and drive real business growth.
                </p>
                <p>
                  From AI receptionists that handle customer calls 24/7 to intelligent chatbots 
                  that engage website visitors, we create tools that work seamlessly with your 
                  existing operations while opening new possibilities for efficiency and scale.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">Certified Experts</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">Global Team</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8 lg:p-10 card-hover"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses with accessible, practical AI solutions that drive growth, 
                improve customer experiences, and create competitive advantages. We believe every 
                business deserves the benefits of intelligent automation.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-3xl p-8 lg:p-10 card-hover"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the leading provider of AI solutions for businesses worldwide, recognized 
                for our commitment to innovation, transparency, and results. We envision a future 
                where AI enhances human potential rather than replacing it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Our Core </span>
              <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:from-purple-500 group-hover:to-cyan-500">
                  <value.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Leadership </span>
              <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Meet the experts behind ChowdhuryX
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden card-hover"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-white font-semibold text-lg mb-1">{member.name}</h4>
                  <p className="text-purple-400 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
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
            className="glass-card rounded-[2rem] p-10 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Let's discuss how we can help transform your business with AI solutions.
              </p>
              <a
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
