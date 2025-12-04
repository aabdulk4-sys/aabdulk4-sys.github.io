import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contract from "./pages/Contract";
import Students from "./pages/Students";   

import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/contract" element={<Contract />} />

            <Route path="/students" element={<Students />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}
