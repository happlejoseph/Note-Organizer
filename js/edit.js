

let titleInput = document.getElementById("editTitle");
let contentInput = document.getElementById("editContent");

let allNotes = JSON.parse(localStorage.getItem("notes")) || [];

let urlParams = new URLSearchParams(window.location.search);
let index = Number(urlParams.get('index'));

if (allNotes[index]) {
    titleInput.value = allNotes[index].title;
    contentInput.value = allNotes[index].content;
}

function updateNote() {

    let updatedTitle = titleInput.value;
    let updatedContent = contentInput.value;

    if (updatedContent === "" || updatedTitle === "") {
        alert('Fill all fields!');
        return;
        
    }

    allNotes[index] = {
        title : updatedTitle,
        content : updatedContent
    };

    localStorage.setItem("notes", JSON.stringify(allNotes));
    alert('Note Updated!');
    window.location.href = "display.html";
}