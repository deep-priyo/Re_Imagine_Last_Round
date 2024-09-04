import React from 'react';
import ImageSequence from "./hooks/ImageSequence"; // Adjust the import path based on your project structure
import './App.css'; // Include any global styles or Tailwind CSS if necessary
import ServiceSection from "./component/ServicesSection";
import Navbar from './component/Navbar';
import AstroVideo from './component/AstroVideo';
import Generate from './component/Generate';
import EnhancedFooter from './component/EnhancedFooter';
import Inter from './component/Inter';

function App() {
  return (
    <div className="App w-full bg-black">
      <Navbar/>
      <ImageSequence/>
     <ServiceSection/>
     <AstroVideo/>
     <Generate/>
     <EnhancedFooter/>
     <Inter/>
    </div>
  );
}

export default App;
