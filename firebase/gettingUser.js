
const userName = document.querySelector(".name")
const userRole = document.querySelector(".role")
const table = document.querySelector(".thead-inverse")
console.log("jmv")
console.log(table)
// thead-inverse
// tdata
// console.log(user)
firebase.firestore().collection("Users").get().then((Users) =>{
    Users.forEach((doc) =>{
        const id = doc.id
        // console.log(id)
        // console.log(doc.data())
        
        const row = `<tbody class="tdata" id="${doc.id}">
        <td id="titleTask"> ${doc.data().name}</td>
        <td id="categoryTask"> ${doc.data().userRole}</td>
        <td id="statusTask"><i onclick="deleteBlog()" class="fas fa-trash-alt" id = "dt"></i></td>
        </tr>
        </tbody>`;
        table.innerHTML +=row
console.log(row.id)        
    })
})

function deleteBlog(){
    const mydi = event.target.parentElement.parentNode.class
    console.log(mydi)
    // firebase.firestore().collection("Users").doc().delete();
    // console.log(userId)
    alert("Deleted successfully!!!")
}
// ----------------------------------- delete user------------------------------------------------

// function deleteContact(){
//     const userId = event.target.parentNode.parentNode
//     console.log(userId)
// }

