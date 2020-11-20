const contacted = document.querySelector(".myContact");

firebase.firestore().collection("contact").get().then((contact) =>{

    contact.forEach((doc) =>{



        let date = doc.data().data.toDate()
        let dateObject = new Date(date)
        let month = dateObject.toLocaleString('en-GB',{month: 'short'});
        let year = dateObject.getFullYear()
        let day = dateObject.toLocaleDateString('en-GB', {day: '2-digit'})
        let dateResult = `${day}-${month}-${year}`
        
             
        const contactDiv = `<div class="costom" id=${doc.id}>
                        <div class="contacted">
                            <img src="../../image/image1.png">
                        </div>
                        <div class="detail">
                            <h2 class="name">${doc.data().names}: <span> ${doc.data().email} </span> <span> ${dateResult}</span> </h2>
                            <p>
                                
                                ${doc.data().description}
                            </p>
                           
                        </div>
                        
                        <div class="button">
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
        
    
