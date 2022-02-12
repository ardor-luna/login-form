const show = document.getElementById('show');
const password = document.getElementById("password");
const form = document.getElementById('form');
const username = document.getElementById('username');


show.onclick = ()=>{
    if(show.classList.contains("fa-eye-slash")){
        show.classList.replace("fa-eye-slash" , "fa-eye");
        document.querySelector('.password-holder').type = "text";
    }else{
        show.classList.replace("fa-eye" ,"fa-eye-slash" );
        document.querySelector('.password-holder').type = "password";
    }
}


form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();

	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
}
	
	
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('.small');
	formControl.className = 'form__control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form__control success';
}
	




