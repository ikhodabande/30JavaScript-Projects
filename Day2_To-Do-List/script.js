const inputBox = document.getElementById('input-text');
const listContainer = document.getElementById('list-container');
const inputBtn = document.getElementById('inputBtn');


function addTask(){
  if(inputBox.value === ""){
    alert('You Must Write Something!');
  }else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

listContainer.addEventListener("click",(e)=>{
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, false);


inputBox.addEventListener("keypress", (e)=>{
  if(e.key === "Enter"){
    addTask();
  }
} )
