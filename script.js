document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll("#navbar ul li a");

  function fadeInSection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }

  const sectionObserver = new IntersectionObserver(fadeInSection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  menuToggle.addEventListener("click", function() {
    if (navbar.style.width === "250px") {
      navbar.style.width = "0";
    } else {
      navbar.style.width = "250px";
    }
  });


  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navbar.style.width = "0";
    });
  });
});



