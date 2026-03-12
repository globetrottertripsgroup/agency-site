
document.getElementById("quizForm").addEventListener("submit", function(e){
e.preventDefault();
const trip=e.target.tripType.value;
localStorage.setItem("tripType",trip);
window.location.href="results.html";
});
