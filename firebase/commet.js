// getting single blog

const myForm = document.querySelector("#send");

const id = localStorage.getItem('blogId')
console.log(window.location.href)
const arrayId = window.location.href.split('/').slice('-1').pop()
console.log(arrayId)

const blogContainer = document.querySelector('.singleBlog');

firebase.firestore().collection("blogs").doc(arrayId).get().then((dat) =>{
const result = dat.data()
const image = document.getElementById("blogImage")
const blogTitle = document.getElementById("blogTile")
const blogDescription = document.getElementById("description")


console.log(blogContainer)

 blogContainer.innerHTML= `<img src="${result.imageref}" alt="startups.jpg" id="blogImage">
 <h3>${result.title}</h3>
 <p id="description">

    ${result.description}
 </p>`
console.log('retreived da',result)
})
// commenter

// creatting comment
myForm.addEventListener('click', (e) => {
    e.preventDefault()

    const userName = document.getElementById('username');
    const description = document.getElementById('explaination');
    const created_at =  new Date;
    const id = localStorage.getItem('blogId')
    db.collection("blogs").doc(id).collection("comment").doc().set({
        UserName:userName.value,
        Description:description.value,
        date:created_at
    }).then(() =>{
        // alert("Thank you for giving me feedbacks")
        const contactForm = document.querySelector('#form')
        contactForm.reset();
    }).catch((error) => {
        console.log(error)
    })
    console.log(description.value)
})

function getcomment(){
  db.collection("blogs").doc(id).collection("comment").onSnapshot((comments) =>comments.forEach((comment) =>{
        console.log(comment.data())
        const blogbox = document.querySelector('.commentContainer')
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="image">
        <img src="../work/image/jmv.jpg" >
        </div>
        <div class="commentArea">

        <h3>${comment.data().UserName}<span>Created_at: ${comment.data().date}</span> </h3>
        <p>${comment.data().Description}</p> 
        </div>`

        blogbox.appendChild(div)
    }))
}
window.onload =() =>{
    getcomment()
}

