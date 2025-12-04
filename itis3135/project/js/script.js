
document.addEventListener("DOMContentLoaded", () => {
  // Highlight current nav link
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  // Simple form validation + feedback
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      const required = form.querySelectorAll("[required]");
      for (let input of required) {
        if (!input.value.trim()) {
          alert("⚠️ Please complete all required fields before submitting.");
          e.preventDefault();
          return;
        }
      }
      alert("✅ Thank you! Your message has been submitted.");
    });
  }
});
