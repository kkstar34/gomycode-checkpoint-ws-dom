// const comment = document.getElementById("commentaire");
// const comment = document.getElementsByClassName("commentaire");
// const comment = document.getElementsByTagName("h1");
 const comment = document.querySelector(".commentaire");

// const comment = document.querySelectorAll(".commentaire");

const btn = document.querySelector('#btn');

//add event listeners


btn.addEventListener("click", changeText);

// btn.addEventListener("mouseover", onMouseOver);

// btn.addEventListener("mouseout", onMouseOut);




function changeText(){
//changing content html

comment.innerHTML = "<small> Les gars sont concentrés !</small>";
// this.nextElementSibling.style.color = "blue";

this.nextElementSibling.classList.add("color-blue")

this.parentElement.nextElementSibling.innerHTML = "<h2> Est ce que c'est compliqué ? </h2>"

}


// function onMouseOver(){
//     comment.classList.add("color");
// }


// function onMouseOut(){
//     comment.classList.remove("color");

// }
