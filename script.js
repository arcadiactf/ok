let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up
      navbar.style.top = "0";
    } else {
      // Scrolling down
      navbar.style.top = "-100px"; // Hide the navbar
    }
    prevScrollPos = currentScrollPos;
  };
  
const targetDate = new Date("August 8, 2025 09:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);

function toggleMenu() {
    const menu = document.getElementById("dropdown");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }

    let lastScroll = window.scrollY;
  const socialBar = document.getElementById('mobileSmartSocial');

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (Math.abs(currentScroll - lastScroll) > 10) {
      // Hide on scroll
      socialBar.classList.add('hide');
    }

    clearTimeout(window.socialScrollTimer);
    window.socialScrollTimer = setTimeout(() => {
      // Show after 500ms of no scroll
      socialBar.classList.remove('hide');
    }, 500);

    lastScroll = currentScroll;
  });