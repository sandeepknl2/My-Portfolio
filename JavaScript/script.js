document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Resume link
  document.getElementById("downloadResume").addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://drive.google.com/your-resume-link", "_blank");
  });

  // Theme toggle
  const themeBtn = document.getElementById("themeToggle");
  let dark = true;
  const root = document.documentElement;
  const setTheme = (darkMode) => {
    if (darkMode) {
      root.style.setProperty("--bg", "#0f1724");
      root.style.setProperty("--card", "#0b1220");
      root.style.setProperty("--text", "#e6eef8");
      root.style.setProperty("--muted", "#a6b0c3");
      root.style.setProperty("--accent", "#ce00bb");
      themeBtn.textContent = "🌙";
    } else {
      root.style.setProperty("--bg", "#f5f7fb");
      root.style.setProperty("--card", "#ffffff");
      root.style.setProperty("--text", "#0b1220");
      root.style.setProperty("--muted", "#555");
      root.style.setProperty("--accent", "#7b1fa2");
      themeBtn.textContent = "☀️";
    }
  };
  themeBtn.addEventListener("click", () => {
    dark = !dark;
    setTheme(dark);
  });
  setTheme(dark);

  // Mobile menu toggle
  const menuBtn = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Projects modal
  const projects = [
    { id: 0, title: "IPL Data Warehouse Management", desc: "Database system for IPL teams, players, matches, and stats.", tech: ["Java","SQL","JDBC","Servlets"] },
    { id: 1, title: "Book Library Management System", desc: "Manage books, users, and transactions (Internship project).", tech: ["Java","SQL","HTML","CSS","JS"] },
  ];
  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.getElementById("closeModal");

  document.querySelectorAll(".detailsBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.closest(".project").dataset.id);
      const p = projects.find((x) => x.id === id);
      modalContent.innerHTML = `<h2>${p.title}</h2><p>${p.desc}</p><p><strong>Tech:</strong> ${p.tech.join(", ")}</p>`;
      modal.setAttribute("aria-hidden", "false");
    });
  });
  closeModal.addEventListener("click", () => modal.setAttribute("aria-hidden", "true"));
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.setAttribute("aria-hidden", "true"); });

  // Contact form (basic)
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent (simulation). Add backend/email integration.");
    e.target.reset();
  });
});
