document.querySelectorAll(".nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const sections = document.querySelectorAll(".section, .header");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.background = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.background = "rgba(255, 255, 255, 0.2)";
    }
  });
});

const skillTags = document.querySelectorAll(".skill-tag");
skillTags.forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.05)";
  });

  tag.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

function printResume() {
  window.print();
}

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = "↑";
scrollToTopBtn.className = "scroll-to-top";
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    display: none;
    transition: all 0.3s ease;
    z-index: 1000;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollToTopBtn.addEventListener("mouseenter", function () {
  this.style.transform = "scale(1.1)";
});

scrollToTopBtn.addEventListener("mouseleave", function () {
  this.style.transform = "scale(1)";
});
