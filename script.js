var istatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var removeFriend = document.querySelector("#remove");

addFriend.addEventListener("click", function(){
    istatus.innerHTML="Friends"
    istatus.style.color="green"
    // addFriend.style.display="none"
})
removeFriend.addEventListener("click", function(){
    istatus.innerHTML="Stranger"
    istatus.style.color="red"
    // addFriend.style.display="block"

})