import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                'Urbanist': ['Urbanist', 'sans-serif']
            },
            colors: {
                primary: 'rgba(90, 209, 45, 1)',
                warnaHitam: 'rgba(0, 0, 0, 0.9)',
                abu: 'rgba(0, 0, 0, 0.65)',
                stroke: 'rgba(0, 0, 0, 0.12)',
                strokeDark: 'rgba(255, 255, 255, 0.16)',
                secondary: '#2A1400',
                body: 'rgba(243, 244, 246, 1)',
                primaryDark: 'rgba(255, 255, 255, 0.9)',
                bodyDark: 'rgba(27, 27, 27, 1)',
                bgDark: 'rgba(37, 37, 37, 1)',
                footer: '#FFF9F1',
            },
        },
    },

    plugins: [forms],
};
