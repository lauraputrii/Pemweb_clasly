document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  alert(`Registering: ${name} (${email})`);
});
