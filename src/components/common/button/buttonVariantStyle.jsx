// Button variant style
// options: primary, outline
export const variantStyle = (variant = 'primary') => {
    const commonStyle = 'px-6 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out';
    const primaryStyle = 'bg-indigo-500 text-white hover:bg-indigo-600';
    const outlineStyle = 'bg-white text-indigo-500 border border-indigo-600 hover:bg-indigo-600 hover:text-white';

    return variant === 'primary' ? `${commonStyle} ${primaryStyle}` : `${commonStyle} ${outlineStyle}`;
}