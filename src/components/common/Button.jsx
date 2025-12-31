
const Button = ({ children, onClick, className = '', variant = 'solid', ...props }) => {
    const baseStyles = "font-bold rounded-[8px] px-6 py-3 cursor-pointer transition-all duration-300";

    const variants = {
        solid: "bg-electric-cyan text-void-black hover:bg-void-black hover:text-electric-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] shadow-[0_0_15px_rgba(0,229,255,0.3)]",
        outline: "bg-transparent border-2 border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-void-black shadow-[0_0_15px_rgba(0,229,255,0.1)]"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant] || variants.solid} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
