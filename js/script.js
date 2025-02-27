// Banner Autoslide
let indexBanner = 0;
const banners = document.querySelectorAll('.main-banner');

function showBanner() {
  // Hide all banners
  banners.forEach(banner => (banner.style.opacity = 0));

  // Show current banner
  banners[indexBanner].style.opacity = 1;

  // Increment index
  indexBanner = (indexBanner + 1) % banners.length;
}

// Auto Play
setInterval(showBanner, 3000);

// Smooth Scroll for Navbar Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form Validation for Booking
function validateBookForm() {
  const nameInput = document.getElementById('name-input');
  const checkinInput = document.getElementById('checkin-input');
  const checkoutInput = document.getElementById('checkout-input');
  const roomTypeInput = document.getElementById('room-type');

  if (
    nameInput.value === '' ||
    checkinInput.value === '' ||
    checkoutInput.value === '' ||
    roomTypeInput.value === ''
  ) {
    alert('Please fill in all fields.');
  } else {
    alert(
      `Thank you, ${nameInput.value}! Your booking for a ${roomTypeInput.value} from ${checkinInput.value} to ${checkoutInput.value} has been received.`
    );

    document.getElementById('book-form').reset();
  }
}

// Hamburger Menu Toggle
function toggleNav() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}
