// /----------------------------------- reading blogs ---------------------/


const skill = document.querySelector(".mySkill");
// console.log('get skills on home page')

firebase.firestore().collection("skills").get().then((Skills) =>{

    Skills.forEach((doc) => {
        // console.log(doc.data())
        const skillDiv = `<div class="Skills">
                
        <div class="skills_image">
            <img src="${doc.data().imageref}">
        </div>
        <div class="detail_skill">
            <h2 class="name_skill">${doc.data().title} <span>${doc.data().created_at}</span> </h2>
            <p>
               ${doc.data().description}
            </p>
           
        </div>
        
    </div>`

    // console.log(skillDiv)

    skill.innerHTML += skillDiv
    })
})