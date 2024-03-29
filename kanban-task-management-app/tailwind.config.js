/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{html,js,jsx}'
    ],
    theme: {
        fontFamily: {
            'plus-jakarta': 'Plus Jakarta Sans'
        },
        screens: {
            sm: '375px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            colors: {
                darkPurple: '#635FC7',
                lightPurple: '#A8A4FF',
                mediumLightPurple: '#AFB6B9',
                darkBlue: '#000112',
                lightMediumGray: '#828FA3',
                darkGray: '#20212C',
                mediumGray: '#2B2C37',
                lightGray: '#3E3F4E',
                veryLightGray: '#828FA3',
                lightBlueish: '#E4EBFA',
                almostWhite: '#F4F7FD',
                tomatoRed: '#EA5555',
                lightTomatoRed: '#FF9898',
                purple: '#3f3cbb',
                
            }
        },
    },
    plugins: [],
};

