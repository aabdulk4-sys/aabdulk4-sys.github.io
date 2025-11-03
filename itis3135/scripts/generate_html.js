document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("generate-html-btn");
    if (!btn) return;
  
    btn.addEventListener("click", () => {
      const f = id => document.getElementById(id)?.value || "";
  
      const html = `
  <h2>Introduction HTML</h2>
  <h3>${f("first-name")} ${f("middle-name")} ${f("last-name")} ${f("divider")} ${f("mascot-adjective")} ${f("mascot-animal")}</h3>
  <figure>
    <img src="${f("image")}" alt="${f("caption")}" />
    <figcaption>${f("caption")}</figcaption>
  </figure>
  <p>${f("nickname") ? "Preferred name: " + f("nickname") + "<br>" : ""}</p>
  <p><strong>Personal Statement:</strong> Hi, my name is Ayah. I’m a senior (legally a sophomore since I earned my associate’s degree in high school) majoring in Computer Science with a concentration in Human Computer Interaction. I enjoy spending time with my friends and family, and I love traveling and photography, especially car photography.</p>
  <ul>
    <li><strong>Personal Background:</strong> ${f("personal-bg")}</li>
    <li><strong>Professional Background:</strong> ${f("professional-bg")}</li>
    <li><strong>Academic Background:</strong> ${f("academic-bg")}</li>
    <li><strong>Primary Computer:</strong> ${f("primary-computer")}</li>
  </ul>
  <h4>Courses I'm Taking & Why:</h4>
  <pre>${f("courses-text")}</pre>
  <blockquote>"${f("quote")}" — ${f("author")}</blockquote>
  <p>${f("links-text")}</p>`;
  
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.textContent = html.trim();
      code.className = "language-html";
      pre.appendChild(code);
  
      document.getElementById("intro-form").replaceWith(pre);
      document.querySelector("h2").textContent = "Introduction HTML";
      if (window.hljs) hljs.highlightAll();
    });
  });
  