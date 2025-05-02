// Hamburger Menu Toggle
//const hamburger = document.querySelector('.hamburger');
//const navLinks = document.querySelector('.nav-links');

//hamburger.addEventListener('click', () => {
 // navLinks.classList.toggle('active');
//});
// Hamburger Menu Toggle with Close Icon
const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    hamburgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});


// Modal Functionality
const authModal = document.querySelector('#auth-modal');
const loginForm = document.querySelector('#login-form');
const signupForm = document.querySelector('#signup-form');
const openLogin = document.querySelector('.open-login');
const openSignup = document.querySelector('.open-signup');
const closeModal = document.querySelector('.close-modal');
const switchToSignup = document.querySelector('.switch-to-signup');
const switchToLogin = document.querySelector('.switch-to-login');

openLogin.addEventListener('click', (e) => {
  e.preventDefault();
  authModal.style.display = 'flex';
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

openSignup.addEventListener('click', (e) => {
  e.preventDefault();
  authModal.style.display = 'flex';
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  authModal.style.display = 'none';
});

switchToSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

switchToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

// Close modal when clicking outside
authModal.addEventListener('click', (e) => {
  if (e.target === authModal) {
    authModal.style.display = 'none';
  }
});

// Update Cart Badge (Sample Interaction)
const cartBadge = document.querySelector('.cart-badge');
let cartCount = 0;
document.querySelector('.cart-icon').addEventListener('click', () => {
  cartCount++;
  cartBadge.textContent = cartCount;
  alert('Cart interaction placeholder');
});

// Search Icon Interaction
document.querySelector('.search-icon').addEventListener('click', () => {
  alert('Search functionality to be implemented');
});


// Read More Button Interaction (Placeholder)
document.querySelector('.read-more').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Read More functionality to be implemented');
});

// Stats Animation on Scroll
const stats = document.querySelectorAll('.stat-number');
const animateStats = () => {
  stats.forEach(stat => {
    const target = parseInt(stat.textContent);
    let count = 0;
    const increment = target / 50; // Adjust speed of animation
    const updateCount = () => {
      count += increment;
      if (count < target) {
        stat.textContent = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = target;
      }
    };
    updateCount();
  });
};

// Intersection Observer for stats animation
const statsSection = document.querySelector('.stats');
const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

observer.observe(statsSection);


// Tab Switching for Food Menu
const tabButtons = document.querySelectorAll('.tab-button');
const menuItems = document.querySelectorAll('.menu-items');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    // Hide all menu items
    menuItems.forEach(item => item.style.display = 'none');
    // Show the selected menu items
    const tab = button.getAttribute('data-tab');
    document.getElementById(tab).style.display = 'grid';
  });
});


// Tab Switching for Popular Items
const tabs = document.querySelectorAll('.tab');
const itemLists = document.querySelectorAll('.item-list');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const tabValue = tab.getAttribute('data-tab');
    itemLists.forEach(list => {
      list.style.display = list.getAttribute('data-tab') === tabValue ? 'grid' : 'none';
    });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.testimonial-slider', {
      // Optional parameters
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      speed: 800,
      grabCursor: true,
      spaceBetween: 30,
      centeredSlides: true,
      effect: 'slide',

      // Responsive breakpoints
      breakpoints: {
          // when window width is >= 320px
          320: {
              slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
              slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
              slidesPerView: 3,
          }
      },

      // If we need pagination
      pagination: {
          els: '.swiper-pagination',
          clickable: true,
      },

      // Navigation arrows
      //navigation: {
        //  nextEl: '.swiper-button-next',
          //prevEl: '.swiper-button-prev',
      //},
  });

  // Pause autoplay on hover
  const sliderContainer = document.querySelector('.testimonial-slider');
  sliderContainer.addEventListener('mouseenter', function() {
      swiper.autoplay.stop();
  });
  sliderContainer.addEventListener('mouseleave', function() {
      swiper.autoplay.start();
  });
});





// Newsletter form interaction
document.querySelector(".newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing page

  const emailInput = this.querySelector("input").value;

  if (emailInput.trim() === "") {
    alert("Please enter a valid email.");
  } else {
    alert(`Thank you for subscribing, ${emailInput}!`);
    this.reset(); // Clear form
  }
});