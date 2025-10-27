document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const output = document.getElementById("output");
    const clearButton = document.getElementById("clear");
    const addCourseBtn = document.getElementById("addCourse");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      generateIntroPage();
    });
  
    clearButton.addEventListener("click", () => {
      Array.from(form.elements).forEach((el) => {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") el.value = "";
      });
    });
  
    addCourseBtn.addEventListener("click", () => {
      const newCourse = document.createElement("div");
      newCourse.classList.add("course");
      newCourse.innerHTML = `
        <label>Department: <input type="text" required></label>
        <label>Number: <input type="text" required></label>
        <label>Name: <input type="text" required></label>
        <label>Reason: <input type="text"></label>
        <button type="button" class="deleteCourse">Delete</button>
      `;
      document.getElementById("courses").appendChild(newCourse);
  
      newCourse.querySelector(".deleteCourse").addEventListener("click", () => {
        newCourse.remove();
      });
    });
  
    function generateIntroPage() {
      const name = `${form.firstName.value} ${form.middleName.value} ${form.lastName.value}`;
      const photoFile = form.photo.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const photoURL = photoFile ? e.target.result : "images/ayah_mirror.jpg";
  
        output.innerHTML = `
          <h2>${form.firstName.value}'s Introduction Form</h2>
          <figure>
            <img src="${photoURL}" alt="Profile Picture" style="max-width:300px;border-radius:10px;">
            <figcaption>${form.caption.value}</figcaption>
          </figure>
          <p><strong>Personal Statement:</strong> ${form.statement.value}</p>
          <ul>
            <li><strong>Personal Background:</strong> ${form.personal.value}</li>
            <li><strong>Professional Background:</strong> ${form.professional.value}</li>
            <li><strong>Academic Background:</strong> ${form.academic.value}</li>
            <li><strong>Primary Computer:</strong> ${form.computer.value}</li>
          </ul>
          <h3>Courses</h3>
          <ul>${Array.from(document.querySelectorAll(".course")).map(c => `
            <li>${c.querySelectorAll("input")[0].value} ${c.querySelectorAll("input")[1].value}: ${c.querySelectorAll("input")[2].value} — ${c.querySelectorAll("input")[3].value}</li>`).join("")}</ul>
          <blockquote>
            "${form.quote.value}" — ${form.author.value}
          </blockquote>
          <p><a href="#" onclick="location.reload()">Reset and Try Again</a></p>
        `;
  
        form.style.display = "none";
        output.style.display = "block";
      };
  
      if (photoFile) reader.readAsDataURL(photoFile);
      else reader.onload({ target: { result: "images/ayah_mirror.jpg" } });
    }
  });
  