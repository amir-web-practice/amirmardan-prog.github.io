
let avatars = document.querySelectorAll(".avatars")
let x = 0;
let y = 0;

window.addEventListener("mousemove", function(event){
  var avatars = document.querySelectorAll(".avatars")
  x = event.clientX
  y = event.clientY

if (x>1030 & y<110){

  document.querySelectorAll(".avatars")[0].setAttribute('src', "images/avatar-smile.svg")
  document.querySelectorAll(".avatars")[1].setAttribute('src', "images/avatar-smile.svg")

  console.log("x:" + x)
  // console.log("x2:" + x2)
  console.log("y:" + y)
}else if(x<50 & y<50){
  document.querySelectorAll(".avatars")[0].setAttribute('src', "images/avatar-sad.svg")
  document.querySelectorAll(".avatars")[1].setAttribute('src', "images/avatar-sad.svg")
}else{
  document.querySelectorAll(".avatars")[0].setAttribute('src', "images/avatar.svg")
  document.querySelectorAll(".avatars")[1].setAttribute('src', "images/avatar.svg")
}

})

function smilyAvatar(mediaSize){
  if (mediaSize.matches){
    console.log("hi")
    document.querySelectorAll(".avatars")[0].setAttribute('src', "images/avatar-smile.svg")
    document.querySelectorAll(".avatars")[1].setAttribute('src', "images/avatar-smile.svg")
  }
}

var mediaSize = window.matchMedia("(max-width: 1000px)")
smilyAvatar(mediaSize)
// mediaSize.addListener(smilyAvatar)
