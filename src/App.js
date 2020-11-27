import React, { useEffect } from "react";
// Componets and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
