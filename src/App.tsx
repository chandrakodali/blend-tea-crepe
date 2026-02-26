import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedItems from './components/FeaturedItems';
import Footer from './components/Footer';
import './App.css';

const About = lazy(() => import('./components/About'));
const Menu = lazy(() => import('./components/Menu'));
const Gallery = lazy(() => import('./components/Gallery'));
const VisitUs = lazy(() => import('./components/VisitUs'));

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <FeaturedItems />
      <Suspense fallback={<div className="section" style={{ textAlign: 'center', minHeight: '50vh' }}>Loading...</div>}>
        <About />
        <Menu />
        <Gallery />
        <VisitUs />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
