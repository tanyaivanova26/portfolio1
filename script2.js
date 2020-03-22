var form = document.getElementById("form");

function validate(event){
	event.preventDefault();
	var myName = document.getElementById("name");
	var myEmail = document.getElementById("email");
	var mySubject = document.getElementById("subject");
	var myMessage = document.getElementById("message");
	var myNameValue = myName && myName.value;
	var myEmailValue = myEmail && myEmail.value;
	var mySubjectValue = mySubject && mySubject.value;
	var myMessageValue = myMessage && myMessage.value;
	if (myNameValue === ''){
		myName.style.borderBottom = "3px solid red";
	} else {
		myName.style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)';
	}
	if (myEmailValue === ''){
		myEmail.style.borderBottom = "3px solid red";
	} else {
		myEmail.style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)';
	}
	if (mySubjectValue === ''){
		mySubject.style.borderBottom = "3px solid red";
	} else {
		mySubject.style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)';
	}
	if (myMessageValue === ''){
		myMessage.style.borderBottom = "3px solid red";
	} else {
		myMessage.style.borderBottom = '3px solid rgba(0, 0, 0, 0.3)'
		document.getElementById('form').innerHTML="Спасибо, ваша заявка отправлена!";
	}
}

form.addEventListener('submit', validate);




