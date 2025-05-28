document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Example validation (can be replaced with real backend logic)
    // if (email === "user@example.com" && password === "password123") {
    //   alert("Login successful!");
    //   // window.location.href = "dashboard.html"; // If you want to redirect
    // } else {
    //   alert("Invalid credentials. Please try again.");
    // }
  });
  