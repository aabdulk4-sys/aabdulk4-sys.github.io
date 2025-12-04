

document.addEventListener("DOMContentLoaded", () => {
    const filter = document.getElementById("filter");
    const rows = document.querySelectorAll("#events-table tr[data-location]");
  
    if (!filter || rows.length === 0) return;
  
    filter.addEventListener("change", () => {
      const value = filter.value;
  
      rows.forEach(row => {
        const loc = row.getAttribute("data-location");
  
        if (value === "all" || value === loc) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
  