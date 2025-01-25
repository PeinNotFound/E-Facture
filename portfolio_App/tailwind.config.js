import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#1f1f1f',   // You can name your color and provide its hex value
                secondary: '#2e2e2e',
                accent: '#4FD1C5',
                customGray: '#313131',
                customGray2: '#3c3c3c',
                customGray3: '#2d2d2d',
                customWhite: '#ffffff',
            },
        },
    },

    plugins: [forms],
};
