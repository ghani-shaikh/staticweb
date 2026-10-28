
document.getElementById("year").textContent =
  new Date().getFullYear();

document.getElementById("welcomeBtn").addEventListener("click", function () {
  document.getElementById("message").textContent =
    "Welcome to DevOps Hub! Start learning and build your first cloud project.";
});
