const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-mono bg-accent-subtle text-accent-primary rounded-md ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
