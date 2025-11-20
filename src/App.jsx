import React, { useState } from "react";
import SplashScreen from "./components/splash/SplashScreen";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BigTypographySection from "./components/BigTypographySection";
import BentoSection from "./components/BentoSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import CollectionSection from "./components/CollectionSection";
import KitabSection from "./components/KitabSection";
import ReminderSection from "./components/ReminderSection";
import BlogMuslimZ from "./components/BlogMuslimZ";
import ShortDakwahZ from "./components/ShortDakwahZ";
import EndSection from "./components/EndSection";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {!showSplash && (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
          <Navbar />
          <HeroSection />
          <BigTypographySection />
          <BentoSection />
          <FeatureSection />
          <CollectionSection />
          <KitabSection />
          <ReminderSection />
          <BlogMuslimZ />
          <ShortDakwahZ />
          <EndSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
