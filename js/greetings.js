const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
	event.preventDefault(); // 화면 새로고침 막아주기 (기능 억제)
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const usernameThatTheUserWrote= loginInput.value;
	localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
	//greeting.innerText = "Hello " + username;
	paintGreetings(usernameThatTheUserWrote);
}

function paintGreetings(username){
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null){
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else{
	// show the greetings
	paintGreetings(savedUsername);
}