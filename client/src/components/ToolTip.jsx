const Tooltip = ({ text, className = "" }) => {
    return (
        <span
            className={`
        
        ${className}
      `}
        >
            {text}
        </span>
    );
};

export default Tooltip;