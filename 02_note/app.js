const inputElement = document.getElementById('title')
const craeteBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// function render() {
//     listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[0]))
// }

// render()

// craeteBtn.onclick = function () {
//     if (inputElement.value.length === 0){
//         return 
//     }

//     listElement.insertAdjacentHTML('beforeend',getNoteTemplate(inputElement.value))
  
//     inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//     <span>${title}</span>
//     <span>
//       <span class="btn btn-small btn-success">&check;</span>
//       <span class="btn btn-small btn-danger">&times;</span>
//     </span>
//     </li>
//     `
// }

let notes = [
    {
        title:'XYU',
        completed: false
    },
    {
        title:'PIZDA',
        completed: true
    }
]

function render() {
    listElement.innerHTML = ''
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[i], i))
    }
}

render()

craeteBtn.onclick = function () {
    if (inputElement.value.length === 0){
        return 
    }

    let newNotes = {
        title: inputElement.value,
        completed: false
    }
    notes.push(newNotes)
    render()

    inputElement.value = ''
}

listElement.onclick = function (event) {
    if(event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.slice(index, 1)
        }

        render()
    }
}

function getNoteTemplate(note, index) {
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class=${note.completed ? "text-decoration-line-through": ""}>${note.title}</span>
    <span>
      <span class="btn btn-small btn-${note.completed ? "warning" : "success"}" data-index='${index}' data-type="toggle">&check;</span>
      <span class="btn btn-small btn-danger" data-type="remove">&times;</span>
    </span>
    </li>
    `
}
