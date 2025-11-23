document.addEventListener("DOMContentLoaded", () => {

  const generateBtn = document.getElementById("generate-html-btn");

  generateBtn.addEventListener("click", () => {

    // Collect all form data
    const first = document.getElementById("first-name").value;
    const middle = document.getElementById("middle-name").value;
    const last = document.getElementById("last-name").value;
    const nickname = document.getElementById("nickname").value;
    const divider = document.getElementById("divider").value;
    const mascotAdj = document.getElementById("mascot-adjective").value;
    const mascotAnimal = document.getElementById("mascot-animal").value;

    const imgSrc = document.getElementById("profile-pic").src;
    const caption = document.getElementById("caption").value;

    const personalBG = document.getElementById("personal-bg").value;
    const professionalBG = document.getElementById("professional-bg").value;
    const academicBG = document.getElementById("academic-bg").value;
    const primaryComputer = document.getElementById("primary-computer").value;

    const courses = document.getElementById("courses-text").value
      .split("\n")
      .map(c => c.trim())
      .filter(c => c !== "");

    const quote = document.getElementById("quote").value;
    const author = document.getElementById("author").value;

    // Build the HTML output (literal HTML code)
    let htmlOutput =
`<h2>Introduction HTML</h2>
<h3>${first} ${middle} ${last} ${divider} ${nickname} ★ ${mascotAdj} ${mascotAnimal}</h3>

<figure>
    <img src="${imgSrc}" alt="${caption}" />
    <figcaption>${caption}</figcaption>
</figure>

<ul>
    <li><strong>Personal Background:</strong> ${personalBG}</li>
    <li><strong>Professional Background:</strong> ${professionalBG}</li>
    <li><strong>Academic Background:</strong> ${academicBG}</li>
    <li><strong>Primary Computer:</strong> ${primaryComputer}</li>
</ul>

<h3>Courses I'm Taking & Why</h3>
<ul>`;

    courses.forEach(c => {
      htmlOutput += `\n    <li>${c}</li>`;
    });

    htmlOutput += `
</ul>

<blockquote>"${quote}" — ${author}</blockquote>

<h3>Links</h3>
<p>
  <a href="https://webpages.charlotte.edu/aabdulk4/" target="_blank">Webspace</a> |
  <a href="https://github.com/aabdulk4-sys" target="_blank">GitHub</a> |
  <a href="https://aabdulk4-sys.github.io/" target="_blank">GitHub Pages</a> |
  <a href="https://github.com/aabdulk4-sys/itis3135" target="_blank">GitHub Course Page</a> |
  <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a> |
  <a href="https://www.codecademy.com/" target="_blank">Codecademy</a> |
  <a href="https://linkedin.com/in/ayah-abdulkareem" target="_blank">LinkedIn</a>
</p>`;
    

    // Replace form with code output
    const main = document.querySelector("main");
    main.innerHTML = `
      <h2>Introduction HTML</h2>
      <section>
        <pre><code class="language-html">${htmlOutput
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</code></pre>
      </section>
    `;

    // Activate highlight.js
    hljs.highlightAll();
  });
});
