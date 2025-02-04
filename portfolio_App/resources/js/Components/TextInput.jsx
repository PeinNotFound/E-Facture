import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 dark:border-customGray dark:bg-primary dark:text-gray-300 focus:border-indigo-500 dark:focus:border-customWhite focus:ring-indigo-500 dark:focus:ring-customWhite rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
