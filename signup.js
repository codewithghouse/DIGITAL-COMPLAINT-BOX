document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    return;
  }

  // For now: show success message
  alert("Signup successful! You can now login.");

  // You can redirect to login page if needed
  // window.location.href = "index.html";
});
