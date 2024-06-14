const accessKey = 'vTqEVQzkWPcq9HCEv7j90m5J_y14ntE5Y-4plq0QuK8';

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const  searchBtn = document.getElementById("search-btn");


let keyboard = '';
let page = 1;

async function searchImage(){
  keyboard = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyboard}&client_id=${accessKey}`

  const response = await fetch(url);
  const date = await response.json();

  console.log(data)
}