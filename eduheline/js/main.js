// Basic contact form handling (frontend only for now)
document.addEventListener("DOMContentLoaded", function () {

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      // For now, just show success message
      alert("Thank you for contacting us, " + name + "! We'll get back to you soon.");

      contactForm.reset();
    });
  }

  // Blog filter
  const blogFilter = document.getElementById("categoryFilter");
  if (blogFilter) {
    blogFilter.addEventListener("change", function () {
      const selectedCategory = blogFilter.value;

      document.querySelectorAll(".blog-card").forEach(card => {
        if (selectedCategory === "all" || card.getAttribute("data-category") === selectedCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Resource filters
  const subjectFilter = document.getElementById("subjectFilter");
  const searchBox = document.getElementById("searchBox");

  function filterResources() {
    const selectedSubject = subjectFilter?.value.toLowerCase();
    const searchText = searchBox?.value.toLowerCase();

    document.querySelectorAll(".resource-card").forEach(card => {
      const subjectMatch = selectedSubject === "all" || card.getAttribute("data-subject") === selectedSubject;
      const titleMatch = card.getAttribute("data-title").toLowerCase().includes(searchText);

      if (subjectMatch && titleMatch) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  if (subjectFilter) subjectFilter.addEventListener("change", filterResources);
  if (searchBox) searchBox.addEventListener("input", filterResources);

});