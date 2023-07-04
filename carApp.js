const btnCheck = document.getElementById('btn-check');
const btnAdd = document.getElementById('btn-add');
const btnDelete = document.getElementById('btn-delete');
const btnExit = document.getElementById('btn-exit');

// btnCheck.addEventListener('click', () => {
	
// });

// btnAdd.addEventListener('click', () => {
	
// });

// btnDelete.addEventListener('click', () => {
	
// });

// btnExit.addEventListener('click', () => {
	
// });

document.getElementById("btn-submit").addEventListener("click",function(event){

    let first_name=document.getElementById("first_name").value;
    let pattern=/^[A-Za-z]+$/;
    if(pattern.test(first_name)==false){
        event.preventDefault();
        document.getElementById("first_name_error").innerHTML="letters has to be only in english"

    }
    let last_name=document.getElementById("last_name").value;
    if(pattern.test(last_name)==false){
        event.preventDefault();
        document.getElementById("last_name_error").innerHTML="letters has to be only in english";
    }

    
    let phone = document.getElementById("phone").value;
    let phone_pattern = /^\d{10}$/; // Assumes a 10-digit phone number

    if (phone_pattern.test(phone)==false) {
        event.preventDefault();
        document.getElementById("phone_error").innerHTML = "Please enter a valid 10-digit phone number";
    }
});




// }

		// // Add event listener to the form submission
		// document.getElementById("AddCarForm").addEventListener("submit", function(event) {
		// 	// Clear previous error message
		// 	document.getElementById("first_name_error").textContent = "";

		// 	// Get the value of the first name input field
		// 	var firstName = document.getElementById("first_name").value;

		// 	// Regular expression to match English letters only
		// 	var englishLettersRegex = /^[A-Za-z]+$/;

		// 	// Check if the first name contains only English letters
		// 	if (!englishLettersRegex.test(firstName)) {
		// 		// Display error message
		// 		document.getElementById("first_name_error").textContent = "Please enter only English letters";
		// 		// Clear the first name input field
		// 		document.getElementById("first_name").value = "";
		// 		// Prevent form submission
		// 		event.preventDefault();
		// 	}
		// });