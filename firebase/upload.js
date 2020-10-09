const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('helllo')

    let title =document.getElementById("title");
    let image =document.getElementById("img").files[0];
    let description =document.getElementById("description");

    console.log(image);
    const storageRef = firebase.storage().ref();
    const imageName = storageRef.child(image.name);
    const articleImage = imageName.put(image);

    // let imageName = img.name;

    // let storageRef = firebase.storage().Ref('images/+imageName');

    // let AddPostTask = storageRef.put('img');
    articleImage.on('storage_changed', function(snapshot){

        console.log("add post is done" + snapshot);
    })

})
