function saveNote() {
    var noteInput = document.getElementById("noteInput").value;
    if (noteInput.trim() === "") {
        alert("Por favor, ingresa una nota válida.");
        return;
    }

    var noteList = document.getElementById("noteList");
    var li = document.createElement("li");
    li.textContent = noteInput;
    noteList.appendChild(li);

    // Guardar la nota en el almacenamiento local del navegador
    localStorage.setItem("note_" + Date.now(), noteInput);

    // Limpiar el campo de entrada después de guardar la nota
    document.getElementById("noteInput").value = "";
}

// Cargar las notas guardadas al cargar la página
window.onload = function () {
    var noteList = document.getElementById("noteList");
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.includes("note_")) {
            var li = document.createElement("li");
            li.textContent = localStorage.getItem(key);
            noteList.appendChild(li);
        }
    }
};
