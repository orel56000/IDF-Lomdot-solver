const questionList = document.getElementsByClassName("questionList"); // Get all questions.
const nextPage = document.getElementsByClassName("surveyBtn js-submitBtn nextPage")[0] || document.getElementsByClassName("surveyBtn js-submitBtn finalPage")[0];

const solvePage = () => {
	for(let i = 0; i < questionList.length; i++) // Loop all questions.
	{
		for(let j = 0; j < questionList[i].children.length; j++) // Loop all potential answers.
		{
			for(let h = 0; h < questionList[i].children[j].getElementsByClassName("labelWrapper").length; h++) // Get answer itself.
			{
				if(questionList[i].children[j].getElementsByClassName("labelWrapper")[h].children[0].children[0].dataset.isCorrect == "True") // If the answer has isCorrect dataset.
				{
					console.log("True "+h);
					questionList[i].children[j].getElementsByClassName("labelWrapper")[h].children[0].children[0].click(); // Select the answer.
				}
				else
					console.log("false "+h); // Don't select, just move to the next one.
			}
			
		}
		
	}

	// Create an interval to press next.
	setInterval(() => {
		const loaderHolder = document.getElementById("loaderHolder");
		console.log(loaderHolder == null);
		if(loaderHolder == null)
		{
			
			nextPage.click();
			console.log("pressed next");
		}
		
			
	}, 1000)
}

if (nextPage != null) {
	solvePage();
} else {
	console.log("Not a question page");
}


console.log("Hey from lomdot solver");