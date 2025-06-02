const uploadInput = document.getElementById('uploadInput');
const folderGrid = document.getElementById('folderGrid');
const emptyMessage = document.getElementById('emptyMessage');

uploadInput.addEventListener('change', () => {
  const files = Array.from(uploadInput.files);
  if (files.length > 0) {
    emptyMessage.style.display = 'none';
    folderGrid.style.display = 'grid';

    files.forEach(file => {
      const item = document.createElement('div');
      item.className = 'folder-item';
      item.textContent = file.name;
      folderGrid.appendChild(item);
    });
  }
});