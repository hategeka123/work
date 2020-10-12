const myForm = document.getElementById("my-form");
myForm.addEventListener('submit', (e) => {

  e.preventDefault();

  // get value from input field
  let title = document.getElementById('title').value;
  let image = document.getElementById('img').files[0];
  let content = document.getElementById('description').value;
  let created_at = new Date();

//upload image
// function change(){
//   let file = {};
//   file = e.target.files[0];
//   firebase.storage().ref(`blogs/images/${blogId}`).put(file).then((img) => {
//     console.log(img)
//   })
// };

  // save image in storage
  const storageRef = firebase.storage().ref();
  const imageName = storageRef.child(image.name);
  const articleImage = imageName.put(image);
  console.log(title)
  console.log(image)
  console.log(content)
  console.log(imageName)
  articleImage.on('state_changed', (snapshot) => {
    const progress = (snapshot.bytesTransfarred/snapshot.totalBytes)*100;

    console.log( "upload is " + progress + "%" + " image uploaded")
  }, (error) => {
    console.log(error.message)
  }, () => {
    articleImage.snapshot.ref.getDownloadURL().then(async downloadURL => {
       // article object
       let article = {
        title,
        description: content,
        imageref: downloadURL,
        image: imageName.location.path_,
        created_at
    };
    await firebase.firestore().collection('blogs').add(article);
                 console.log(article)
                 console.log(downloadURL)
               alert(" Article successfully Uploaded");
               myForm.reset()
              //  window.location.replace("./blog.html");
    })
  })
 
})