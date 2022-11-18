import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AutoUProvider } from "./context/AutouContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AutoUProvider>
          <Router />
        </AutoUProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
