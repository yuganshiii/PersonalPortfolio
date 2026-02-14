import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', href, onClick, className = '', ...props }) => {
  const baseStyles = 'inline-block px-8 py-3 font-medium transition-all duration-300';

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90 shadow-sm hover:shadow-md',
    secondary: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'text-foreground hover:text-accent',
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
