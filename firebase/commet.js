const commentForm = document.querySelector(".form");
commentForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const username = document.querySelector("#username").value;
    const email = email.querySelector("#email").value;
    const contacted_at = new Date()
    
    let comment = {
        username:username,
        email,
        data:contacted_at
    }
    firebase.firestore().collection("contact").add(contact).then(() =>{
        alert("Thank you for contact me")
        commentForm.reset();
    }).catch(error => alert(error.message))
    
})