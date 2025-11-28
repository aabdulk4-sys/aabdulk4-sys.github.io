import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contract from "./pages/Contract";

export default function App() {
  return (
    <Router basename="/itis3135-react">
      <Header />

      <main>
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
