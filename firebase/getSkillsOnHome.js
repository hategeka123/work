const skill = document.querySelector(".mySkill");
// console.log('get skills on home page')

firebase.firestore().collection("skills").get().then((Skills) =>{

    Skills.forEach((doc) => {
        
        let date = doc.data().created_at.toDate()
        let dateObject = new Date(date)
        let month = dateObject.toLocaleString('en-GB',{month: 'short'});
        let year = dateObject.getFullYear()
        let day = dateObject.toLocaleDateString('en-GB', {day: '2-digit'})
        let dateResult = `${day}-${month}-${year}`
        const skillDiv = `<div class="Skills">
                
        <div class="skills_image">
            <img src="${doc.data().imageref}">
        </div>
        <div class="detail_skill">
            <h2 class="name_skill">${doc.data().title} <span>${dateResult}</span> </h2>
            <p>
               ${doc.data().description}
            </p>
           
        </div>
        
    </div>`

    // console.log(skillDiv)

    skill.innerHTML += skillDiv
    })
})