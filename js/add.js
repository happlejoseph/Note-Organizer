

let addBtn = document.getElementById('addBtn');
let titleInput = document.getElementById('title');
let contentInput = document.getElementById('content');

let allNotes = JSON.parse(localStorage.getItem("notes")) || [];

addBtn.addEventListener('click', ()=>{

    let title = titleInput.value;
    let content = contentInput.value;

    if (title === "" || content === "") {
        alert('Please add the notes!');
        return;
    }

    let note = {
        title : title,
        content : content
    }

    allNotes.push(note);
    localStorage.setItem("notes", JSON.stringify(allNotes));

    titleInput.value = "";
    contentInput.value = "";

    alert('Note Added!');

});

function goToNotes () {
    window.location.href = 'pages/display.html';
}