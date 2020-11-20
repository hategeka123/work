// logout user
function logOutUser(){   
auth.signOut().then(()=>{ 
window.location.href = "../../login.html"; 
}
)}