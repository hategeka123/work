const blog = document.querySelector(".flexbox-blog");
// const myBlogs = document.getElementById("myBlogs");


firebase.firestore().collection("blogs").get().then((blogs) =>{
    blogs.forEach((doc) => {
let myBlogs = document.createElement("div");
let date = doc.data().created_at.toDate()
let dateObject = new Date(date)
let month = dateObject.toLocaleString('en-GB',{month: 'short'});
let year = dateObject.getFullYear()
let day = dateObject.toLocaleDateString('en-GB', {day: '2-digit'})
let dateResult = `${day}-${month}-${year}`;

firebase.auth().onAuthStateChanged(user => {
    // console.log(user.email + "  loged in user")
    if(!user){
        const blogDiv = `<div class="flexbox-blog-item" id=${doc.id}>
                        <img src="${doc.data().imageref}">
                        
                        <a href="#" class="link" onclick=readingBlogs("${doc.id}")><h3>${doc.data().title} </h3></a>
                        <span>${dateResult}</span> 
                        <p>
                        
                        ${doc.data().description.substring(0, 110)}...
                        </p>
                        
                    </div>`
        
        blog.innerHTML += blogDiv
        const myId = document.querySelector('.flexbox-blog-item')
        const iid = myId.getAttribute('id')
        console.log(iid)
        const header = document.getElementsByTagName('a .link')
        header.style.cursor = "not-allowed"
        console.log(header)
        header.href = "#";
        // header.disabled = true
    } else if(user){
        
        const blogDiv = `<div class="flexbox-blog-item" id=${doc.id}>
                        <img src="${doc.data().imageref}">
                        
                        <a href="/commet.html#/${doc.id}" class="link" onclick=readingBlogs("${doc.id}")><h3>${doc.data().title} </h3></a>
                        <span>${dateResult}</span> 
                        <p>
                        
                        ${doc.data().description.substring(0, 110)}...
                        </p>
                        
                    </div>`
        
                    blog.innerHTML += blogDiv
                    const myId = document.querySelector('.flexbox-blog-item')
                    const iid = myId.getAttribute('id')
                    console.log(iid)
    }
    
                // <a ><h3 onclick="readingBlogs(${doc.id})">${doc.data().title}</h3></a>
        });

})
 
})
function readingBlogs(id){
    localStorage.setItem('blogId', id)  

}
