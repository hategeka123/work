
const userName = document.querySelector(".name")
const userRole = document.querySelector(".role")
const profile = document.querySelector(".profile")
console.log(profile)
const table = document.querySelector(".thead-inverse")
firebase.firestore().collection("Users").get().then((Users) =>{
    Users.forEach((doc) =>{
        const id = doc.id
        const row = `<tbody class="tdata" id="${doc.id}">
        <td id="titleTask"> ${doc.data().name}</td>
        <td id="categoryTask"> ${doc.data().userRole}</td>
        <td id="statusTask"><i onclick="deleteBlog()" class="fas fa-trash-alt" id = "dt"></i>
        <select id="info" name="carlist" form="carform">
        <option value="admin">Admin</option>
        <option value="user">User</option>
        </select>
        </td>
        </tr>
        </tbody>`;
        table.innerHTML +=row
// console.log(row.id)        
    })
})

function deleteBlog(){
    const mydi = event.target.parentElement.parentNode.id
    console.log(mydi)
    firebase.firestore().collection("Users").doc(mydi).delete();
    alert("Deleted successfully!!!")
}
// ----------------------------------- delete user------------------------------------------------

// function deleteContact(){
//     const userId = event.target.parentNode.parentNode
//     console.log(userId)