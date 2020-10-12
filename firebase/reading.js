const myBlogs = document.getElementById("myBlogs");

db.collection("blogs").get().then((blogs) =>{
    blogs.forEach((doc) => {
        console.log(doc.id);
myBlogs.innerHTML = "helloworld";
//         let myBlogs = document.createElement("div");
// let title = document.createElement("p");
// let content = document.createElement("p");

// title.textContent = "helloWold";
// content.textContent = doc.data().description;

// myBlogs.appendChild(title);
// myBlogs.appendChild(content);

        readingBlogs();    
    });
})
function readingBlogs(){
 
console.log("n");

}


