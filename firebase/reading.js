const blog = document.querySelector(".flexbox-blog");
// const myBlogs = document.getElementById("myBlogs");

db.collection("blogs").get().then((blogs) =>{
    blogs.forEach((doc) => {
        console.log(doc.data());
// myBlogs.innerHTML = "helloworld";
let myBlogs = document.createElement("div");
// let title = document.createElement("p");
// let content = document.createElement("p");

// title.textContent = "helloWold";
// content.textContent = doc.data().description;

// myBlogs.appendChild(title);
// myBlogs.appendChild(content);
const image = firebase.storage().ref().child(doc.data().image).getDownloadURL().then((img) =>{
    return img;
})

myBlogs.innerHTML = `<div class="flexbox-blog-item">
                <img src="${image}">
                <a href="./commet.html"><h3>${doc.data().title}</h3></a>
                <p>
                ${doc.data().description}
                </p>
            </div>`
blog.appendChild(myBlogs)
        readingBlogs();    
    });
})
function readingBlogs(){
 
console.log("n");

}


