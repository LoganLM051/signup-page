/* Day 1 Script*/
let clubName = "Monthly Basketball Club";
console.log("Welcome to " + clubName);

function sayHi() {
  console.log("Hi! Thanks for visiting.");
}
var meetingDay = "Friday";
console.log("We meet on " + meetingDay);

sayHi();

function sayBye() {
  console.log("Bye! Thanks for visiting.")  
}
sayBye();
sayBye();
/* Day 2 Script*/ 
let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
  nextMeeting.textContent = "Our next practice is Friday, November 5th at 3:45 PM.";
}

nextButton.addEventListener("click", showNextMeeting);

/*Day 4 Script*/
let themeButton = document.querySelector("#theme-btn")

function toggleTheme() { 
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", toggleTheme);