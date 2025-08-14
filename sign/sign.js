let loginid = document.querySelector("#login");
let regid = document.querySelector("#reg");
let Box1 = document.querySelector(".box");
let Box2 = document.querySelector(".Box-2");


loginid.addEventListener("click",(e)=>{

    e.preventDefault();
    
   Box1.classList.add("hide");
   Box2.classList.remove("hide")

console.log(loginid);

});


regid.addEventListener("click",(e)=>{

    e.preventDefault();
   Box2.classList.add("hide");
   Box1.classList.remove("hide")



});