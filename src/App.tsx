import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import { ThemeData } from "./components/ThemeComponent";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/user" element={<UserPage />} />
        
      </Routes>
    </div>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: 'Outfit', sans-serif;
  box-sizing: border-box;
  /* overflow: hidden; */
  
}
:root {
font-synthesis: none;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: 100%;
}
body {
  background-color: ${ThemeData.colors.darkBlue};
  min-width: 320px;
  min-height: 100vh;
  color: ${ThemeData.colors.white};
  padding: 48px 24px 170px 24px;

  @media (width > 767px) {
    padding: 80px 184px 473px 184px;
  }
  @media (width > 1439px) {
    padding: 5.44% 36% 17.3% 36%;
  }
}

`;
