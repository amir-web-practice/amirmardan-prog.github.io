let cyan = "hsl(176, 50%, 47%)";
let darkCyan = "hsl(176, 72%, 28%)";
let gray = "hsl(0, 0%, 50%)"
let lightGray = "hsl(0, 0%, 90%)"

zeroProductionLeft()

document.querySelector(".bookmark label").addEventListener("mouseup", function(){
  if (document.querySelector(".bookmark .bookmark-check").checked===true){
    // document.querySelector(".bookmark").style.backgroundColor = lightGray
    document.querySelector(".bookmark").style.color = gray
    document.querySelector(".bookmark svg circle").setAttribute("fill", "#2F2F2F")
    document.querySelector(".bookmark svg path").setAttribute("fill", "#B1B1B1")
    document.querySelector(".bookmark span").innerHTML = "Bookmark"
  }else{
    // document.querySelector(".bookmark").style.backgroundColor = cyan
    document.querySelector(".bookmark").style.color = darkCyan
    document.querySelector(".bookmark svg circle").setAttribute("fill", darkCyan)
    document.querySelector(".bookmark svg path").setAttribute("fill", "#fff")
    document.querySelector(".bookmark span").innerHTML = "Bookmarked"

  }
})


function zeroProductionLeft(){
  let products = document.querySelectorAll(".production")

  for (let i=0; i<products.length; i++){
    if (document.querySelectorAll(".production .left-box-production h3")[i].innerHTML==0){
      products[i].style.opacity = "50%"
      document.querySelectorAll(".production .select-reward")[i].style.backgroundColor = gray
    }
  }

}


document.querySelector(".menu-logo").addEventListener('click', function(){
  if (document.querySelector(".menu .menu-mobile").style.visibility=== "hidden"){
    document.querySelector(".menu .menu-mobile").style.visibility= "visible"
    document.querySelector(".menu .menu-logo").style.backgroundImage = "url('../images/icon-close-menu.svg')";
  }else{
    document.querySelector(".menu .menu-mobile").style.visibility= "hidden"
    document.querySelector(".menu .menu-logo").style.backgroundImage = "url('../images/icon-hamburger.svg')";

  }

})
