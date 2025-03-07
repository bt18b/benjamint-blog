module.exports = {
    theme: {
      extend: {
        transform: ['hover', 'focus'],
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          '.backface-hidden': {
            'backface-visibility': 'hidden',
          },
          '.perspective': {
            'perspective': '1000px',
          },
          '.transform-style-3d': {
            'transform-style': 'preserve-3d',
          },
        }
        addUtilities(newUtilities)
      }
    ]
  }
  