import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="about-page section">
      <h2 className="section-title">About the Application</h2>

      <div className="about-page-container">
        <div className="about-page-info">
          <p className="about-page-version">Version: 1.0.0</p>
          <p className="about-page-name">
            <span>Made by:</span> Aleksandar Ilic
          </p>
          <p className="about-page-description">
            <span>Description:</span> This application allows users to manage
            medicines. Users can view, add, update, and delete medicines. The
            application also provides visual representation through two charts.
            One chart displays the top 5 most expensive and top 5 least
            expensive medicines. The other chart shows the distribution of
            medicines among manufacturers.
          </p>
        </div>

        <div className="about-page-image">
          <img src="/undraw_medicine_b-1-ol.svg" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
