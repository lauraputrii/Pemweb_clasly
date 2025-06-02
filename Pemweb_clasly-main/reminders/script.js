document.addEventListener("DOMContentLoaded", () => {
  const reminderTime = document.getElementById("reminderTime");
  const repeat = document.getElementById("repeat");
  const repeatIntervalContainer = document.getElementById("repeatIntervalContainer");
  const repeatInterval = document.getElementById("repeatInterval");
  const savedMessage = document.getElementById("savedMessage");

  // Tampilkan dropdown interval hanya jika "ya" dipilih
  repeat.addEventListener("change", () => {
    if (repeat.value === "yes") {
      repeatIntervalContainer.style.display = "block";
    } else {
      repeatIntervalContainer.style.display = "none";
    }
  });

  // Simpan pengaturan ke localStorage
  document.getElementById("reminderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const config = {
      reminderTime: parseInt(reminderTime.value),
      repeat: repeat.value === "yes",
      repeatInterval: repeat.value === "yes" ? parseInt(repeatInterval.value) : null
    };

    localStorage.setItem("classlyReminderSettings", JSON.stringify(config));

    savedMessage.classList.remove("hidden");
    setTimeout(() => savedMessage.classList.add("hidden"), 3000);
  });
});