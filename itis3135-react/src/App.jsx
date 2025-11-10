import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../../../itis3135-react/src/components/Header'
import Footer from '../../../itis3135-react/src/components/Footer'
import Home from '../../../itis3135-react/src/pages/Home'
import Introduction from '../../../itis3135-react/src/pages/Introduction'
import Contract from '../../../itis3135-react/src/pages/Contract'

export default function App() {
  return (
    <Router>
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
  )
}
