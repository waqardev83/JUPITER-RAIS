import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Loader from "./Components/Layout/Loader";
import Home from "./Pages/Home";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <BrowserRouter>
      {showLoader ? (
        <Loader onComplete={() => setShowLoader(false)} />
      ) : (
        <>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;