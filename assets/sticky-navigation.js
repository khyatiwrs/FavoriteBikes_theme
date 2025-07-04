document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      e.preventDefault();
      window.scrollTo({
        top: targetEl.offsetTop - 80, // adjust for sticky header if needed
        behavior: "smooth"
      });
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const stickyHeader = document.getElementById('sticky-header');
  const productDetails = document.getElementById('shopify-section-template--23920723493111__main-product');

  // Function to check scroll position
  function checkScroll() {
    if (!productDetails || !stickyHeader) return;

    const productBottom = productDetails.getBoundingClientRect().bottom;
    // productBottom is distance from viewport top to bottom of product details

    // If product details bottom is above top of viewport, user has scrolled past
    if (productBottom < 0) {
      // Show sticky header
      stickyHeader.classList.remove('hidden');
    } else {
      // Hide sticky header
      stickyHeader.classList.add('hidden');
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // initial check
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.sticky-navigation_button');

  buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();  // Prevent default anchor jump

      // Remove active class from all buttons
      buttons.forEach((b) => b.classList.remove('active'));

      // Add active class to clicked button
      btn.classList.add('active');

      // Smooth scroll to target anchor
      const anchor = btn.querySelector('a').getAttribute('href');
      if (anchor && anchor.startsWith('#')) {
        const target = document.querySelector(anchor);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});

