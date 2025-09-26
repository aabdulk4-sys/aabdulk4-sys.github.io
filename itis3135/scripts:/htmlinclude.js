document.addEventListener("DOMContentLoaded", function () {
    const includeElements = document.querySelectorAll("[data-include]");
    includeElements.forEach(el => {
      const file = el.getAttribute("data-include");
      fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
        })
        .catch(err => {
          el.innerHTML = "<p>Could not load " + file + "</p>";
        });
    });
  });
  