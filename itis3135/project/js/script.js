document.addEventListener("DOMContentLoaded", () => {
    const current = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(link => {
      if (link.getAttribute("href") === current) link.classList.add("active");
    });
  
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