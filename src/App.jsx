import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import MenuSection from './Components/MenuSection'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'



const App = () => {
  return (
      <div className="min-h-screen selection:bg-amber-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero/>
        <About />
        <MenuSection />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      {/* Global CSS for some key animations */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}

export default App
