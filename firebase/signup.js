const email = document.getElementById("email");
const password = document.getElementById("password");
const name = document.querySelector("#name");
async function signUp() {
    await auth.createUserWithEmailAndPassword(email.value, password.value,)
    .then((userInfo)=>{
        
        return db.collection("Users").doc(userInfo.user.uid).set({
            // email: email.value,
            name: name.value,
            userRole: 'user',
            created_at: new Date()
        })
           

    })
    .then(() =>{
        signUpForm.reset()
        window.location = "./login.html"
    })
    .catch(e => console.log(e));

    
}
const signUpForm = document.querySelector(".signup");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    signUp()
} );

