

const signUpForm=document.querySelector(".signup");
// console.log(signUpForm)
signUpForm.addEventListener('submit',(e)=>{
    e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const name = document.getElementById("name").value;
const confirm = document.getElementById("confirmpassword").value;


    if(name=='')
    {   
        console.log(name)
        // message.style.display="block";
        // message.style.backgroundColor="crimson";
        // message.innerHTML='Please, enter your first name';
        alert("please, enter your name")
        return false;
    }
    else if(email=='')
    {   
        alert("please, enter your email")
        return false;
    }

    else if(password=='')
    {   
        // onsole.log(password)
        alert("please, enter your password is empty")
        return false;
    }
    else if(password.length<6){
        c
        alert("your password must be at six charactor")
        return false;
       
    }
    else if(confirm==''){
        alert("please, enter confirm password")
        return false;
    }
    else if(password!=confirm){
        console.log(confirm)
        alert("please, password not match")
        return false;
    }

 else{

    (async function signUp() {
        await auth.createUserWithEmailAndPassword(email, password)
        .then((userInfo)=>{
            
           db.collection("Users").doc(userInfo.user.uid).set({
                // email: email.value,
                name: name,
                userRole: 'user',
                created_at: new Date()
            })
               
    alert("user created successful")
            signUpForm.reset()
            window.location = "./login.html"
        });
        // .then(() =>{
        // })
        // .catch((err) => {
            // alert(err.message)
    
        
    })()

 }

        // const signUpForm = document.querySelector(".signup");
        // signUpForm.addEventListener("submit", (e) => {
        //     e.preventDefault();
        //     signUp()
        // } );
    }
)
