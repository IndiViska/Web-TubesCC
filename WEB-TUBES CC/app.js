function openModal() {
  document.getElementById("modalOverlay").style.display = "block";
  document.getElementById("modalWorkshop").style.display = "block";
}

function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
  document.getElementById("modalWorkshop").style.display = "none";
}

document.getElementById("workshopForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(this);
  console.log(Object.fromEntries(data));
});

function hapusWorkshop(idWorkshop, judulWorkshop) {
  const konfirmasi = confirm(
    `Apakah kamu yakin ingin menghapus workshop "${judulWorkshop}" dari database?`
  );

  if (konfirmasi) {
    const card = document.getElementById(idWorkshop);
    if (card) {
      card.remove();
    }

    console.log(`Workshop "${judulWorkshop}" berhasil dihapus`);
  } else {
    console.log("Penghapusan dibatalkan");
  }
}

const workshopData = {
  id: "workshop-1",
  judul: "Deployment Aplikasi ke Cloud",
  tanggal: "2025-10-11",
  waktu: "21:00",
  lokasi: "https://us02web.zoom.example.com/j/91234567890",
  kapasitas: 50,
  deskripsi: "Cara menjalankan aplikasi di cloud agar dapat diakses secara online dan skalabel."
};

window.onload = function () {
  document.getElementById("workshopId").value = workshopData.id;
  document.getElementById("judul").value = workshopData.judul;
  document.getElementById("tanggal").value = workshopData.tanggal;
  document.getElementById("waktu").value = workshopData.waktu;
  document.getElementById("lokasi").value = workshopData.lokasi;
  document.getElementById("kapasitas").value = workshopData.kapasitas;
  document.getElementById("deskripsi").value = workshopData.deskripsi;
};

document.getElementById("editWorkshopForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const updatedWorkshop = {
    id: document.getElementById("workshopId").value,
    judul: document.getElementById("judul").value,
    tanggal: document.getElementById("tanggal").value,
    waktu: document.getElementById("waktu").value,
    lokasi: document.getElementById("lokasi").value,
    kapasitas: document.getElementById("kapasitas").value,
    deskripsi: document.getElementById("deskripsi").value
  };

  console.log("Data berhasil diperbarui:", updatedWorkshop);

  alert("Workshop berhasil diperbarui!");
  window.location.href = "workshopList.html";
});

function hapusPeserta(idPeserta, namaPeserta) {
  const konfirmasi = confirm(
    `Apakah Anda yakin ingin menghapus peserta "${namaPeserta}" dari database?`
  );

  if (!konfirmasi) return;

  const card = document.getElementById(idPeserta);
  if (card) {
    card.remove();
  }

  console.log(`Peserta ${namaPeserta} (${idPeserta}) dihapus dari database`);

}

function daftarWorkshop(namaWorkshop) {
  const konfirmasi = confirm(
    `Apakah Anda yakin ingin menambahkan workshop "${namaWorkshop}" ke daftar Anda?`
  );

  if (konfirmasi) {
    alert("Workshop berhasil ditambahkan!");
  }
}

