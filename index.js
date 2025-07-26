const addBtn = document.getElementById("add-btn");
const noteInput = document.getElementById("note-input");
const notesContainer = document.getElementById("notes-container");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => {
    const noteCard = document.createElement("div");
    noteCard.className =
      "bg-white p-4 shadow rounded flex justify-between items-start text-black";
    noteCard.innerHTML = `
      <span>${note}</span>
      <button class="text-red-500 font-bold" onclick="deleteNote(${index})">🗑</button>
    `;
    notesContainer.appendChild(noteCard);
  });
}

function addNote() {
  const noteText = noteInput.value.trim();
  if (!noteText) return;

  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

addBtn.addEventListener("click", addNote);
noteInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addNote();
});

renderNotes();
