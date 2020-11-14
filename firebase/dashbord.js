// --------------------/ getting blogs/ ---------------------------


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
                ${doc.data().description.substring(0, 50)}...
                </p>
                        <div class="button">
                          <a href="../../editBlogs.html#/${doc.id}"><i onclick="editBlog()" class="far fa-edit" id = "bt"></i></a>
                            
                            <i onclick="deleteBlog()" class="fas fa-trash-alt" id = "dt"></i>
                        </div>
            </div>`

            blog.innerHTML += blogDiv
            const myId = document.querySelector('.flexbox-blog-item')
            const iid = myId.getAttribute('id')
            console.log(iid)

            // console.log(doc.id)

            // <a ><h3 onclick="readingBlogs(${doc.id})">${doc.data().title}</h3></a>
    });
})
function readingBlogs(id){
//  localStorage.setItem('blogId', id)    
 
window.location.href=`../../commet.html#/${id}`

}


// /---------------------------- delete ----------------------------------------/

function deleteBlog(){
    const blogId = event.target.parentNode.parentNode.id
    firebase.firestore().collection("blogs").doc(blogId).delete()
    // console.log('hello word')
    alert("Deleted successfully!!!")
}

// --------------------------------editBlog-----------------------------------------------------

function editBlog(){
    const blogId = event.target.parentNode.parentNode.id
    console.log(blogId)
    // console.log(hshhdhhjdshjdshjshjsh)
}