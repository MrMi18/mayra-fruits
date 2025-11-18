const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const variants = {
    primary: 'bg-orange-600 hover:bg-orange-700 text-white',
    secondary: 'bg-white hover:bg-gray-100 text-orange-600 border-2 border-orange-600',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-orange-600'
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
