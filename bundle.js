async function answerQuestion(button) {
	const questionelement = document.getElementById("question");
	const question = flashcards[questionelement.getAttribute("data-index")];
	const answerIndex =  question.answers.indexOf(button.innerText);
	const correctAnswerIndex = question.correct;
	if (question.answers[answerIndex] === question.answers[correctAnswerIndex]) {
		await answeredCorrectly()
	} else if (question.answers[answerIndex] !== question.answers[correctAnswerIndex]) {
		await answeredWrong()
	};
};

async function newQuestion() {
	flashcards.shuffle();
	const question = flashcards.sample();
	const questionelement = document.getElementById("question");
	questionelement.innerText = question.question;
	questionelement.setAttribute("data-index", flashcards.indexOf(question))
	document.getElementById("answer1").innerText = question.answers[0];
	document.getElementById("answer2").innerText = question.answers[1];
	document.getElementById("answer3").innerText = question.answers[2];
	document.getElementById("answer4").innerText = question.answers[3];
};

async function answeredCorrectly() {
	const correctbox = document.getElementsByClassName("correct")[0]
	correctbox.style = "display:block;"
	await new Promise(resolve => setTimeout(resolve, 4.735e3));
	correctbox.style = "display:none;"
	newQuestion()
}

async function answeredWrong() {
	const incorrectbox = document.getElementsByClassName("incorrect")[0]
	incorrectbox.style = "display:block;"
	await new Promise(resolve => setTimeout(resolve, 4.735e3));
	incorrectbox.style = "display:none;"
	newQuestion()
}