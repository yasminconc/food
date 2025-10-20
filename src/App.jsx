import Router from "./routes/router"
import theme from '../src/styles/theme'
import { ThemeProvider } from "styled-components"
import GlobalStyles from '../src/styles/global'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router/>
    </ThemeProvider>
  )
}

export default App
