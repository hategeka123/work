function editSkill(){
    const skillId = event.target.parentNode.parentNode.id
    console.log(skillId)
}
const id = window.location.href
const idArray = id.split('/').slice(-1).pop()
console.log(idArray)
const skillForm = document.getElementById("skill_Form");
firebase.firestore().collection("skills").doc(idArray).get().then((data) =>{
    const result = data.data()
    const image = document.querySelector("image")
    console.log(result)

    const dynamicForm = `
    <div class="title">
    <label>Title</label><br>
    <input type="text" id="title" name="title" class="text-input" value="${result.title}"><br>
</div>
<div class="image">
    <label>Select image:</label><br>
    <img src="${result.imageref}">
    <input type="file" id="img" name="img" accept="image/*"><br>
</div>
<div class="description">
    <label>Description</label><br>
    <textarea placeholder="Enter Massege" id="description">${result.description}</textarea>
</div>
<div>
    <button type="submit" class="btn btn-big">submit</button>
</div>
    
    `
    skillForm.innerHTML = dynamicForm
   // save data into firebase from form
   skillForm.addEventListener('submit', async (e) => {
    const skillTitle = document.querySelector("#title").value
    const skillDescription = document.querySelector("#description").value;
    e.preventDefault()
    console.log(e)
    console.log(skillTitle)
    const project = {
        title: skillTitle,
        description:skillDescription
    }
await firebase.firestore().collection('skills').doc(idArray).update(project)
   alert("updated")
})


// console.log(skillForm)

})        