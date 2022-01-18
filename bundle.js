let streak = 0;
let correct = 0;
let incorrect = 0;
let rate = 100;
async function sleep(ms) {
	await new Promise(resolve => setTimeout(resolve, ms));
};
async function answerQuestion(button) {
	const questionelement = document.getElementById("question");
	const question = flashcards[questionelement.getAttribute("data-index")];
	const answerIndex =  question.answers.indexOf(button.innerText);
	const correctAnswerIndex = question.correct;
	if (question.answers[answerIndex] === question.answers[correctAnswerIndex]) {
		await answeredCorrectly();
	} else if (question.answers[answerIndex] !== question.answers[correctAnswerIndex]) {
		await answeredWrong();
	};
};

async function newQuestion() {
	flashcards.shuffle();
	const question = flashcards.sample();
	const questionelement = document.getElementById("question");
	questionelement.innerText = question.question;
	questionelement.setAttribute("data-index", flashcards.indexOf(question));
	document.getElementById("answer1").innerText = question.answers[0];
	document.getElementById("answer2").innerText = question.answers[1];
	document.getElementById("answer3").innerText = question.answers[2];
	document.getElementById("answer4").innerText = question.answers[3];
};

async function answeredCorrectly() {
	const correctbox = document.getElementsByClassName("correct")[0];
	correctbox.style = "display:block;"
	await new Promise(resolve => setTimeout(resolve, 4.725e3));
	correctbox.style = "display:none;"
	streak += 1;
	correct += 1;
	rate = Math.round((correct/(correct+incorrect))*100)
	document.getElementById("streakamount").innerText = `Streak - ${streak}`;
	document.getElementById("correctamount").innerText = `Correct - ${correct}`;
	document.getElementById("correctrate").innerText = `Correct Rate - ${rate}`;
	if (streak % 5 == 0) {
		const streakalert = document.getElementsByClassName("streakalert")[0];
		async function dostreak(word) {
			document.getElementById("streakalert").innerText = `${word}, you've reached a streak of ${streak}!`;
			streakalert.style = "display:block;";
			await new Promise(resolve => setTimeout(resolve, 3.4e3));
			streakalert.style =  "display:none;";
		};
		if (streak == 5) {
			const word = "Nice";
			dostreak(word);
		} else if (streak == 10) {
			const word = "Excellent";
			dostreak(word);
		} else if (streak == 15) {
			const word = "Amazing";
			dostreak(word);
		} else if (streak == 20) {
			const word = "Wonderful";
			dostreak(word);
		} else if (streak >= 25) {
			const word = "You're a genius";
			dostreak(word);
		} else {
			const word = "Nice";
			dostreak(word);
		};
	};
	newQuestion();
};

async function answeredWrong() {
	const incorrectbox = document.getElementsByClassName("incorrect")[0];
	incorrectbox.style = "display:block;";
	await new Promise(resolve => setTimeout(resolve, 4.735e3));
	incorrectbox.style = "display:none;";
	streak = 0;
	incorrect += 1;
	rate = Math.round((correct/(correct+incorrect))*100)
	document.getElementById("streakamount").innerText = `Streak - ${streak}`;
	document.getElementById("incorrectamount").innerText = `Incorrect - ${incorrect}`;
	document.getElementById("correctrate").innerText = `Correct Rate - ${rate}`;
	newQuestion();
};