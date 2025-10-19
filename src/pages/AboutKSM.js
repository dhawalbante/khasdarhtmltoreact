import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutKSM = () => {
  return (
    <div>
      <Header />

      <section id="about-ksm-section">
        <div className="content-wrapper">
          <div className="text-and-info-column">
            <p className="overline">About</p>
            <h1>
              Khasdar <span className="highlight">Sanskrutik</span> Mahotsav
            </h1>

            <p>
              The biggest cultural extravaganza event organised under the
              leadership of Shri Nitin Gadkari ji. 2000 national & International
              artist participated in the 17-day cultural fest. This event has
              become the platform for various artists to showcase our culture,
              values and art.
            </p>
            <p>
              Apart from the typical cultural event, a variety of other
              programmes are also being organized and it has also included
              music, dance, comedy and poetry. Various renowned artists like
              Hema Malini, Kavita Krishnamurti, Shanker Mahadevan and others
              joined the event.
            </p>

            <div className="info-boxes-container">
              <div className="info-box location-box">
                <div className="icon-circle">
                  <i className="icon fa fa-map-marker"></i>
                </div>
                <div className="info-details">
                  <p className="info-label">WHERE</p>
                  <p className="info-value">Ishwar Deshmukh College Ground</p>
                </div>
              </div>
              <div className="info-box date-box">
                <div className="icon-circle">
                  <i className="icon fa fa-calendar"></i>
                </div>
                <div className="info-details">
                  <p className="info-label">WHEN</p>
                  <p className="info-value">7th Nov 2025 - 18th Nov 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="image-column">
            <img
              src="/images/about/about_ksm.jpg"
              alt="Professionals networking and clapping"
            />
          </div>
        </div>
      </section>

      <section id="visionary-section">
        <div className="visionary-content">
          <div className="visionary-image-box">
            <img
              src="/images/about/gadkari.svg"
              alt="Hon'ble Shri. Nitinji Gadkari"
            />
          </div>

          <div className="visionary-text-content">
            <p>
              The Khasdar Mahotsav reflects our vision of transforming Nagpur
              into a vibrant hub of sports, culture, and entrepreneurship. It
              stands as a celebration of local talent, creativity, and
              innovation—bringing together people from all walks of life to
              share their skills, stories, and dreams. The festival serves as a
              powerful platform to nurture emerging artists, promote cultural
              harmony, and encourage youth participation in activities that
              build confidence and leadership. Beyond entertainment, Khasdar
              Mahotsav symbolizes the spirit of collective growth and
              collaboration.
            </p>

            <div className="visionary-signature">
              <span className="visionary-subtitle">Envisioned By</span>
              <strong>Hon'ble Shri. Nitinji Gadkari</strong>
              <small>Minister of Road Transport and Highways of India</small>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutKSM;
