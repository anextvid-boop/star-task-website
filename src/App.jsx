import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Eula from './pages/Eula'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="w-full py-6 px-8 flex justify-between items-center absolute top-0 left-0 z-50 pointer-events-none">
          <Link to="/" className="pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="text-2xl font-black tracking-tighter text-star-dark flex items-center gap-2"
            >
              <span className="text-star-gold text-xl">★</span> Star Task
            </motion.div>
          </Link>
        </header>
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/eula" element={<Eula />} />
          </Routes>
        </main>

        <footer className="py-8 bg-star-canvas border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-star-secondary">
            <p>&copy; {new Date().getFullYear()} Star Task. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 sm:mt-0 justify-center">
              <Link to="/terms-and-conditions" className="hover:text-star-dark hover:underline transition-colors">Terms of Use</Link>
              <Link to="/privacy-policy" className="hover:text-star-dark hover:underline transition-colors">Privacy Policy</Link>
              <Link to="/eula" className="hover:text-star-dark hover:underline transition-colors">EULA</Link>
              <a href="mailto:support@startaskapp.com" className="hover:text-star-dark hover:underline transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
