
const userData = document.querySelector(".userData")
const userName = document.querySelector(".name")
const userRole = document.querySelector(".role")
// console.log(user)
firebase.firestore().collection("Users").get().then((Users) =>{
    Users.forEach((doc) =>{
        console.log(doc.data())
        const userDiv = ` <div class="userRole">
        <table>
            
            <tr>
                <td>${doc.data().name}</td>
                <td>${doc.data().userRole}</td>
                <td>
                <i onclick="deleteContact()" class="fas fa-trash-alt" id = "dlt"></i>
                </td>
            </tr>
        </table>
    </div>`
    // userName.innerHTML += `${doc.data().name}`
    userData.innerHTML += ` 
        <td>${doc.data().name}</td>            
        <td>${doc.data().userRole}</td>
    `
    })
})

// ----------------------------------- delete user------------------------------------------------

function deleteContact(){
    const userId = event.target.parentNode.parentNode.id
    console.log(userId)
}


// const userName = document.querySelector(".name")
// const userRole = document.querySelector(".role")
// // console.log(user)
// firebase.firestore().collection("Users").get().then((Users) =>{
//     Users.forEach((doc) =>{
//         console.log(doc.data())
//         const userDiv = ` <div class="userRole">
//         <table>
            
//             <tr>
//                 <td>${doc.data().name}</td>
                
//                 <td>
//                 <i onclick="deleteContact()" class="fas fa-trash-alt" id = "dlt"></i>
//                 </td>
//             </tr>
//         </table>
//     </div>`
//     userName.innerHTML += userDiv
//     })
// })

// // ----------------------------------- delete user------------------------------------------------

// function deleteContact(){
//     const userId = event.target.parentNode.parentNode.id
//     console.log(userId)
// }

