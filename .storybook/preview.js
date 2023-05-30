import '../src/ui/styles/globals.css'
import StoryThemeProvider from '../src/ui/themes/storyThemeProvider'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [StoryThemeProvider]
