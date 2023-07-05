const btnCheck = document.getElementById('btn-check');
const btnAdd = document.getElementById('btn-add');
const btnDelete = document.getElementById('btn-delete');
const btnExit = document.getElementById('btn-exit');




document.getElementById("btn-submit").addEventListener("click",function(event){
	let flag=true
    let first_name=document.getElementById("first_name").value;
    let pattern=/^[A-Za-z]+$/;
    if(pattern.test(first_name)==false){
        event.preventDefault();
		document.getElementById("first_name").value = "";
        document.getElementById("first_name_error").innerHTML="please enter only letters in english"
		flag=false
    }
    let last_name=document.getElementById("last_name").value;
    if(pattern.test(last_name)==false){
        event.preventDefault();
		document.getElementById("last_name").value = "";
        document.getElementById("last_name_error").innerHTML="please enter only letters in english";
		flag=false
    }
    let worker_number = document.getElementById("worker_num").value;
    let worker_number_pattern = /^\d{1,6}$/; // Assumes a 1-6-digit worker number

    if (worker_number_pattern.test(worker_number)==false) {
        event.preventDefault();
		document.getElementById("worker_num").value = "";
        document.getElementById("worker_num_error").innerHTML = "Please enter a valid 6-digit worker number";
		flag=false
    }
    
    let phone = document.getElementById("phone").value;
    let phone_pattern = /^\d{10}$/; // Assumes a 10-digit phone number

    if (phone_pattern.test(phone)==false) {
        event.preventDefault();
		document.getElementById("phone").value = "";
        document.getElementById("phone_error").innerHTML = "Please enter a valid 10-digit phone number";
		flag=false
    }
	let license_plate = document.getElementById("license_num").value;
    let plate_pattern = /^\d{6,8}$/; // Assumes a 6-8-digit license_plate number
   


    if (plate_pattern.test(license_plate)==false) {
        event.preventDefault();
		document.getElementById("license_num").value = "";
        document.getElementById("license_num_error").innerHTML = "Please enter a valid 6-8-digit license plate number";
		flag=false
    }
	let Car_Company=document.getElementById("car_Company").value;
    if(pattern.test(Car_Company)==false){
        event.preventDefault();
		document.getElementById("car_Company").value = "";
        document.getElementById("car_Company_error").innerHTML="please enter only letters in english";
		flag=false
    }
	let Car_Model=document.getElementById("car_model").value;
    if(pattern.test(Car_Model)==false){
        event.preventDefault();
		document.getElementById("car_model").value = "";
        document.getElementById("car_model_error").innerHTML="please enter only letters in english";
		flag=false
    }
	let Car_Color=document.getElementById("car_color").value;
    if(pattern.test(Car_Color)==false){
        event.preventDefault();
		document.getElementById("car_color").value = "";
        document.getElementById("car_color_error").innerHTML="please enter only letters in english";
		flag=false
    }
	if(flag==True){
		alert("the car was add sucssesfuly!");
        localStorage.setItem("addedCar", addedCar);
        window.location.href = "checkCar.html";
        
	}


});

document.getElementById("first_name").addEventListener("mouseover", function(event) {
    document.getElementById("first_name").style.backgroundColor = "lightgreen";
});

document.getElementById("first_name").addEventListener("mouseout", function(event) {
    document.getElementById("first_name").style.backgroundColor = "white";
});

document.getElementById("last_name").addEventListener("mouseover", function(event) {
    document.getElementById("last_name").style.backgroundColor = "lightgreen";
});

document.getElementById("last_name").addEventListener("mouseout", function(event) {
    document.getElementById("last_name").style.backgroundColor = "white";
});

document.getElementById("worker_num").addEventListener("mouseover", function(event) {
    document.getElementById("worker_num").style.backgroundColor = "lightgreen";
});

document.getElementById("worker_num").addEventListener("mouseout", function(event) {
    document.getElementById("worker_num").style.backgroundColor = "white";
});

document.getElementById("phone").addEventListener("mouseover", function(event) {
    document.getElementById("phone").style.backgroundColor = "lightgreen";
});

document.getElementById("phone").addEventListener("mouseout", function(event) {
    document.getElementById("phone").style.backgroundColor = "white";
});

document.getElementById("license_num").addEventListener("mouseover", function(event) {
    document.getElementById("license_num").style.backgroundColor = "lightgreen";
});

document.getElementById("license_num").addEventListener("mouseout", function(event) {
    document.getElementById("license_num").style.backgroundColor = "white";
});
document.getElementById("car_Company").addEventListener("mouseover", function(event) {
    document.getElementById("car_Company").style.backgroundColor = "lightgreen";
});

document.getElementById("car_Company").addEventListener("mouseout", function(event) {
    document.getElementById("car_Company").style.backgroundColor = "white";
});
document.getElementById("car_model").addEventListener("mouseover", function(event) {
    document.getElementById("car_model").style.backgroundColor = "lightgreen";
});

document.getElementById("car_model").addEventListener("mouseout", function(event) {
    document.getElementById("car_model").style.backgroundColor = "white";
});
document.getElementById("car_color").addEventListener("mouseover", function(event) {
    document.getElementById("car_color").style.backgroundColor = "lightgreen";
});

document.getElementById("car_color").addEventListener("mouseout", function(event) {
    document.getElementById("car_color").style.backgroundColor = "white";
});


    document.getElementById("btn-back").addEventListener("click", function(event) {
      let confirmation = confirm("Are you sure you want to go back?");
      
      if (confirmation) {
        window.location.href = 'index.html';
}
});