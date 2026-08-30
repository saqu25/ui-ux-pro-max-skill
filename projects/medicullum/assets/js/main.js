// Medicullum — shared interactions (no build step, vanilla JS)
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initStickyHeader();
    initScrollReveal();
    initCounters();
    initFAQAccordions();
    initFormFeedback();
    initFilterTabs();
  });

  function initFilterTabs() {
    document.querySelectorAll("[data-filter-tabs]").forEach(function (group) {
      var tabs = group.querySelectorAll("[data-filter-tab]");
      var targetSelector = group.getAttribute("data-filter-tabs");
      var items = document.querySelectorAll(targetSelector + " [data-filter-item]");

      tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
          var value = tab.getAttribute("data-filter-tab");

          tabs.forEach(function (t) {
            t.classList.remove("bg-navy", "text-white");
            t.classList.add("bg-white", "text-navy");
          });
          tab.classList.add("bg-navy", "text-white");
          tab.classList.remove("bg-white", "text-navy");

          items.forEach(function (item) {
            var cat = item.getAttribute("data-filter-item");
            var show = value === "all" || cat === value;
            item.classList.toggle("hidden", !show);
          });
        });
      });
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var panel = document.querySelector("[data-nav-panel]");
    if (!toggle || !panel) return;

    toggle.addEventListener("click", function () {
      var isOpen = panel.classList.toggle("flex");
      panel.classList.toggle("hidden", !isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("overflow-hidden", isOpen);
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        panel.classList.add("hidden");
        panel.classList.remove("flex");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("overflow-hidden");
      });
    });
  }

  function initStickyHeader() {
    var header = document.querySelector("[data-site-header]");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initScrollReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  function initCounters() {
    var counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;

    var animate = function (el) {
      var target = parseFloat(el.getAttribute("data-counter"));
      var suffix = el.getAttribute("data-suffix") || "";
      var duration = 1400;
      var start = null;

      var step = function (timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.floor(eased * target);
        el.textContent = value + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      };
      window.requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animate);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { observer.observe(el); });
  }

  function initFAQAccordions() {
    document.querySelectorAll("[data-faq-item]").forEach(function (item) {
      var trigger = item.querySelector("[data-faq-trigger]");
      var panel = item.querySelector("[data-faq-panel]");
      var icon = item.querySelector("[data-faq-icon]");
      if (!trigger || !panel) return;

      trigger.addEventListener("click", function () {
        var isOpen = item.getAttribute("data-open") === "true";
        item.setAttribute("data-open", String(!isOpen));
        panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : "0px";
        if (icon) icon.style.transform = !isOpen ? "rotate(45deg)" : "rotate(0deg)";
      });
    });
  }

  function initFormFeedback() {
    document.querySelectorAll("[data-lead-form]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        var requiredFields = form.querySelectorAll("[required]");
        var valid = true;
        requiredFields.forEach(function (field) {
          field.classList.add("touched");
          if (!field.checkValidity()) valid = false;
        });

        if (!valid) {
          form.querySelector(":invalid")?.focus();
          return;
        }

        var successEl = form.parentElement.querySelector("[data-form-success]");
        form.classList.add("hidden");
        if (successEl) successEl.classList.add("visible", "flex");
      });
    });
  }
})();
