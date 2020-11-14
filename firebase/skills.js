console.log('jhjbjbjbjbjbjbj')
// /....................... upload skills .................../

const skill_Form = document.getElementById("skill_Form");

// console.log(skill_Form)

skill_Form.addEventListener('submit', (e) => {
    e.preventDefault();

  let title = document.getElementById('title').value;
  let image = document.getElementById('img').files[0];
  let content = document.getElementById('description').value;
  let created_at = new Date();

//   console.log(title)

//   const storageRef = firebase.storage().ref();
const storageRef = firebase.storage().ref()
  const imageName = storageRef.child(image.name);
  console.log(image.name)
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
    await firebase.firestore().collection('skills').add(article);
                 console.log(article)
                 console.log(downloadURL)
               alert(" Article successfully Uploaded");
               skill_Form .reset()
              //  window.location.replace("./blog.html");
    })
  })

})


