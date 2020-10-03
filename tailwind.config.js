module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Spartan']
    },
    textColor: {
      'dark-magneta': '#502050',
      'soft-pink': '#ee68a4',
      'dark-grayish-magenta': '#937b92',
      'light-grayish-magenta': '#f7f2f7',
      'white': '#ffffff'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'light-grayish-magenta': '#f7f2f7',
      'dark-magneta': '#502050'
    })
    // fontSize: {
    //   base: ['15px'],
    // }
  },
  variants: {},
  plugins: [],
}
