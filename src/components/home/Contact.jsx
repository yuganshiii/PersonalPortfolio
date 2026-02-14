import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { Github, LinkedIn, Email, Document } from '../ui/Icons';

const Contact = () => {
  const links = [
    {
      name: 'Email',
      icon: Email,
      href: 'mailto:yuganshi@umich.edu',
      label: 'yuganshi@umich.edu',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/yuganshiii',
      label: 'github.com/yuganshiii',
    },
    {
      name: 'LinkedIn',
      icon: LinkedIn,
      href: 'https://linkedin.com/in/yuganshi',
      label: 'linkedin.com/in/yuganshi',
    },
    {
      name: 'Resume',
      icon: Document,
      href: '/PersonalPortfolio/Yuganshi\'s Resume Final.pdf',
      label: 'Download Resume',
    },
  ];

  return (
    <Section
      id="contact"
      title="Let's Connect"
      subtitle="I'm always open to discussing new opportunities, interesting projects, or just chatting about tech"
      className="bg-white"
    >
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-6 bg-white border border-gray-200 hover:border-accent hover:shadow-md transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-accent/10 group-hover:bg-accent transition-colors">
                  <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{link.name}</h3>
                  <p className="text-sm text-foreground/70">{link.label}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;
