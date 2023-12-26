import Header from "../components/misc/header";
import Footer from "../components/misc/footer";
import React from "react";

// components/LandingPage.tsx
const About: React.FC = () => {
  return (
    <div>

      {/* Header */}
      <section className="relative">
        <div className="video-header">
          {/* Your video component here */}
          <div className="header-overlay">
            <div className="header-content">
              <h1>YUDAE</h1>
              <p>Designing ways to help you live better.</p>
              <button className="headerButton">DISCOVER THE STORY</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="py-8">
        {/* Your content here */}
      </section>

    </div>
  );
};

export default About;