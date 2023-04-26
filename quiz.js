
const quiz = [
    {
      question: "What is the capital of Kenya?",
      options: ["Nairobi", "Nakuru", "Eldoret", "Meru"],
      answer: "Nairobi"
    },
    {
      question: "What is the largest continent in the world?",
      options: ["Africa", " Europe", "Asia", "South America"],
      answer: "Asia"
    },
    {
      question: "What city is known as The Eternal city?",
      options: ["Rome", "Paris", "France", "China"],
      answer: "Rome"
    },
    {

        question: "What company was initially known as Blue Ribbon Sports?",
        options: ["Adidas", "Puma", "Nike", "Jordan"],
        answer: "Nike"
      },
      {

        question: "How many bones do we have in an ear?",
        options: ["1", "4", "3", "2"],
        answer: "3"
      }
  ];
  
 
  const questionEl = document.getElementById("question");
  const answerOptionsEl = document.getElementById("answer-options");
  const scoreEl = document.getElementById("score");
  const finalScoreEl = document.getElementById("final-score");
  const submitBtn = document.getElementById("submit-btn");
  const restartBtn = document.getElementById("restart-btn");
  
  let currentQuestionIndex = 0; 
  let score = 0; 
  
 
  function displayQuestion() {
    const currentQuestion = quiz[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answerOptionsEl.innerHTML = "";
    currentQuestion.options.forEach((option) => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      const label = document.createElement("label");
      input.type = "radio";
      input.name = "answer";
      input.value = option;
      label.textContent = option;
      li.appendChild(input);
      li.appendChild(label);
      answerOptionsEl.appendChild(li);
    });
  }
  
 
  function checkAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (!selectedOption) return; 
    const selectedAnswer = selectedOption.value;
    const currentQuestion = quiz[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      score++;
    } else {
      score--;
    }
    scoreEl.textContent = score;
    selectedOption.checked = false; 
  }
  
 
  function displayFinalScore() {
    document.getElementById("question-section").style.display = "none";
    document.getElementById("score-section").style.display = "none";
    finalScoreEl.textContent = score;
    document.getElementById("final-score-section").style.display = "block";
  }
  
 
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.textContent = score;
    document.getElementById("final-score-section").style.display = "none";
    document.getElementById("question-section").style.display = "block";
    document.getElementById("score-section").style.display = "flex";
    displayQuestion();
  }
  
  submitBtn.addEventListener("click", () => {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex === quiz.length) {
      displayFinalScore();
    } else {
      displayQuestion();
    }
  });
  
  restartBtn.addEventListener("click", () => {
    restartQuiz();
  });
  
  
  displayQuestion();