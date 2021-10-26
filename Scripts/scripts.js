const data = [
    "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    "No more than 2GB. All files in your account must fit your allotted storage space.",
    "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    "Yes! Send us a message and we’ll process your request no questions asked.",
    "Chat and email support is available 24/7. Phone lines are open during normal business hours."
];


const answers = document.getElementsByClassName("faq-answer-text");
const questionList = document.getElementsByClassName("faq-question");
const questionHeader = document.getElementsByClassName("faq-question-header");

// Add an event listener to each question and arrow to display the answer to each question

for(let i = 0; i < questionHeader.length; i++) {

    questionHeader[i].addEventListener('click', () => {

        if(answers[i].textContent === "") {
            answers[i].textContent = data[i];
            questionList[i].classList.add("active");
        }
        else{
            answers[i].textContent = "";
            questionList[i].classList.remove("active");
        }
    });

}









