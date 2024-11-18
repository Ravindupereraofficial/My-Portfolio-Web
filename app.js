document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// JavaScript to hide the preloader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 3000); 
});


//-------------------------------------------------------------------------------------------
// Function to handle scroll animations
const handleScrollAnimations = () => {
    
    const animatedElements = document.querySelectorAll(
      '.slide-left, .slide-right, .scale-up, .hidden, .rotate-in, .services__card, .projects__card'
    );
  
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
  

      if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  };
  
  
  window.addEventListener('scroll', handleScrollAnimations);
  

  document.addEventListener('DOMContentLoaded', () => {
 
    const serviceCards = document.querySelectorAll('.services__card');
    serviceCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.2}s`;
    });
  
    const projectCards = document.querySelectorAll('.projects__card');
    projectCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.2}s`;
    });
  

    handleScrollAnimations();
  });
  

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  

  window.addEventListener('scroll', debounce(handleScrollAnimations, 10));
