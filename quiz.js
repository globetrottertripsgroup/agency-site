
document.getElementById("quizForm").addEventListener("submit", function(e){
 e.preventDefault();
 const trip = e.target.tripType.value;
 const budget = e.target.budget.value;

 localStorage.setItem("tripType", trip);
 localStorage.setItem("budget", budget);

 window.location.href = "results.html";
});
