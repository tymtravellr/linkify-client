import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = "fill" }) => {

    /**
     * Button Variant Styles
     * options: ["fill", "outline"]
     */
    const variantStyle =
        variant === "fill"
            ? "bg-indigo-500 text-white"
            : "bg-white text-indigo-500 hover:text-white";

    
    return (
        <Link to={to} asChild>
            <button
                className={`${variantStyle} hover:bg-indigo-700 border border-indigo-500 hover:border-indigo-700 font-bold py-2 px-4 rounded`}>
                {children}
            </button>
        </Link>
    )
}

export default Button