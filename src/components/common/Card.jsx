
const Card = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`
        bg-deep-royal-blue text-white 
        rounded-[16px] 
        p-6 
        border border-blue-800/50
        flex flex-col items-center justify-center
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
