const questions = [
  {
    question : 'which is largest animal in the world?',
    ansewrs : [
      {text : 'Shark', correct : false},
      {text : 'Blue-whale', correct : true},
      {text : 'Elephant', correct : false},
      {text : 'Girrafe', correct : false},
    ]
  },
  {
    question : 'which is largest animal in the world?',
    ansewrs : [
      {text : 'Shark', correct : false},
      {text : 'Blue-whale', correct : false},
      {text : 'Elephant', correct : false},
      {text : 'Girrafe', correct : true},
    ]
  },
  {
    question : 'which is largest animal in the world?',
    ansewrs : [
      {text : 'Shark', correct : true},
      {text : 'Blue-whale', correct : false},
      {text : 'Elephant', correct : false},
      {text : 'Girrafe', correct : false},
    ]
  },
  {
    question : 'which is largest animal in the world?',
    ansewrs : [
      {text : 'Shark', correct : false},
      {text : 'Blue-whale', correct : false},
      {text : 'Elephant', correct : true},
      {text : 'Girrafe', correct : false},
    ]
  },
];

const questionElement = document.getElementById("question") ;
const ansewrButtons = document.getElementById("ansewr-btn") ;
const nextButton = document.getElementById("next-btn") ;

let currentQuestionIndex = 0;
let score = 0 ;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0 ;
  nextButton.innerHTML = "Next";
  showQuestion();
}


function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1 ;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.ansewrs.forEach(ansewr => {
    const button = document.createElement("button");
    button.innerHTML = ansewr.text ;
    button.classList.add("btn") ;
    ansewrButtons.appendChild(button);
    if(ansewr.correct){
      button.dataset.correct = ansewr.correct;
    }
    button.addEventListener("click", selectAnsewr);
     
  });
}


function resetState(){
  nextButton.style.display = "none";
  while(ansewrButtons.firstChild){
    ansewrButtons.removeChild(ansewrButtons.firstChild)
  }
}

function selectAnsewr(e){
 const selectedBtn = e.target ;
 const isCorrect = selectedBtn.dataset.correct === "true";

 if(isCorrect){
  selectedBtn.classList.add("correct");
  score ++ ;
 }
 else {
  selectedBtn.classList.add("incorrect");
 }
 Array.from(ansewrButtons.children).forEach(button=>{
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled = true;
 });
 nextButton.style.display = "block";

}

function showScore(){
  resetState();
  questionElement.innerHTML = `You Scored ${score} our of ${questions.length}!`
}

nextButton.addEventListener("click",()=>{
  currentQuestionIndex ++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
})


startQuiz();