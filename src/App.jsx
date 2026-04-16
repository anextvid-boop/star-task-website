import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </main>
        
        <footer className="py-8 bg-star-canvas border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-star-secondary">
            <p>&copy; {new Date().getFullYear()} Star Task. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link to="/terms-and-conditions" className="hover:text-star-dark hover:underline transition-colors">Terms of Use</Link>
              <Link to="/privacy-policy" className="hover:text-star-dark hover:underline transition-colors">Privacy Policy</Link>
              <a href="mailto:support@startaskapp.com" className="hover:text-star-dark hover:underline transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
