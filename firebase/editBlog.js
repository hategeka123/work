
const id = window.location.href
const idArray = id.split('/').slice(-1).pop()
console.log(idArray)

const blogForm = document.getElementById("my-form");
firebase.firestore().collection("blogs").doc(idArray).get().then((data) =>{
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
    <input type="file" id="img" name="img"><br>
    </div>
    <div class="description">
    <label>Description</label><br>
    <textarea placeholder="Enter Massege" id="description">${result.description}</textarea>
    </div>
    <div>
    <button type="submit" class="btn btn-big">Save change</button>
    </div>
    
    `
    blogForm.innerHTML = dynamicForm
    
    // save data into firebase from form
    blogForm.addEventListener('submit', async (e) => {
        const blogTitle = document.querySelector("#title").value
        const blogDescription = document.querySelector("#description").value;
        e.preventDefault()
        console.log(e)
        console.log(blogTitle)
        const project = {
            title: blogTitle,
            description:blogDescription
        }
  await firebase.firestore().collection('blogs').doc(idArray).update(project)
       alert("updated")
    })
    

    // console.log(skillForm)
    
})