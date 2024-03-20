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
                bleu: '#5E72FF',
                noir: '#2C2828',
                bleu_clair: '#F2F4FF',
                bleu_fonce: '#97AFFF',
                gradient1: '#F4D8A7',
                gradient2: '#9EB4FF',
                rose_category: '#FF89E5',
                vert_category: '#58D4A0',
                orange_category: '#FFA700',
            },
        },
    },

    plugins: [forms],
};
