import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Clock, Globe } from 'lucide-react';

interface StatItemProps {
  value: string;
  label: string;
  icon: React.ElementType;
  suffix?: string;
  delay: number;
}

const AnimatedCounter = ({ value, suffix = '' }: { value: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(numericValue * easeOut);
            setDisplayValue(current.toString());

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold gradient-text">
      {displayValue}{suffix}
    </div>
  );
};

const StatItem = ({ value, label, icon: Icon, suffix = '', delay }: StatItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card rounded-3xl p-8 text-center card-hover"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6">
        <Icon className="w-7 h-7 text-purple-400" />
      </div>
      
      {value.match(/^[0-9]+$/) ? (
        <AnimatedCounter value={value} suffix={suffix} />
      ) : (
        <div className="text-4xl sm:text-5xl font-bold gradient-text">{value}</div>
      )}
      
      <div className="text-gray-400 mt-2 text-sm">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: '500', label: 'Projects Delivered', icon: TrendingUp, suffix: '+' },
    { value: '98', label: 'Client Satisfaction', icon: Users, suffix: '%' },
    { value: '24', label: 'Support Available', icon: Clock, suffix: '/7' },
    { value: '100', label: 'USA Based', icon: Globe, suffix: '%' },
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Trusted by </span>
            <span className="gradient-text">Businesses Worldwide</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved for our clients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
