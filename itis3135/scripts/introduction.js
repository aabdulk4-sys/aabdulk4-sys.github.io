document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const addCourseBtn = document.getElementById("addCourseBtn");
    const clearForm = document.getElementById("clearForm");
    const coursesContainer = document.getElementById("coursesContainer");
  
    // Prevent full reload
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      displayResult();
    });
  
    // Clear all fields
    clearForm.addEventListener("click", () => {
      form.reset();
      coursesContainer.innerHTML = "";
    });
  
    // Add new course fields
    addCourseBtn.addEventListener("click", () => {
      const div = document.createElement("div");
      div.innerHTML = `
        <input type="text" placeholder="Dept (ITIS)" class="dept" required>
        <input type="text" placeholder="Number (3135)" class="num" required>
        <input type="text" placeholder="Course Name" class="courseName" required>
        <input type="text" placeholder="Reason" class="reason">
        <button type="button" class="deleteCourse">Delete</button>
      `;
      coursesContainer.appendChild(div);
  
      div.querySelector(".deleteCourse").addEventListener("click", () => div.remove());
    });
  
    // Build the new intro page after submit
    function displayResult() {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const mascotAdj = document.getElementById("mascotAdj").value;
      const mascotAnimal = document.getElementById("mascotAnimal").value;
      const divider = document.getElementById("divider").value;
      const statement = document.getElementById("statement").value;
      const quote = document.getElementById("quote").value;
      const author = document.getElementById("author").value;
  
      const reader = new FileReader();
      const fileInput = document.getElementById("photo").files[0];
  
      reader.onload = () => {
        document.querySelector("main").innerHTML = `
          <h2>Introduction Form</h2>
          <h3>${firstName} ${lastName}</h3>
          <h4>${mascotAdj} ${mascotAnimal}</h4>
          <img src="${reader.result}" alt="User image" style="width:200px;"><br>
          <p>${statement}</p>
          <blockquote>"${quote}" — ${author}</blockquote>
          <p>${divider.repeat(20)}</p>
          <button onclick="location.reload()">Reset Form</button>
        `;
      };
  
      if (fileInput) {
        reader.readAsDataURL(fileInput);
      } else {
        document.querySelector("main").innerHTML = `
          <h2>Introduction Form</h2>
          <h3>${firstName} ${lastName}</h3>
          <h4>${mascotAdj} ${mascotAnimal}</h4>
          <p>${statement}</p>
          <blockquote>"${quote}" — ${author}</blockquote>
          <p>${divider.repeat(20)}</p>
          <button onclick="location.reload()">Reset Form</button>
        `;
      }
    }
  });
  