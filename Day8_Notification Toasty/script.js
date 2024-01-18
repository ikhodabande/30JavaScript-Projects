let toastBox = document.getElementById("toastBox")
let successMsg = "<i class="fa-solid fa-circle-check"></i> Successfully Submitted";
let errorMsg = "Please fix the error";
let InvalidMsg = "Invalid Msg, try again!";


function showToast(msg){
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);


  if(msg.includes('error')){
    toast.classList.add('error')
  }
  if(msg.includes('Invalid')){
    toast.classList.add('Invalid')
  }
  if(msg.includes('Success')){
    toast.classList.add('success')
  }
 
  
}