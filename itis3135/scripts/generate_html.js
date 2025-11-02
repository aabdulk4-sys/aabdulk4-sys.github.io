document.addEventListener("DOMContentLoaded", () => {
    const generateHTMLButton = document.getElementById("generate-html-btn");
    const formElement = document.querySelector("form");
  
    generateHTMLButton.addEventListener("click", () => {
      const firstName = document.getElementById("first-name").value || "Ayah";
      const middleName = document.getElementById("middle-name").value || "A.";
      const lastName = document.getElementById("last-name").value || "Abdulkareem";
      const nickname = document.getElementById("nickname").value || "Ambitious Antelope";
      const imageSrc = document.getElementById("profile-pic").value || "images/ayah_mirror.jpg";
      const caption = document.getElementById("caption").value || "Post-hired mirror picture.";
      const personal = document.getElementById("personal-bg").value;
      const professional = document.getElementById("professional-bg").value;
      const academic = document.getElementById("academic-bg").value;
      const quote = document.getElementById("quote").value;
      const author = document.getElementById("author").value;
  
      const htmlContent = `
  <h2>Introduction HTML</h2>
  <h3>${firstName} ${middleName} "${nickname}" ${lastName} ★ Ambitious Antelope</h3>
  <figure>
      <img src="${imageSrc}" alt="Photo of ${firstName}" />
      <figcaption>${caption}</figcaption>
  </figure>
  <ul>
      <li><strong>Personal Background:</strong> ${personal}</li>
      <li><strong>Professional Background:</strong> ${professional}</li>
      <li><strong>Academic Background:</strong> ${academic}</li>
  </ul>
  <p><em>"${quote}"</em> — ${author}</p>
  `;
  
      formElement.outerHTML = `
        <section id="generated-html">
          <pre><code class="language-html">${escapeHTML(htmlContent)}</code></pre>
        </section>
      `;
  
      hljs.highlightAll();
    });
  
    function escapeHTML(str) {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
  });
  