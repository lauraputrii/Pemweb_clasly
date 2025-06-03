const addBtn = document.getElementById("addNoteBtn");
const addMenu = document.getElementById("addMenu");
const container = document.getElementById("notes-container");

addBtn.addEventListener("click", () => {
  addMenu.classList.toggle("hidden");
});

function addFolder() {
  const folderName = prompt("Nama folder catatan:");
  if (folderName) {
    const folder = document.createElement("div");
    folder.className = "folder";
    folder.innerText = folderName;
    folder.onclick = () => {
      window.location.href = "folder.html";
    };
    container.appendChild(folder);
  }
  addMenu.classList.add("hidden");
}

function addNote() {
  window.location.href = "note-template.html";
}

