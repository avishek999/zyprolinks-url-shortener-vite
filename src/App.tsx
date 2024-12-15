import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./page/Auth/Auth";
import { ThemeProvider } from "./components/theme-provider/Theme-provider";
import Home from "./page/home/Home";
import LandingPage from "./page/landingPage/LandingPage";
import AllLinksPage from "./page/AllLinks/AllLinks";


const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/auth" Component={Auth} />
            <Route path="/links" Component={AllLinksPage} />

            <Route path="/" Component={LandingPage} />

            <Route path="/dashboard" Component={Home} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
