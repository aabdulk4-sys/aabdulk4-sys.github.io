document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const clearBtn = document.getElementById("clearBtn");
    const addCourseBtn = document.getElementById("addCourse");
    const coursesDiv = document.getElementById("courses");
  
    // Prevent default submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      displayIntroResult();
    });
  
    // Clear button
    clearBtn.addEventListener("click", () => {
      form.reset();
      document.querySelectorAll("input, textarea").forEach((el) => (el.value = ""));
      document.getElementById("preview").src = "images/ayah_mirror.jpg";
    });
  
    // Add Course button
    addCourseBtn.addEventListener("click", () => {
      const newCourse = document.createElement("div");
      newCourse.classList.add("course");
      newCourse.innerHTML = `
        <input type="text" name="dept" placeholder="Dept" required>
        <input type="text" name="number" placeholder="Number" required>
        <input type="text" name="name" placeholder="Course Name" required>
        <input type="text" name="reason" placeholder="Reason" required>
        <button type="button" class="deleteCourse">❌</button>
      `;
      coursesDiv.appendChild(newCourse);
  
      // Add delete functionality for new course
      newCourse.querySelector(".deleteCourse").addEventListener("click", () => {
        newCourse.remove();
      });
    });
  
    // Image preview update when new file is uploaded
    const profilePicInput = document.querySelector('input[name="profilePic"]');
    const previewImg = document.getElementById("preview");
    profilePicInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => (previewImg.src = e.target.result);
        reader.readAsDataURL(file);
      } else {
        previewImg.src = "images/ayah_mirror.jpg";
      }
    });
  });
  
  /* Displays the generated introduction page */
  function displayIntroResult() {
    const form = document.getElementById("introForm");
    const data = new FormData(form);
    const main = document.querySelector("main");
  
    const bullets = Array.from({ length: 7 }, (_, i) => data.get(`bullet${i + 1}`))
      .filter(Boolean)
      .map((b) => `<li>${b}</li>`)
      .join("");
  
    const courses = Array.from(document.querySelectorAll("#courses .course"))
      .map((c) => {
        const dept = c.querySelector('[name="dept"]').value;
        const num = c.querySelector('[name="number"]').value;
        const name = c.querySelector('[name="name"]').value;
        const reason = c.querySelector('[name="reason"]').value;
        return `<li><strong>${dept} ${num} - ${name}:</strong> ${reason}</li>`;
      })
      .join("");
  
    const links = [1, 2, 3, 4, 5]
      .map((i) => {
        const url = data.get(`link${i}`);
        return url ? `<a href="${url}" target="_blank">${url}</a>` : "";
      })
      .join(" | ");
  
    main.innerHTML = `
      <h2>Introduction Form Result</h2>
      <figure>
        <img src="${document.getElementById("preview").src}" alt="Profile Picture" width="250">
        <figcaption>${data.get("picCaption")}</figcaption>
      </figure>
      <p>${data.get("statement")}</p>
      <ul>
        <li><strong>Personal Background:</strong> ${data.get("bullet1")}</li>
        <li><strong>Professional Background:</strong> ${data.get("bullet3")}</li>
        <li><strong>Academic Background:</strong> ${data.get("bullet5")}</li>
        <li><strong>Primary Computer:</strong> ${data.get("bullet6")}</li>
      </ul>
      <h3>Courses I'm Taking & Why</h3>
      <ul>${courses}</ul>
      <blockquote>
        "${data.get("quote")}"<br>
        — ${data.get("quoteAuthor")}
      </blockquote>
      <p><strong>Funny Thing:</strong> ${data.get("funnyThing") || "N/A"}</p>
      <p><strong>Something I'd Like to Share:</strong> ${data.get("somethingShare") || "N/A"}</p>
      <hr>
      <p>${links}</p>
      <button id="resetResult">↩ Reset Form</button>
    `;
  
    // Add reset button behavior
    document.getElementById("resetResult").addEventListener("click", () => location.reload());
  }
  