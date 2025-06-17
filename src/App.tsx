
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';;
import Header from './components/Header';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (

        <Router>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <AIChat />
          </div>
        </Router>
    
  );
}

export default App;