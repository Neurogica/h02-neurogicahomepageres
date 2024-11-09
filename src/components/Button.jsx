import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `relative p-0.5 rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 ${className || ""}`;
  
  const innerClasses = `relative flex items-center justify-center h-11 px-7 bg-gray-900/90 rounded-[2rem] overflow-hidden ${
    white ? "text-n-8" : "text-n-1"
  }`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient"></div>
      <div className={innerClasses}>
        <span className="relative z-10">{children}</span>
      </div>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient"></div>
      <div className={innerClasses}>
        <span className="relative z-10">{children}</span>
      </div>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
