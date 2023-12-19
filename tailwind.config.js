/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fade-in 0.5s ease-out forwards',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            colors: {
                text_primary: '#000000',
                text_secondary: '#ffffff',
                text_accent: '#000000',
                text_neutral: '#ffffff',

                soft: '#6FA9BC',
                soft_yellow: `#ffeaba`,

                complementary_primary: '#466f6a', // Complementary to soft, muted pink
                complementary_secondary: '#ef8973', // Complementary to deep teal
                complementary_accent: '#4a1a30', // Complementary to light mint green
                complementary_neutral: '#c2bbae', // Complementary to dark slate gray
                'complementary_base-100': '#0a0a0d', // Complementary to very light gray

                complementary_info: '#ff8400',
                complementary_success: '#a347a3',
                complementary_warning: '#0e3bf0',
                complementary_error: '#00b2b2',

                text_info: '#000000',
                text_success: '#ffffff',
                text_warning: '#ffffff',
                text_error: '#ffffff',
            },
        },
    },
    variants: {
        extend: {
            gridTemplateColumns: ['responsive'], // This line is important
        },
    },
    daisyui: {
        themes: [
            {
                erindtherapy_theme: {
                    primary: '#b99095', // Soft, muted pink
                    secondary: '#10768c', // Deep teal
                    accent: '#97c1a9', // Light mint green
                    neutral: '#3d4451', // Dark slate gray
                    'base-100': '#f5f5f2', // Very light gray

                    info: '#007bff',
                    success: '#5cb85c',
                    warning: '#f1c40f',
                    error: '#ff4d4d',
                },
            },
        ],
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
