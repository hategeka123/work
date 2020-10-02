const email = document.getElementById("email");
const password = document.getElementById("password");

function signUp() {

    auth.createUserWithEmailAndPassword(email.value, password.value)
    .then(()=>{
        window.location = "./index.html"
    })
    .catch(e => alert(e.massage));
    
}
const signUpForm = document.querySelector(".signup");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    signUp()
} );