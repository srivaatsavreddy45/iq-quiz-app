// Advanced 35-Question Bank (100% Logic, Math, and Pattern Recognition)
const questions = [
    { q: "Four people (A, B, C, D) sit in a row. A cannot sit next to B. C sits immediately to the right of B. If D sits in the first seat on the left, who sits in the second seat?", o: ["A", "B", "C", "Cannot be determined"], a: 0 },
    { q: "In a stable, there are horses and humans. Counting heads gives 15; counting legs gives 50. How many horses are in the stable?", o: ["10", "8", "12", "7"], a: 0 },
    { q: "A lying game: Liam always lies on Fridays, Saturdays, and Sundays. He tells the truth on all other days. Today he says: 'I lied yesterday, and I will lie again tomorrow.' What day of the week is it?", o: ["Friday", "Monday", "Thursday", "Sunday"], a: 2 },
    { q: "Six boxes are stacked. Red is above Green but below Blue. Yellow is below Green. Orange is between Blue and Red. Which box is at the very top?", o: ["Red", "Blue", "Orange", "Yellow"], a: 1 },
    { q: "If it takes 5 machines 5 minutes to produce 5 widgets, how many minutes does it take 100 machines to produce 100 widgets?", o: ["100 minutes", "20 minutes", "5 minutes", "1 minute"], a: 2 },
    { q: "If f(x) = x^3 - 3x^2 + 2x, how many unique real roots exist where f(x) = 0?", o: ["1", "2", "3", "0"], a: 2 },
    { q: "A sequence follows the rule: a_n = 2*a_(n-1) + 3. If the first term a_1 = 1, what is the fourth term a_4?", o: ["13", "29", "25", "31"], a: 1 },
    { q: "What is the next number in the sequence? 2, 9, 28, 65, 126, __", o: ["197", "217", "218", "254"], a: 2 }, // n^3 + 1
    { q: "A specialized system processes 12 data packets in 4 seconds. How many minutes will it take to process 1080 sheets at this continuous rate?", o: ["5 minutes", "6 minutes", "4.5 minutes", "12 minutes"], a: 1 },
    { q: "Complete the numerical matrix progression: [4, 9, 25]; [49, 121, 169]; [289, 361, __]", o: ["441", "529", "625", "576"], a: 1 }, // Squares of consecutive primes: 17^2, 19^2, 23^2

    
    { q: "If some squares are circles, and all circles are triangles, which statement must be absolutely true?", o: ["Some triangles are squares", "All squares are triangles", "No triangles are squares", "No squares are circles"], a: 0 },
    { q: "Complete the letter step sequence: Z, W, S, N, __", o: ["H", "I", "G", "J"], a: 0 }, // Step intervals: -3, -4, -5, -6 letters
    { q: "A solid 3x3x3 cube is painted red on all outer faces and then cut into 27 smaller individual 1x1x1 cubes. How many of these small cubes have exactly 2 faces painted?", o: ["8", "12", "6", "4"], a: 1 },
    { q: "Point A is north of Point B. Point C is east of Point B. What is the precise bearing directional relationship of Point A relative to Point C?", o: ["North-West", "South-East", "North-East", "South-West"], a: 0 },
    { q: "In a secure cipher system, the word 'SHIFT' is encoded as 'TGGGU'. Following this identical algorithm, how is 'INPUT' encoded?", o: ["HMOTT", "JOSVU", "JOSTU", "HMSVT"], a: 2 },

    
    { q: "Find the next integer in the compounding chain: 1, 2, 6, 24, 120, 720, __", o: ["4320", "5040", "1440", "2880"], a: 1 }, // Factorials
    { q: "If 5 parallel horizontal lines are cleanly intersected by 4 parallel vertical lines, how many distinct quadrilaterals are created?", o: ["20", "40", "60", "120"], a: 2 }, // C(5,2) * C(4,2) = 10 * 6 = 60
    { q: "Find the missing structural variable in the set: [3, 8, 15], [24, 35, 48], [63, 80, __]", o: ["95", "99", "100", "121"], a: 1 }, // n^2 - 1
    { q: "If a logical conditional statement 'If P then Q' is true, which of the following variations is automatically true?", o: ["If Q then P", "If not P then not Q", "If not Q then not P", "P is always true"], a: 2 }, // Contrapositive
    { q: "Identify the pattern anomaly that breaks the structural sequence rule: 3, 5, 11, 14, 17, 21", o: ["14", "11", "21", "17"], a: 0 }, 

  
    { q: "Row 1: [2, 3, 13] | Row 2: [4, 5, 41] | Row 3: [6, 7, __]", o: ["55", "85", "72", "91"], a: 1 }, // a^2 + b^2
    { q: "If a circle's radius is scaled up uniformly by 50%, by what exact percentage does its total area expand?", o: ["50%", "100%", "125%", "225%"], a: 2 }, // 1.5^2 = 2.25 -> 125% increase
    { q: "Twelve years ago, John was exactly 1/3 the age of his father. In six years, he will be exactly 1/2 his father's age. How old is John right now?", o: ["24", "30", "18", "42"], a: 1 },
    { q: "Predict the final number in the arithmetic triangle accumulation step: 0, 1, 3, 6, 10, 15, __", o: ["20", "21", "22", "25"], a: 1 },
    { q: "Which mathematical set element does not mathematically share the same category property? [16, 25, 36, 48, 64]", o: ["16", "36", "48", "64"], a: 2 }, // Non-square element

    
    { q: "If a custom mathematical operator '#' means (A^2 - B), find the value of X when: (4 # 3) # X = 160.", o: ["9", "7", "11", "13"], a: 0 }, // (16-3)=13. 13^2 - X = 160 -> 169 - X = 160 -> X = 9
    { q: "Let the operator '#' mean (A^2 - B). Solve for X if (4 # 3) # X = 160.", o: ["7", "9", "11", "13"], a: 1 }, // 13 # X = 160 -> 169 - X = 160 -> X = 9
    { q: "A clock loses exactly 3 minutes every hour. It was set correctly at 12:00 PM. What time will it display when the true actual time is 8:00 PM?", o: ["7:36 PM", "7:40 PM", "7:44 PM", "8:24 PM"], a: 0 },
    { q: "If a fair coin is tossed 4 consecutive times, what is the exact mathematical probability of landing exactly 3 heads?", o: ["1/4", "3/8", "1/8", "1/2"], a: 0 }, // 4/16 = 1/4
    { q: "What is the missing value? 7 -> 50, 9 -> 82, 11 -> __", o: ["120", "122", "144", "110"], a: 1 }, // x^2 + 1
    { q: "If the boolean statement 'All elements in System X are working' is False, what can we deduce with mathematical certainty?", o: ["No elements are working", "At least one element is failing", "All elements are failing", "Exactly half are failing"], a: 1 },

    
    { q: "Find the next progression step value: 10, 11, 23, 71, 287, __", o: ["1439", "1435", "1148", "1256"], a: 0 }, // *1+1, *2+1, *3+2, *4+3, *5+4 => 287*5 + 4 = 1439
    { q: "Two guards stand at a gate. One always lies; one always tells the truth. To find the safe path, you must ask one guard a single question. Which question works?", o: ["Which gate will the other guard say is safe?", "Are you a truth-teller?", "Is your gate safe?", "Which gate do you like?"], a: 0 },
    { q: "Calculate the exact cumulative sum of all integers from 1 up to 40 inclusive.", o: ["800", "820", "840", "780"], a: 1 }, // (40 * 41)/2 = 820
    { q: "If a perfectly symmetrical binary tree structure contains 4 completely filled generational levels, what is the absolute total node count?", o: ["7", "15", "31", "16"], a: 1 }, // 1+2+4+8 = 15
    { q: "Identify the mathematical function operating in this set pairing: [84, 14 -> 6], [105, 15 -> 7], [144, 12 -> __]", o: ["9", "11", "12", "14"], a: 2 } // A / B = C
];

