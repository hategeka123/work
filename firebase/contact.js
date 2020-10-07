const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const names = document.querySelector("#fname").value;
    const email = email.querySelector("#email").value;
    const description = description.querySelector("#description").value;
    const contacted_at = new Date()
    
    let contact = {
        names:names,
        email,
        description,
        data:contacted_at
    }
    firebase.firestore().collection("contact").add(contact).then(() =>{
        alert("Thank you for contact me")
        contactForm.reset();
    }).catch(error => alert(error.message))
    
})