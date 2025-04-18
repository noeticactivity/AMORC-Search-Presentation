import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';
import Slide from './components/Slide';
import slideData from './data/slideData';

// Home/landing page component
const Home = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Automatically navigate to the first slide
    navigate('/slide/1');
  }, [navigate]);
  
  return (
    <div className="home-container">
      <h1>🌹 Rosicrucian Knowledge Explorer</h1>
      <p>Presentation loading...</p>
    </div>
  );
};

// Slide viewer component with navigation
const SlideViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const slideId = parseInt(id);
  
  // Get current slide data
  const slide = slideData.find(s => s.id === slideId) || slideData[0];
  
  // Navigation handlers
  const goToNextSlide = () => {
    if (slideId < slideData.length) {
      navigate(`/slide/${slideId + 1}`);
    }
  };
  
  const goToPrevSlide = () => {
    if (slideId > 1) {
      navigate(`/slide/${slideId - 1}`);
    }
  };
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [slideId]);
  
  return (
    <div className="slide-viewer">
      <div className="slide-container">
        <Slide content={slide.content} />
      </div>
      
      <div className="navigation-controls">
        <button 
          onClick={goToPrevSlide} 
          disabled={slideId === 1}
          className="nav-button prev"
        >
          Previous
        </button>
        
        <div className="slide-progress">
          {slideId} / {slideData.length}
        </div>
        
        <button 
          onClick={goToNextSlide} 
          disabled={slideId === slideData.length}
          className="nav-button next"
        >
          Next
        </button>
      </div>
      
      <div className="slide-menu">
        <button className="menu-toggle" onClick={() => document.body.classList.toggle('menu-open')}>
          ☰ Slides
        </button>
        <div className="slide-list">
          {slideData.map(s => (
            <Link 
              key={s.id} 
              to={`/slide/${s.id}`} 
              className={slideId === s.id ? 'active' : ''}
              onClick={() => document.body.classList.remove('menu-open')}
            >
              {s.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slide/:id" element={<SlideViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 