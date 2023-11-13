const inputBox = document.getElementById('input-text');
const listContainer = document.getElementById('list-container');

addTask(){
  if(inputBox === ""){
    alert('You Must Write Something!');
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}
