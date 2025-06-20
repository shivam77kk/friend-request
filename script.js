var isstatus = document.querySelector("h5")
var add = document.querySelector("#add")
var flag = 0
add.addEventListener("click",function(){
if(flag == 0 ){
     isstatus.innerHTML = "friends"
    isstatus.style.color = "green"
    add.innerHTML = "remove friend"
    add.style.backgroundColor = "red"
    flag = 1
}else {
     isstatus.innerHTML = "stranger"
    isstatus.style.color = "red"
    add.innerHTML = "add friend"
    add.style.backgroundColor = "cadetblue"
    flag = 0
}
   
})
