const contacted = document.querySelector(".myContact");

firebase.firestore().collection("contact").get().then((contact) =>{

    contact.forEach((doc) =>{
        // console.log(doc.data())

        const contactDiv = `<div class="costom" id=${doc.id}>
                        <div class="contacted">
                            <img src="../../image/image1.png">
                        </div>
                        <div class="detail">
                            <h2 class="name">${doc.data().names} <span> ${doc.data().data}</span> </h2>
                            <p>
                                ${doc.data().description}
                            </p>
                           
                        </div>
                        
                        <div class="button">
                            <i class="fa fa-reply" aria-hidden="true"></i>
                            <i onclick="deleteContact()" class="fas fa-trash-alt" id = "dt"></i>
                        </div>

                    </div>`

                    contacted.innerHTML += contactDiv
    })

})

// --------------------------------- delete ----------------------------------------
   
function deleteContact(){

    const contactId = event.target.parentNode.parentNode.id
    firebase.firestore().collection("contact").doc(contactId).delete()
    // console.log('hello word')
    alert("Deleted successfully!!!")
}

// ------------------------------ reply -------------------------------------------------
        
    
