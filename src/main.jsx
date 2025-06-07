import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import FirmamiziOl from './FirmamiziOl.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/firmamizi-ol" element={<FirmamiziOl />} />
      </Routes>
    </Router>
  </StrictMode>,
)