const TOTAL_TIME = 30 * 60;
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let timeRemaining = TOTAL_TIME;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const timerDisplay = document.getElementById('timer');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', resetQuiz);

function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    startTimer();
    showQuestion();
}

function startTimer() {
    timeRemaining = TOTAL_TIME;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    progressFill.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;

    questionText.textContent = currentQuestion.q;
    optionsContainer.innerHTML = '';

    currentQuestion.o.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => handleAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].a) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    const timeTaken = TOTAL_TIME - timeRemaining;
    calculateAndDisplayIQ(score, timeTaken);
}

function calculateAndDisplayIQ(correctAnswers, timeTakenSeconds) {
    const totalQuestions = questions.length;
    
    // Bell curve calculation params
    const sampleMean = 18;
    const sampleStdDev = 5.2;
    let zScore = (correctAnswers - sampleMean) / sampleStdDev;

    const baselineExpectedTime = totalQuestions * 35;
    let timeModifier = 0;

    if (correctAnswers >= 15) { 
        if (timeTakenSeconds < baselineExpectedTime) {
            timeModifier = ((baselineExpectedTime - timeTakenSeconds) / baselineExpectedTime) * 0.6;
        } else {
            timeModifier = -((timeTakenSeconds - baselineExpectedTime) / (TOTAL_TIME - baselineExpectedTime)) * 0.4;
        }
    } else {
        timeModifier = -0.5;
    }

    zScore += timeModifier;
    let finalIQ = Math.round(100 + (zScore * 8));

    if (finalIQ < 40) finalIQ = 40;
    if (finalIQ > 165) finalIQ = 165;

    document.getElementById('iq-score').textContent = finalIQ;
    document.getElementById('stat-correct').textContent = correctAnswers;
    
    const minTaken = Math.floor(timeTakenSeconds / 60);
    const secTaken = timeTakenSeconds % 60;
    document.getElementById('stat-time').textContent = `${minTaken.toString().padStart(2, '0')}:${secTaken.toString().padStart(2, '0')}`;

    let classification = "";
    if (finalIQ >= 145) classification = "Highly Gifted ";
    else if (finalIQ >= 130) classification = "Gifted ";
    else if (finalIQ >= 120) classification = "High Intelligence";
    else if (finalIQ >= 110) classification = "Good Intelligence";
    else if (finalIQ >= 90) classification = "Average Baseline";
    else if (finalIQ >= 80) classification = "Below Average";
    else classification = "Well Below Average";

    document.getElementById('iq-classification').textContent = classification;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultsScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}
