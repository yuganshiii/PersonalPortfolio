import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', href, onClick, className = '', ...props }) => {
  const baseStyles = 'inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300';

  const variants = {
    primary: 'bg-accent-primary text-white hover:bg-accent-hover shadow-soft hover:shadow-hover',
    secondary: 'border-2 border-accent-primary text-accent-primary hover:bg-accent-subtle',
    ghost: 'text-text-primary hover:text-accent-primary',
  };

  const Component = href ? 'a' : motion.button;
  const extraProps = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {};

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...extraProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
