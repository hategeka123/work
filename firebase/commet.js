// getting single blog

const myForm = document.querySelector("#send");

const commentbtn = document.querySelector("#loginComment")
commentbtn.onclick = () =>{
    window.location.href = './login.html'
}

const id = localStorage.getItem('blogId')
console.log(window.location.href)
const arrayId = window.location.href.split('/').slice('-1').pop()
// console.log(arrayId)

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
        // console.log(comment.data())
        const blogbox = document.querySelector('.commentContainer')
        const div = document.createElement('div')

        // change time in real

        let date = comment.data().date.toDate()
        let dateObject = new Date(date)
        let month = dateObject.toLocaleString('en-GB',{month: 'short'});
        let year = dateObject.getFullYear()
        let day = dateObject.toLocaleDateString('en-GB', {day: '2-digit'})
        let dateResult = `${day}-${month}-${year}`
        
        div.innerHTML = `
        <div class="image">
        <img src="../../image/image1.png">
        </div>
        <div class="commentArea">
        <h3>${comment.data().UserName}<span>Created_at: ${dateResult}</span> </h3>
        <p>${comment.data().Description}</p> 
        </div>`
        blogbox.appendChild(div)
    }))
}
function checkLogin(){
    const form = document.querySelector(".form")
    const user = localStorage.getItem('userEmail')
    if(user){
        form.style.display = 'block'
        commentbtn.style.display = 'none'
    }else{

        commentbtn.style.display = 'block'
    }
}
window.onload =() =>{
    checkLogin()
    getcomment()
}
