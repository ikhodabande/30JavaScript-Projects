const accessKey = 'vTqEVQzkWPcq9HCEv7j90m5J_y14ntE5Y-4plq0QuK8';

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchBtn = document.getElementById("show-more-btn");

let keyboard = '';
let page = 1;

async function searchImage(){
  keyboard = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyboard}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if(page === 1){
    searchResult.innerHTML = "";
  }

  const results = data.results ;
  results.map((result)=>{
     const image = document.createElement("img");
     image.src = result.urls.small;
     const imageLink = document.createElement("a");
     imageLink.href = result.links.html;
     imageLink.target = "_blank";

     imageLink.appendChild(image);
     searchResult.appendChild(imageLink);
  })

  searchBtn.style.display = "block";
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

searchBtn.addEventListener("click",()=>{
  page++;
  searchImage();
})