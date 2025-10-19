import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutKhasdarMahotsav = () => {
  useEffect(() => {
    // Initialize any plugins or scripts if needed
    // For example, if there are any jQuery plugins, initialize them here
  }, []);

  return (
    <div>
      <Header />

      <div id="wraperexpedition">
        <div className="bgexpedition">
          <div id="owl-slider-home" className="owl-carousel">
            <div className="item">
              <video autoPlay loop muted playsInline>
                <source src="/videos/sanskrutik_video.mp4" type="video/mp4" />
              </video>
              <div className="owl-slidertext"></div>
            </div>
            <div className="item">
              <video autoPlay loop muted playsInline>
                <source src="/videos/audyogik_video.mp4" type="video/mp4" />
              </video>
              <div className="owl-slidertext"></div>
            </div>
            <div className="item">
              <video autoPlay loop muted playsInline>
                <source src="/videos/krida_video.mp4" type="video/mp4" />
              </video>
              <div className="owl-slidertext"></div>
            </div>
            <div className="item">
              <video autoPlay loop muted playsInline>
                <source
                  src="/videos/jyeshtha_nagrik_video.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="owl-slidertext"></div>
            </div>
            <div className="item">
              <video autoPlay loop muted playsInline>
                <source src="/videos/agro_vision.mp4" type="video/mp4" />
              </video>
              <div className="owl-slidertext"></div>
            </div>
          </div>
        </div>

        <div className="overlay-home noselect"></div>

        <div className="contentexpedition">
          <div className="row">
            <div className="col-md-12">
              <h1 className="animfadeInUpBig">खासदार महोत्सव</h1>
              <div className="devider-center animfadeInUpBig"></div>
              <div id="slidertext" className="animfadeInUpBig">
                <div className="main-text">Sanskrutik - सांस्कृतिक</div>
                <div className="main-text">Krida - क्रीडा</div>
                <div className="main-text">Audyogik - औद्योगिक</div>
                <div className="main-text">
                  Jyeshtha Nagrik - ज्येष्ठ नागरिक
                </div>
                <div className="main-text">Agro Vision - अ‍ॅग्रो व्हिजन</div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bottom">
          <div id="opengal">
            <i className="fa fa-angle-up"></i>
            <span>experience</span>
          </div>
        </div>

        <div className="bottom-option">
          <div className="nav-bottom-close">
            <span>close</span>
            <i className="fa fa-angle-down"></i>
          </div>

          <div id="owl-gal" className="owl-carousel">
            <div className="item">
              <div className="port">
                <div className="hovereffect">
                  <img
                    className="gray-color"
                    src="/images/logo/ksm_logo.png"
                    alt="Khasdar Sanskrutik Mahotsav"
                  />
                  <div className="overlay">
                    <div className="social-icons">
                      <a
                        href="https://www.facebook.com/KhasdarMahotsavNagpur/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/@KhasdarMahotsavNagpur"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/khasdarmahotsavnagpur/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="port">
                <div className="hovereffect">
                  <img
                    className="gray-color"
                    src="/images/logo/kam_logo.png"
                    alt="Khasdar Audyogik Mahotsav"
                  />
                  <div className="overlay">
                    <div className="social-icons">
                      <a
                        href="https://www.facebook.com/AdvantageVidarbha/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a
                        href="https://in.linkedin.com/company/audyogik-mahotsav-2025"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/@advantagevidarbha25"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/advantage_vidarbha/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="port">
                <div className="hovereffect">
                  <img
                    className="gray-color"
                    src="/images/logo/krida_logo.png"
                    alt="Khasdar Krida Mahotsav"
                  />
                  <div className="overlay">
                    <div className="social-icons">
                      <a
                        href="https://www.facebook.com/chakdenagpur/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=JmMp2Nf4bxU"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/khasdarkridamahotsav/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="port">
                <div className="hovereffect">
                  <img
                    className="gray-color"
                    src="/images/logo/jn_logo.png"
                    alt="Khasdar Jyeshtha Nagrik Mahotsav"
                  />
                  <div className="overlay">
                    <div className="social-icons">
                      <a
                        href="https://www.facebook.com/KhasdarMahotsavNagpur/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=Vx8Qdx0qjA0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/ksmnagpur/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="port">
                <div className="hovereffect">
                  <img
                    className="gray-color"
                    src="/images/logo/agro_logo.png"
                    alt="Agro Vision"
                  />
                  <div className="overlay">
                    <div className="social-icons">
                      <a
                        href="https://www.facebook.com/AgrovisionIndia/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a
                        href="https://x.com/AgrovisionIndia?ref_src=twsrc%5Etfw&ref_url=http%3A%2F%2Fwww.agrovisionindia.in%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCLoOSwQtFAljblIgMZRIfZA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/agrovisionindia/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer animfadeInRight">
          © All rights reserved. Khasdar Mahotsav
          <br />
          Developed By{" "}
          <a
            href="https://www.bharat-online.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Bharat Online
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutKhasdarMahotsav;
