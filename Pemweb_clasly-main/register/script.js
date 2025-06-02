document.getElementById("form").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Registered successfully! You can now log in.");
      window.location.href = "../login/login.html";
    });