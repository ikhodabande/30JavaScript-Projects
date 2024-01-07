const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click",()=>{

  let inputBox = document.createElement("p");
  let inputImg = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  inputImg.src = "./images/delete.png";

  notesContainer.appendChild(inputBox).appendChild(inputImg)


})


notesContainer.addEventListener("click", (e)=>{
  if(e.target.tagName === "IMG" ){
    e.target.parentElement.remove();
  }
})