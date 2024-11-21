/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.{js,css}',  "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            backgroundImage: {
                'smoke': 'url("/vid-spfx.jpg")',
                'mixer': 'url("/mixer1.jpg")',
                'editor': 'url("/vid-edit1.jpg")',
                'coding': 'url("/coding.jpg")',
            },
            keyframes: {
                    appear: {
                        "0%": {
                            opacity: "0",
                        },
                        "100%": {
                            opacity: "1",
                        },
                    },
                    animation: {
                        appear: "appear 0.5s ease-in-out",
                    }
                }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
