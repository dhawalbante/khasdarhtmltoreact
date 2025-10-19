import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const events = [
  {
    title: "Hamare Ram",
    marathiTitle: "हमारे राम",
    time: "7:00 To 10:00 PM",
    date: "7th November 2025, Friday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/hamare_ram.jpg",
    video: "/videos/bharat.mp4",
    className: "hamare-ram",
  },
  {
    title: "Vishal Mishra",
    marathiTitle: "विशाल मिश्रा",
    time: "7:00 To 10:00 PM",
    date: "8th November 2025, Saturday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/vishal.jpg",
    video: "/videos/ram-1.mp4",
    className: "vishal",
  },
  {
    title: "Instrumental Fusion",
    marathiTitle: "इंस्ट्रुमेंटल फ्यूजन",
    time: "7:00 To 10:00 PM",
    date: "9th November 2025, Sunday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/fusion.jpg",
    video: "/videos/ram-2.mp4",
    className: "fusion",
  },
  {
    title: "Shri.Rashtrasant Tukodoji Maharaj",
    marathiTitle: "राष्ट्रसंताची जीवनगाथा",
    time: "7:00 To 10:00 PM",
    date: "10th November 2025, Monday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/bhajan.jpg",
    video: "/videos/ram-3.mp4",
    className: "bhajan",
  },
  {
    title: "Hasya Jatra",
    marathiTitle: "हास्य जत्रा",
    time: "7:00 To 10:00 PM",
    date: "11th November 2025, Tuesday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/Hasya Jatra.jpg",
    video: "/videos/wari.mp4",
    className: "hasya-jatra",
  },
  {
    title: "Akhil Sachdeva",
    marathiTitle: "अखिल सचदेवा",
    time: "7:00 To 10:00 PM",
    date: "12th November 2025, Wednesday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/akhil.jpg",
    video: "/videos/marathi.mp4",
    className: "akhil",
  },
  {
    title: "Mitti Ke Rang",
    marathiTitle: "मिट्टी के रंग",
    time: "7:00 To 10:00 PM",
    date: "13th November 2025, Thursday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/bharati.jpg",
    video: "/videos/fusion.mp4",
    className: "bharti",
  },
  {
    title: "Rekha & Vishal Bhardwaj",
    marathiTitle: "रेखा & विशाल भारद्वाज",
    time: "7:00 To 10:00 PM",
    date: "14th November 2025, Friday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/bhardwaj.jpg",
    video: "/videos/sanam.mp4",
    className: "bhardwaj",
  },
  {
    title: "Kavisammelan",
    marathiTitle: "कवि सम्मेलन",
    time: "7:00 To 10:00 PM",
    date: "15th November 2025, Saturday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/kavi.jpg",
    video: "/videos/udit.mp4",
    className: "kavi",
  },
  {
    title: "Shreya Ghoshal",
    marathiTitle: "श्रेया घोषाल",
    time: "7:00 To 10:00 PM",
    date: "16th November 2025, Sunday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/shreya.jpg",
    video: "/videos/vishal.mp4",
    className: "shreya",
  },
  {
    title: "Shankar Mahadevan",
    marathiTitle: "शंकर महादेवन",
    time: "7:00 To 10:00 PM",
    date: "17th November 2025, Monday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/shankar.jpg",
    video: "/videos/jubin.mp4",
    className: "shankar",
  },
  {
    title: "Ajay-Atul",
    marathiTitle: "अजय-अतुल",
    time: "7:00 To 10:00 PM",
    date: "18th November 2025, Tuesday",
    venue: "Ishwar Deshmukh College Ground",
    image: "/images/movies/ajay-atul.jpg",
    video: "/videos/jubin.mp4",
    className: "ajay-atul",
  },
];

const Home = () => {
  const [currentEvent, setCurrentEvent] = useState(events[0]);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [trailerSrc, setTrailerSrc] = useState("");

  useEffect(() => {
    // Initialize Materialize carousel
    const carouselElement = document.querySelector(".carousel");
    if (carouselElement && window.M) {
      window.M.Carousel.init(carouselElement, {
        onCycleTo: (slide) => {
          const index = Array.from(carouselElement.children).indexOf(slide);
          setCurrentEvent(events[index]);
        },
      });
    }
  }, []);

  const changeEvent = (event) => {
    setCurrentEvent(event);
  };

  const openTrailer = (videoSrc) => {
    setTrailerSrc(videoSrc);
    setIsTrailerOpen(true);
  };

  const closeTrailer = () => {
    setIsTrailerOpen(false);
    setTrailerSrc("");
  };

  return (
    <div>
      <Header />
      <video id="background-video" autoPlay loop muted>
        <source src={currentEvent.video} type="video/mp4" />
      </video>

      <div className="banner">
        <div className={`content ${currentEvent.className} active`}>
          <h2 className="movie-title">
            {currentEvent.title}{" "}
            <span className="mar-title">{currentEvent.marathiTitle}</span>
          </h2>
          <ul className="program-details">
            <li>
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              {currentEvent.time}
            </li>
            <li>
              <i className="fa fa-calendar" aria-hidden="true"></i>
              {currentEvent.date}
            </li>
            <li>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {currentEvent.venue}
            </li>
          </ul>
          <div className="button-group">
            <a href="#" className="button">
              <i className="" aria-hidden="true"></i> Registrations Opening Soon
            </a>
          </div>
          <p className="instructions">
            • Tap or click to pick program! <br />• Swipe left or right to see
            more
          </p>
        </div>

        <div className="carousel-box">
          <div className="carousel">
            {events.map((event, index) => (
              <div
                key={index}
                className="carousel-item"
                onClick={() => changeEvent(event)}
              >
                <img src={event.image} alt={event.title} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isTrailerOpen && (
        <div className="trailer active">
          <video src={trailerSrc} muted controls></video>
          <img
            className="close"
            src="/images/close.png"
            alt="close"
            onClick={closeTrailer}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
