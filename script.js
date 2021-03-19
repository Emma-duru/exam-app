var trivia = [
  {
    question:
      "What does the acronym USB stand for when referring to a computer port?",
    answerSet: {
      A: "User Should Buy",
      B: "Universal Serial Bus",
      C: "Uber Stretch Bus",
      D: "United States Baseball",
    },
    correctAnswer: "B",
  },
  {
    question:
      "What do you call the small image icons used to express emotions or ideas in digital communication?",
    answerSet: {
      A: "Emojis",
      B: "GIF's",
      C: "JPEG's",
      D: "Texts from Mom",
    },
    correctAnswer: "A",
  },
  {
    question:
      "When referring to a computer monitor, what does the acronym LCD stand for?",
    answerSet: {
      A: "Limited Cypher Ducks",
      B: "Light Collision Detector",
      C: "Laser Color Display",
      D: "Liquid Crystal Display",
    },
    correctAnswer: "D",
  },
  {
    question: "Which of these is NOT a operating system?",
    answerSet: {
      A: "Windows",
      B: "Android",
      C: "Linux",
      D: "Ledges",
    },
    correctAnswer: "D",
  },
  {
    question:
      "When referring to computer memory, what does that acronym RAM stand for?",
    answerSet: {
      A: "Real Awesome Memory",
      B: "Random Access Memory",
      C: "Razor Alignment Memory",
      D: "Reacting Automitic Memory",
    },
    correctAnswer: "B",
  },
  {
    question: 'In computer science, what does "GUI" stand for?',
    answerSet: {
      A: "Graphical User Interface",
      B: "Gooey Ugly Invention",
      C: "GUI Ducks",
      D: "Green Umpire Instincts",
    },
    correctAnswer: "A",
  },
  {
    question:
      "Steve Jobs, Steve Wozniak, and Ronald Wayne founded what company in 1976?",
    answerSet: {
      A: "BMW",
      B: "Apple",
      C: "The Linux Foundation",
      D: "Microsoft",
    },
    correctAnswer: "B",
  },
  {
    question: 'In a website browser address bar what does "www" stand for?',
    answerSet: {
      A: "We Will Win",
      B: "Wompa Wompa Wompa",
      C: "World Wide Web",
      D: "Walter Went Wild",
    },
    correctAnswer: "C",
  },
  {
    question: "HTML and CSS are computer languages used to create what?",
    answerSet: {
      A: "Operating Systems",
      B: "Keyboards",
      C: "Web Pages",
      D: "Machine Learning Algorithims",
    },
    correctAnswer: "C",
  },
  {
    question: "In a photo editing program, what do the letters RGB stand for?",
    answerSet: {
      A: "Red, Green, Blue",
      B: "Remove Giant Background",
      C: "Ready, Go, Begin",
      D: "Rare Gem Broker",
    },
    correctAnswer: "A",
  },
];

const welcomePage = document.querySelector("#welcome");
const startExamBtn = document.querySelector("#start-exam");
const examPage = document.querySelector("#exam");
const question = document.querySelector("#question");
const optionA = document.querySelector("#A");
const optionB = document.querySelector("#B");
const optionC = document.querySelector("#C");
const optionD = document.querySelector("#D");
const questionNum = document.querySelector("#question-num");
const answerBtns = document.querySelectorAll(".answer");
const resultsPage = document.querySelector("#results");
const numberWrong = document.querySelector("#number-wrong");
const numberRight = document.querySelector("#number-right");
const score = document.querySelector("#score");
const continueBtn = document.querySelector("#continue-btn");

let index = 0;
let count = 0;

startExamBtn.addEventListener("click", () => {
  welcomePage.classList.add("hidden");
  examPage.classList.remove("hidden");
  showQuestion(trivia, index);
  countdown("exam-timer", 0, 10);
});

const showQuestion = (trivia, index) => {
  questionNum.textContent = index + 1;
  const triviaStr = trivia[index];
  question.textContent = triviaStr.question;
  optionA.textContent = triviaStr.answerSet.A;
  optionB.textContent = triviaStr.answerSet.B;
  optionC.textContent = triviaStr.answerSet.C;
  optionD.textContent = triviaStr.answerSet.D;
};

answerBtns.forEach((answerBtn) => {
  answerBtn.addEventListener("click", (e) => {
    const correctAnswer = trivia[index].correctAnswer;
    if (e.target.id == correctAnswer) {
      count++;
    }
    index++;
    if (index >= trivia.length) {
      showResults(count, trivia.length);
    } else {
      showQuestion(trivia, index);
    }
  });
});

continueBtn.addEventListener("click", () => {
  welcomePage.classList.remove("hidden");
  examPage.classList.add("hidden");
  resultsPage.classList.add("hidden");
  window.location = window.location;
});

const showResults = (correct, total) => {
  examPage.classList.add("hidden");
  resultsPage.classList.remove("hidden");
  numberRight.textContent = correct;
  numberWrong.textContent = total - correct;
  score.textContent = Math.round((correct / total) * 100);
  countdown("exam-timer", 0, 0);
};

function countdown(elementName, minutes, seconds) {
  var element, endTime, hours, mins, msLeft, time;

  function twoDigits(n) {
    return n <= 9 ? "0" + n : n;
  }

  function updateTimer() {
    msLeft = endTime - +new Date();
    if (msLeft < 1000) {
      showResults(count, trivia.length);
    } else {
      time = new Date(msLeft);
      hours = time.getUTCHours();
      mins = time.getUTCMinutes();
      element.innerHTML =
        (hours ? hours + ":" + twoDigits(mins) : mins) +
        ":" +
        twoDigits(time.getUTCSeconds());
      setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
    }
  }

  element = document.getElementById(elementName);
  endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
  updateTimer();
}
