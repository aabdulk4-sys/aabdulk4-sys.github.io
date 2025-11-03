document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("generate-json-btn");
    if (!btn) return;
  
    btn.addEventListener("click", () => {
      const f = id => document.getElementById(id)?.value || "";
  
      const data = {
        firstName: f("first-name"),
        middleInitial: f("middle-name"),
        lastName: f("last-name"),
        preferredName: f("nickname"),
        divider: f("divider"),
        mascotAdjective: f("mascot-adjective"),
        mascotAnimal: f("mascot-animal"),
        image: f("image"),
        imageCaption: f("caption"),
        personalStatement: "Hi, my name is Ayah. I’m a senior (legally a sophomore since I earned my associate’s degree in high school) majoring in Computer Science with a concentration in Human Computer Interaction. I enjoy spending time with my friends and family, and I love traveling and photography, especially car photography.",
        personalBackground: f("personal-bg"),
        professionalBackground: f("professional-bg"),
        academicBackground: f("academic-bg"),
        primaryComputer: f("primary-computer"),
        courses: [
          { department: "ITIS", number: "4350", name: "Design Prototyping", reason: "Required course; will teach me how to sketch and prototype on paper." },
          { department: "ITIS", number: "3135", name: "Front-End Web Application Development", reason: "Required course; will teach me about web applications." },
          { department: "ITIS", number: "3130", name: "Introduction to Human-Centered Computing", reason: "Required course; will teach me how to prioritize user needs, experiences, and ethical considerations." },
          { department: "ITIS", number: "4353", name: "Social Technology Design", reason: "Will examine designs for social media platforms and help me understand the social impact of spending at least part of our lives online." }
        ],
        quote: f("quote"),
        author: f("author"),
        links: [
          { name: "Webspace", href: "https://webpages.charlotte.edu/aabdulk4/" },
          { name: "GitHub", href: "https://github.com/aabdulk4-sys" },
          { name: "GitHub Pages", href: "https://aabdulk4-sys.github.io/" },
          { name: "GitHub Course Page", href: "https://github.com/aabdulk4-sys/itis3135" },
          { name: "freeCodeCamp", href: "https://www.freecodecamp.org/" },
          { name: "Codecademy", href: "https://www.codecademy.com/" },
          { name: "LinkedIn", href: "https://linkedin.com/in/ayah-abdulkareem" }
        ]
      };
  
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.textContent = JSON.stringify(data, null, 2);
      code.className = "language-json";
      pre.appendChild(code);
  
      document.getElementById("intro-form").replaceWith(pre);
      document.querySelector("h2").textContent = "Introduction JSON";
      if (window.hljs) hljs.highlightAll();
    });
  });
  