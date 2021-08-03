const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username";

function clickLogin(evt) {
  evt.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}. Nice to meet you!😃`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", clickLogin);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(savedUserName);
}
