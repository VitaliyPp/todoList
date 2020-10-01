let input =    document.getElementById('input');
let main =     document.getElementById('main');
let modal =    document.getElementById('modal');
let modInput = document.getElementById('mod');
let save =     document.getElementById('save');
let add =      document.getElementById('add').onclick = Add;
let clear =    document.getElementById('deleteAll').onclick = deleteAll;

function Add() {
  function repeat() {
    for (let el of main.childNodes) {
      if (input.value === el.id) return false
    }
    return true
  }

  if (input.value.length >= 3 && repeat()) {

    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', input.value);

    let newRandText = document.createElement('p');

    let renameButton = document.createElement('button');
    renameButton.onclick = Rename;
    renameButton.innerHTML = 'Rename';

    let removeButton = document.createElement('button');
    removeButton.onclick = Remove;
    removeButton.innerHTML = 'Delete';

    let hr = document.createElement('hr');
    let node = document.createTextNode(input.value);

    newRandText.appendChild(node);
    newDiv.append(newRandText, renameButton, removeButton, hr);

    main.appendChild(newDiv);

    input.value = '';
  } else {
    input.value = '';
  }

  function Remove(e) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }

  function Rename(e) {
    modal.style.display = 'block'; 
    
    save.onclick = back;
    function back() {
      if (modInput.value.length >= 3) {
        e.target.parentNode.childNodes[0].innerHTML = modInput.value;      
        e.target.parentNode.id = modInput.value;
        modInput.value = '';
        modal.style.display = 'none'
      } else {
        modInput.value = '';
      }
    }
  }
}

function deleteAll () {
  while (main.firstChild) main.removeChild(main.firstChild);
}
