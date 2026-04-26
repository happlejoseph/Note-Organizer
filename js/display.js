

let notesContainer = document.getElementById('notes');

let allNotes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes () {
    notesContainer.innerHTML = "";

    allNotes.forEach((note, index)=> {
        notesContainer.innerHTML +=
        `
        <div class="note">
            <h3>${note.title}</h3>
            <p>${note.content}</p>

            <button class="edit-btn" onclick="editNote(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
        </div>

        `
    });
}

function deleteNote (index) {
    allNotes.splice(index, 1);
    alert('you want to delete this note!');
    localStorage.setItem("notes", JSON.stringify(allNotes));
    alert('Deleted!');
    displayNotes ();
    
}
function goBack() {
    window.location.href = '../index.html';
}

function editNote(index) {
    window.location.href = `edit.html?index=${index}`;
}

displayNotes ();
