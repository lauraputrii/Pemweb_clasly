// Schedule
document.getElementById('scheduleForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const matkul = document.getElementById('matkul').value;
    const hari = document.getElementById('hari').value;
    const jam = document.getElementById('jam').value;
    const jadwal = JSON.parse(localStorage.getItem('jadwal')) || [];
    jadwal.push({ matkul, hari, jam });
    localStorage.setItem('jadwal', JSON.stringify(jadwal));
    this.reset();
    loadJadwal();
  });
  
  function loadJadwal() {
    const container = document.getElementById('jadwalContainer');
    if (!container) return;
    container.innerHTML = '';
  
    const jadwal = JSON.parse(localStorage.getItem('jadwal')) || [];
    if (jadwal.length === 0) {
      container.innerHTML = '<p class="text-center text-muted">Belum ada jadwal. Tambahkan di atas.</p>';
      return;
    }
  
    jadwal.forEach((j, index) => {
      const col = document.createElement('div');
      col.className = 'col-md-4';
  
      const card = document.createElement('div');
      card.className = 'card shadow-sm';
  
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
  
      const title = document.createElement('h5');
      title.className = 'card-title fw-bold';
      title.textContent = j.matkul;
  
      const text = document.createElement('p');
      text.className = 'card-text text-muted';
      text.textContent = `${j.hari}, Jam ${j.jam}`;
  
      cardBody.appendChild(title);
      cardBody.appendChild(text);
      card.appendChild(cardBody);
      col.appendChild(card);
      container.appendChild(col);
    });
  };  
  
  // Notes
  document.getElementById('noteForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const note = document.getElementById('noteInput').value;
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    this.reset();
    loadNotes();
  });
  
  function loadNotes() {
    const list = document.getElementById('noteList');
    if (!list) return;
    list.innerHTML = '';
  
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    if (notes.length === 0) {
      list.innerHTML = '<p class="text-center text-muted">Belum ada catatan. Tambahkan di atas.</p>';
      return;
    }
  
    notes.forEach((n, index) => {
      const col = document.createElement('div');
      col.className = 'col-md-6';
  
      const card = document.createElement('div');
      card.className = 'card shadow-sm';
  
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
  
      const text = document.createElement('p');
      text.className = 'card-text';
      text.textContent = n;
  
      cardBody.appendChild(text);
      card.appendChild(cardBody);
      col.appendChild(card);
      list.appendChild(col);
    });
  };  
  
  // Upload
  document.getElementById('uploadForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const filename = document.getElementById('filename').value;
    const fileList = JSON.parse(localStorage.getItem('files')) || [];
    fileList.push(filename);
    localStorage.setItem('files', JSON.stringify(fileList));
    this.reset();
    loadFiles();
  });
  
  function loadFiles() {
    const list = document.getElementById('fileList');
    if (!list) return;
    list.innerHTML = '';
  
    const files = JSON.parse(localStorage.getItem('files')) || [];
    if (files.length === 0) {
      list.innerHTML = '<p class="text-center text-muted">Belum ada file diunggah.</p>';
      return;
    }
  
    files.forEach(f => {
      const col = document.createElement('div');
      col.className = 'col-md-4';
  
      const card = document.createElement('div');
      card.className = 'card shadow-sm';
  
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
  
      const title = document.createElement('h5');
      title.className = 'card-title fw-bold';
      title.textContent = f;
  
      const text = document.createElement('p');
      text.className = 'card-text text-muted';
      text.innerHTML = `<i class="bi bi-file-earmark"></i> File tersimpan (simulasi)`;
  
      cardBody.appendChild(title);
      cardBody.appendChild(text);
      card.appendChild(cardBody);
      col.appendChild(card);
      list.appendChild(col);
    });
  };  
  