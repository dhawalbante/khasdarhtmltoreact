// Prevent double-clicks triggering multiple background changes
let clickLocked = false;

function safeChangeBg(bgVideoSrc, contentClass, videoSrc) {
  if (clickLocked) return; // ignore rapid double clicks
  clickLocked = true;

  // Call your existing changeBg function
  changeBg(bgVideoSrc, contentClass, videoSrc);

  // Unlock after short delay (half a second)
  setTimeout(() => {
    clickLocked = false;
  }, 500);
}

// Toggle trailer video visibility
function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video');
  video.pause();
  trailer.classList.toggle('active');
}

// Change background video and movie content text
function changeBg(bgVideoSrc, contentClass, videoSrc) {
  document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
  document.querySelector(`.content.${contentClass}`).classList.add('active');
  const video = document.querySelector('.trailer video');
  const backgroundVideo = document.getElementById('background-video');
  backgroundVideo.src = bgVideoSrc; 
  backgroundVideo.play();
  video.src = videoSrc;
  video.muted = true; // Ensure muted
  video.pause();      // Pause until user clicks "Watch Trailer"
}

// Set initial background on page load
document.addEventListener('DOMContentLoaded', (event) => {
  const initialBgVideo = './videos/bharat.mp4';
  const initialContentClass = 'hamare-ram';
  const initialTrailerVideo = ''; // Placeholder if no initial trailer

  changeBg(initialBgVideo, initialContentClass, initialTrailerVideo);

  const firstCarouselItem = document.querySelector('.carousel-item');
  if (firstCarouselItem) {
    firstCarouselItem.classList.add('active');
  }
});

// Open trailer video popup
function openTrailer(videoSrc) {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('.trailer video');
  video.src = videoSrc;
  video.play();
  trailer.classList.add('active');
}

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const closeMenu = document.getElementById("closeMenu");
  const socialIcons = document.querySelector(".sci"); // social media icons
  const mediaButton = document.querySelector(".header-button"); // media center button

  if (hamburger && sideMenu && closeMenu && socialIcons) {
    // Open menu → hide hamburger, social icons & media button
    hamburger.addEventListener("click", () => {
      sideMenu.classList.add("active");
      hamburger.style.display = "none";
      socialIcons.style.display = "none";
      if (mediaButton) mediaButton.style.display = "none";
    });

    // Close menu → show hamburger, social icons & media button again
    closeMenu.addEventListener("click", () => {
      sideMenu.classList.remove("active");
      hamburger.style.display = "block";
      socialIcons.style.display = "flex";
      if (mediaButton) mediaButton.style.display = "inline-block";
    });

    // Optional: close menu if clicked outside
    document.addEventListener("click", (e) => {
      if (
        !sideMenu.contains(e.target) &&
        !hamburger.contains(e.target) &&
        sideMenu.classList.contains("active")
      ) {
        sideMenu.classList.remove("active");
        hamburger.style.display = "block";
        socialIcons.style.display = "flex";
        if (mediaButton) mediaButton.style.display = "inline-block";
      }
    });
  }
});
