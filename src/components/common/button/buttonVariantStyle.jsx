// Button variant style
// options: primary, outline
export const variantStyle = (variant = 'primary') => {
    const commonStyle = 'px-6 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ';
    const primaryStyle = 'bg-indigo-500 text-white hover:bg-indigo-600';
    const outlineStyle = 'bg-white text-indigo-500 border border-indigo-600 hover:bg-indigo-600 hover:text-white   disabled:hover:bg-transparent disabled:hover:text-indigo-500';

    return variant === 'primary' ? `${commonStyle} ${primaryStyle}` : `${commonStyle} ${outlineStyle}`;
}