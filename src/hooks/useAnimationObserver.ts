import { useEffect } from 'react';

export const useAnimationObserver = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animated-element');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Dividers
    const dividerElements = document.querySelectorAll('.section-divider');
    const dividerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          dividerObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    dividerElements.forEach(el => {
      dividerObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      dividerObserver.disconnect();
    };
  }, []);
};