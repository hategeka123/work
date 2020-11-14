// /----------------------------------- reading skills ---------------------/


const skill = document.querySelector(".mySkill");
// console.log('get skills on home page')

firebase.firestore().collection("skills").get().then((Skills) =>{

    Skills.forEach((doc) => {
        // console.log(doc.data())
        const skillDiv = `<div class="Skills" id=${doc.id}>
                
        <div class="skills_image">
            <img src="${doc.data().imageref}">
        </div>
        <div class="detail_skill">
            <h2 class="name_skill">${doc.data().title} <span>${doc.data().created_at}</span> </h2>
            <p>
               ${doc.data().description}
            </p>
           
            </div>
            
        <div class="button">
           <a href="../../editSkill.html#/${doc.id}"><i onclick="editSkill()" class="far fa-edit" id = "edt"></i></a>
            
            <i onclick="deleteSkill()" class="fas fa-trash-alt" id = "dlt"></i>
        </div>
        
    </div>`

    // console.log(skillDiv)

    skill.innerHTML += skillDiv
    })
})


// ----------------------------------- delete -------------------------------------------------

function deleteSkill(){

    const skillId = event.target.parentNode.parentNode.id
    firebase.firestore().collection("skills").doc(skillId).delete()
      alert("Deleted successfully!!!")

}

// ----------------------- edit -----------------------------------------------------------------
