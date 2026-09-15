const inputTugas = document.getElementById("input-tugas");
const btnTambah = document.getElementById("btn-tambah");
const daftarTugas = document.getElementById("daftar-tugas");

btnTambah.addEventListener("click", function() {
    let teksTugas = inputTugas.value;

    if (teksTugas === "") {
        alert("Jadwal tidak boleh kosong!");
    } else {
        daftarTugas.innerHTML += `
            <li>
                <input type="checkbox" onchange="this.nextElementSibling.classList.toggle('completed')">
                <span>${teksTugas}</span>
                <button class="btn-hapus" onclick="this.parentElement.remove()">Hapus</button>
            </li>
        `;

        inputTugas.value = "";
    }
});