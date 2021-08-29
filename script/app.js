
let avatars = document.querySelectorAll(".avatars")
let x = 0;
let y = 0;

window.addEventListener("resize", ()=>{
  location.reload();

  console.log("resize")
})

window.addEventListener("mousemove", function(event){
  var avatars = document.querySelectorAll(".avatars")
  x = event.clientX
  y = event.clientY
for (let i=0;i<avatars.length;i++){
  if (x>1030 & y<110){

    document.querySelectorAll(".avatars")[i].setAttribute('src', "images/avatar-smile.svg")

    console.log("x:" + x)
    // console.log("x2:" + x2)
    console.log("y:" + y)
  }else if(x<50 & y<50){
    document.querySelectorAll(".avatars")[i].setAttribute('src', "images/avatar-sad.svg")
  }else{
    document.querySelectorAll(".avatars")[i].setAttribute('src', "images/avatar.svg")
  }

}

})

function smilyAvatar(mediaSize){
  if (mediaSize.matches){
    document.querySelectorAll(".avatars")[0].setAttribute('src', "images/avatar-smile.svg")
    document.querySelectorAll(".avatars")[1].setAttribute('src', "images/avatar-smile.svg")
  }
}

function resizing(){
  let portfolio = document.querySelector(".menu-portfolio")
  return portfolio.getBoundingClientRect().left
}
var mediaSize = window.matchMedia("(max-width: 1000px)")
smilyAvatar(mediaSize)


// ============== parallax scrolling ============

var originalPortfolioLeft = resizing()


window.addEventListener('scroll', function(){
    portfolioLocating(originalPortfolioLeft)
})

function portfolioLocating( originalLeft){
  let logo = document.querySelector(".menu-bar img")
  let portfolio = document.querySelector(".menu-portfolio")


  let scrollValue = window.scrollY
  let cur = scrollValue

  let portfolioLocation = portfolio.getBoundingClientRect()

let opacity = 1- scrollValue/35




  if (scrollValue!==0){
    logo.style.opacity= opacity
  }else{
    logo.style.opacity= 1
  }


var desiredRight = scrollValue * (originalLeft - 32) /34

if (scrollValue<35){
  portfolio.style.right =  desiredRight + "px"
}
if (scrollValue>=35 & portfolioLocation.left>30){


  portfolio.style.right = originalPortfolioLeft +"px"

  var touch = document.querySelectorAll(".menu")[1]
  var margin = getComputedStyle(touch).marginRight.slice(0,2)

  portfolio.style.marginLeft = margin + "px"

}
}


// ============== menu for mobile ============

$(".menu-icon").click(()=>{

  if ($(".menu-mobile").css("display") ==="none"){
    $(".menu-icon").css("background-image", 'url("./../images/icon-close-menu.svg")')
    $(".menu-mobile").css("display", "flex")
    $(".menu-mobile").css("transition", "height 2s")

  }else if($(".menu-mobile").css("display") ==="flex"){
    $(".menu-icon").css("background-image", 'url("./../images/icon-hamburger.svg")')
    $(".menu-mobile").css("display", "none")
  }

})
