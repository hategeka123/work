const email = document.getElementById("email");
const password = document.getElementById("password");
function signUp() {

    auth.createUserWithEmailAndPassword(email.value, password.value,)
    .then(()=>{
        window.location = "./admin/profile/profile.html"
    })
    .catch(e => console.log(e.massage));
    
}
const signUpForm = document.querySelector(".signup");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    signUp()
} );

