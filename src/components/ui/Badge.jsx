const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-block px-3 py-1 text-xs bg-gray-100 text-foreground ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
