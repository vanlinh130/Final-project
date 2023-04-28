/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'regal-light': '#131921',
                'regal-dark-500': '#2dc26d',
                'regal-dark-400': '#4aae75',
                'regal-btn': 'rgba(255,87,34,.1)',
                'regal-btn-hover': 'rgba(255,197,178,.181)',
            },
            fontSize: {
                text: [
                    '13px',
                    {
                        fontWeight: '300',
                    },
                ],
            },
        },
    },
    plugins: [require('daisyui')],
};
