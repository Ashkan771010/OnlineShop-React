import GlobalStyles from "../assets/style/style";
import NavBar from "../component/navbar/NavBar";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../assets/style/style"
import ROUTES from "../configs/routes";
import Router from "../providers/router";
import Footer from "../component/footer/footer";


function App() {
   const [theme, setTheme] = useState(false);
   const [isResponsive, setIsResponsive] = useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={theme === true ? darkTheme : lightTheme}>
        <GlobalStyles shouldScroll={isResponsive} />
        <NavBar
          setTheme={setTheme}
          theme={theme}
          isResponsive={isResponsive}
          setIsResponsive={setIsResponsive}
        />
        <Router routes={ROUTES} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
