// Medicullum — shared site behaviour: mobile nav, scroll reveals, stat counters

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('flex');
      mobileNav.classList.toggle('hidden');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      mobileNav.classList.remove('flex');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Standard scroll reveal for grouped children
    gsap.utils.toArray('[data-reveal-group]').forEach((group) => {
      gsap.from(group.children, {
        opacity: 0,
        y: 24,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: group, start: 'top 85%' }
      });
    });

    // Subtle single-element reveal
    gsap.utils.toArray('[data-reveal]').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 16,
        duration: 0.45,
        ease: 'power1.out',
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
      });
    });

    // Stat counters
    gsap.utils.toArray('[data-counter]').forEach((el) => {
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: () => { el.textContent = Math.round(obj.val).toLocaleString() + suffix; }
          });
        }
      });
    });
  } else {
    // No-motion / reduced-motion fallback: just fill in counters immediately
    document.querySelectorAll('[data-counter]').forEach((el) => {
      el.textContent = Math.round(parseFloat(el.dataset.counter)).toLocaleString() + (el.dataset.suffix || '');
    });
  }
});
