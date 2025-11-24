import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SecondaryNav from "./components/SecondaryNav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contract from "./pages/Contract";

function App() {
  return (
    <Router>
      <Header />
      <SecondaryNav />

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
