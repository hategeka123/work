// const blog = document.querySelector(".flexbox-blog");
// // const myBlogs = document.getElementById("myBlogs");

// db.collection("blogs").get().then((blogs) =>{
//     blogs.forEach((doc) => {
// let myBlogs = document.createElement("div");

// myBlogs.innerHTML = `<div class="flexbox-blog-item" id=${doc.id}>
//                 <img src="${doc.data().imageref}">
//                 <a><h3 onclick="readingBlogs('${doc.id}')">${doc.data().title}</h3></a>
                
//                 <p>
//                 ${doc.data().description.substring(0, 110)}.......
//                 </p>
//             </div>`
// blog.appendChild(myBlogs)
          
//     });
// })
// function readingBlogs(id){
// localStorage.setItem('blogId', id)    
 
// window.location.href='./commet.html'

// }

const blog = document.querySelector(".flexbox-blog");
// const myBlogs = document.getElementById("myBlogs");


firebase.firestore().collection("blogs").get().then((blogs) =>{
    blogs.forEach((doc) => {
let myBlogs = document.createElement("div");
// console.log(doc.id)
const blogDiv = `<div class="flexbox-blog-item" id=${doc.id}>
                <img src="${doc.data().imageref}">
                
                <a href="/commet.html#/${doc.id}"><h3>${doc.data().title}</h3></a>
                
                <p>
                ${doc.data().description.substring(0, 110)}...
                </p>
            </div>`

            blog.innerHTML += blogDiv
            const myId = document.querySelector('.flexbox-blog-item')
            const iid = myId.getAttribute('id')
            console.log(iid)

            // <a ><h3 onclick="readingBlogs(${doc.id})">${doc.data().title}</h3></a>
    });
})
function readingBlogs(id){
//  localStorage.setItem('blogId', id)    
 
window.location.href=`../../commet.html#/${id}`

}
