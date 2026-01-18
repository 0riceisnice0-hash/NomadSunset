/**
 * Nomads Sunset - Main JavaScript
 * Handles mobile navigation, header scroll behavior, and dynamic copyright year
 */

(function() {
  'use strict';

  // ========================================
  // Mobile Navigation Toggle
  // ========================================
  
  function initMobileNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (!menuToggle || !mainNav) return;
    
    menuToggle.addEventListener('click', function() {
      const isActive = mainNav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isActive);
      menuToggle.innerHTML = isActive ? '✕' : '☰';
    });
    
    // Close menu when clicking on a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '☰';
      });
    });
    
    // Close menu on window resize if switching to desktop view
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth > 768) {
          mainNav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.innerHTML = '☰';
        }
      }, 250);
    });
  }
  
  // ========================================
  // Compact Header on Scroll
  // ========================================
  
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    
    let lastScroll = 0;
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > scrollThreshold) {
        header.classList.add('compact');
      } else {
        header.classList.remove('compact');
      }
      
      lastScroll = currentScroll;
    });
  }
  
  // ========================================
  // Set Active Navigation Link
  // ========================================
  
  function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage || 
          (currentPage === '' && linkPage === 'index.html') ||
          (currentPage === 'index.html' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
  
  // ========================================
  // Dynamic Copyright Year
  // ========================================
  
  function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
  
  // ========================================
  // Lazy Loading Images
  // ========================================
  
  function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    } else {
      // Fallback for browsers that don't support native lazy loading
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
      document.body.appendChild(script);
    }
  }
  
  // ========================================
  // Contact Form Enhancement
  // ========================================
  
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value;
      
      // Construct mailto link
      const subject = encodeURIComponent(`Enquiry: ${service}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
      );
      
      window.location.href = `mailto:nomadssunset888@gmail.com?subject=${subject}&body=${body}`;
    });
  }
  
  // ========================================
  // Initialize All Features
  // ========================================
  
  function init() {
    initMobileNav();
    initHeaderScroll();
    setActiveNav();
    setCurrentYear();
    initLazyLoading();
    initContactForm();
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
