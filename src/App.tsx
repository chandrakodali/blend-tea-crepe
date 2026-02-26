import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedItems from './components/FeaturedItems';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <FeaturedItems />
      <About />
      <Menu />
      <Gallery />
      <VisitUs />
      <Footer />
    </div>
  );
}

export default App;
