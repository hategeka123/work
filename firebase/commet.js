
const commentForm = document.querySelector("#form");
commentForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const contacted_at = new Date()
    
    let comment = {
        username:username,
        email,
        data:contacted_at
    }
    firebase.firestore().collection("comment").add(comment).then(() =>{
        alert("Thank you for comment on my blog")
        commentForm.reset();
    }).catch(error => alert(error.message))
    
})