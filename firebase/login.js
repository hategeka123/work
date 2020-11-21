const inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
    input.addEventListener('focus', focusFunction);
    input.addEventListener('blur', blurFunction);
});
function focusFunction(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}
function blurFunction(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}

const inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
    input.addEventListener('focus', focusFunction);
    input.addEventListener('blur', blurFunction);
});
function focusFunction(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}
function blurFunction(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}

const blogId = localStorage.getItem("blogId");
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener('submit', (e) => {
       e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
  //  console.log(email)
    firebase.auth().signInWithEmailAndPassword(email, password).then(creditial => {
        console.log("Login successfully" + creditial.user)
        if (email =="hategekamvianney@gmail.com"){
            loginForm.reset()
           window.location = "../admin/posts/index.html"
           
        } else if(blogId){
            loginForm.reset()
            window.location = `./commet.html#/${blogId}`
            localStorage.setItem('userEmail', email)
        }
        
        else{
            loginForm.reset()
            window.location.replace("./index.html")
        }
    }).catch((err) => {
        alert(err.message)
    })
})


