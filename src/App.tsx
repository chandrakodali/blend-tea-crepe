import { lazy, Suspense } from 'react';
import AnnouncementBanner from './components/AnnouncementBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedItems from './components/FeaturedItems';
import Footer from './components/Footer';
import './App.css';

const About = lazy(() => import('./components/About'));
const Menu = lazy(() => import('./components/Menu'));
const SeasonalSpecial = lazy(() => import('./components/SeasonalSpecial'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Gallery = lazy(() => import('./components/Gallery'));
const VisitUs = lazy(() => import('./components/VisitUs'));

function App() {
  return (
    <div className="app-container">
      <AnnouncementBanner
        emoji="☀️"
        message="Blend is open regular hours today! Drive safe — side roads are still not perfect."
      />
      <Navbar />
      <Hero />
      <FeaturedItems />
      <Suspense fallback={<div className="section" style={{ textAlign: 'center', minHeight: '50vh' }}>Loading...</div>}>
        <About />
        <SeasonalSpecial />
        <Menu />
        <Testimonials />
        <Gallery />
        <VisitUs />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
