
// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  // Handle navbar on scroll
  function handleScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  // Initialize scroll position
  handleScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Mobile menu toggle
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      mobileMenu.classList.add('active');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }
  
  mobileMenuBtn.addEventListener('click', toggleMenu);
  
  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        toggleMenu();
      }
    });
  });
  
  // QR Scanner Demo
  const demoScannerBtn = document.getElementById('demoScannerBtn');
  const scannerUI = document.getElementById('scanner-ui');
  const idleState = document.getElementById('idle-state');
  const scanningState = document.getElementById('scanning-state');
  const successState = document.getElementById('success-state');
  const errorState = document.getElementById('error-state');
  const scannerLine = document.querySelector('.scanner-line');
  
  let scannerDemo = {
    status: 'idle', // idle, scanning, success, error
    
    // Reset to idle state
    reset: function() {
      this.status = 'idle';
      scannerUI.className = 'scanner-ui';
      idleState.classList.remove('hidden');
      scanningState.classList.add('hidden');
      successState.classList.add('hidden');
      errorState.classList.add('hidden');
      scannerLine.classList.add('hidden');
      
      // Reset button text
      demoScannerBtn.innerHTML = `
        <svg class="btn-icon-left" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M8 10h8v8H8z"></path>
          <path d="M12 10v8"></path>
          <path d="M8 14h8"></path>
        </svg>
        Try Demo Scanner
      `;
      demoScannerBtn.disabled = false;
    },
    
    // Scanning state
    startScanning: function() {
      this.status = 'scanning';
      scannerUI.className = 'scanner-ui scanning';
      idleState.classList.add('hidden');
      scanningState.classList.remove('hidden');
      successState.classList.add('hidden');
      errorState.classList.add('hidden');
      scannerLine.classList.remove('hidden');
      
      // Update button text
      demoScannerBtn.innerHTML = `
        <svg class="btn-icon-left animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
        Scanning...
      `;
      demoScannerBtn.disabled = true;
    },
    
    // Success state
    showSuccess: function() {
      this.status = 'success';
      scannerUI.className = 'scanner-ui success';
      idleState.classList.add('hidden');
      scanningState.classList.add('hidden');
      successState.classList.remove('hidden');
      errorState.classList.add('hidden');
      scannerLine.classList.add('hidden');
      
      // Update button text
      demoScannerBtn.innerHTML = `
        <svg class="btn-icon-left" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
        Verified!
      `;
      demoScannerBtn.disabled = true;
    },
    
    // Error state
    showError: function() {
      this.status = 'error';
      scannerUI.className = 'scanner-ui error';
      idleState.classList.add('hidden');
      scanningState.classList.add('hidden');
      successState.classList.add('hidden');
      errorState.classList.remove('hidden');
      scannerLine.classList.add('hidden');
      
      // Update button text
      demoScannerBtn.innerHTML = `
        <svg class="btn-icon-left" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        Invalid Credential
      `;
      demoScannerBtn.disabled = true;
    }
  };
  
  // Demo scanner button click handler
  demoScannerBtn.addEventListener('click', function() {
    // Start scanning process
    scannerDemo.startScanning();
    
    // Simulate scanning process (2 seconds)
    setTimeout(function() {
      // Determine success or failure (80% success rate for demo)
      const isSuccess = Math.random() > 0.2;
      
      if (isSuccess) {
        scannerDemo.showSuccess();
      } else {
        scannerDemo.showError();
      }
      
      // Reset after showing result (3 seconds)
      setTimeout(function() {
        scannerDemo.reset();
      }, 3000);
    }, 2000);
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize animations on scroll
  const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-in');
  
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }
  
  // Add visible class to elements in viewport
  function checkAnimations() {
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        element.style.visibility = 'visible';
      } else {
        element.style.visibility = 'hidden';
      }
    });
  }
  
  // Add initial visibility styling
  animatedElements.forEach(element => {
    // Check animation delay
    const delay = element.style.animationDelay;
    // Set initial visibility
    if (isInViewport(element)) {
      element.style.visibility = 'visible';
    } else {
      element.style.visibility = 'hidden';
    }
  });
  
  // Check animations on scroll
  window.addEventListener('scroll', checkAnimations);
  
  // Initial check
  checkAnimations();
});
