const inputTugas = document.getElementById("input-tugas");
const btnTambah = document.getElementById("btn-tambah");
const daftarTugas = document.getElementById("daftar-tugas");

let idCounter = 0;

btnTambah.addEventListener("click", function() {
    let teksTugas = inputTugas.value;

    if (teksTugas === "") {
        alert("Jadwal tidak boleh kosong!");
    } else {
        idCounter++;

        daftarTugas.innerHTML = daftarTugas.innerHTML + 
            '<li id="item-' + idCounter + '">' +
                '<input type="checkbox" id="check-' + idCounter + '" onchange="toggleTugas(' + idCounter + ')"> ' +
                '<span id="teks-' + idCounter + '">' + teksTugas + '</span> ' +
                '<button onclick="hapusTugas(' + idCounter + ')">Hapus</button>' +
            '</li>';

        inputTugas.value = "";
    }
});

function toggleTugas(id) {
    const teks = document.getElementById("teks-" + id);
    const checkbox = document.getElementById("check-" + id);

    if (checkbox.checked) {
        teks.style.textDecoration = "line-through";
        teks.style.color = "gray";
    } else {
        teks.style.textDecoration = "none";
        teks.style.color = "black";
    }
}

function hapusTugas(id) {
    const item = document.getElementById("item-" + id);
    item.style.display = "none";
}