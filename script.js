function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (!text) return alert("Input tidak boleh kosong!");

    let li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" onchange="this.nextElementSibling.classList.toggle('completed')">
        <span>${text}</span>
        <button onclick="this.parentElement.remove()">hapus</button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}