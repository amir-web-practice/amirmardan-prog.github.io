document.getElementById("theme").addEventListener("click", function() {
  if (document.getElementById("theme").checked === true) {
    document.getElementsByClassName("dark-theme")[0].className = "light-theme"
  } else {
    document.getElementsByClassName("light-theme")[0].className = "dark-theme"
  }
})

let theme = document.querySelector("body")




countTheLefts()
// liUpdateClicks()

//===========================================

function allTasks() {
  /*
    Function to seperate all lists
  */
  return document.querySelectorAll("ul li")
}

function doneTasks() {
  /*
    Function to seperate all checked lists
  */
  return document.querySelectorAll("ul li input:checked")
}

function activeTasks() {
  /*
    Function to seperate all nonchecked lists
  */
  return document.querySelectorAll("ul li input:not(:checked)")
}


function liUpdateClicks() {
  /*
  Function for counting the left tasks. "i" has to be updated
  when we add new task to the list so, we have to use "liUpdateClicks" after
  adding item to the list.

  to extend "i" to the the new length of "li"s after adding new task
  */
  for (let i = 0; i < document.querySelectorAll("ul li").length; i++) {
    document.querySelectorAll("ul li label")[i].addEventListener('click', countTheLefts)

  }
}

  function countTheLefts() {
    /*
      Count the left ones
    */
    // updateFilter()

    let activeRadio = document.querySelectorAll("input[type='radio'][name='filter']:checked")[0].id
    let m_activeRadio = document.querySelectorAll("input[type='radio'][name='mfilter']:checked")[0].id

    triggerEvent( document.getElementById("all"), 'click' );
    triggerEvent( document.getElementById("m_all"), 'click' );


    let all = allTasks()

    let done = doneTasks()
    let left = activeTasks().length //all.length - done.length
    document.querySelector(".items-left span").innerHTML = left
    triggerEvent(document.getElementById(activeRadio), 'click' );
    triggerEvent(document.getElementById(m_activeRadio), 'click' );


}

// // Click on the labels
// for (var i=0; i<document.querySelectorAll("ul li").length; i++){
//   document.querySelectorAll("ul li label")[i].addEventListener('click', countTheLefts)
// }


function showActive(left, done) {
  /*
  Function for show active tasks
  */
  for (let jj = 0; jj < left.length; jj++) {
    li = left[jj].parentElement.parentElement
    li.style.display = ''
  }

  for (var j = 0; j < done.length; j++) {
    li = done[j].parentElement.parentElement
    li.style.display = 'none'
  }
}


function showAll(left, done) {
  /*
  Function for show all tasks
  */
  for (let jj = 0; jj < left.length; jj++) {
    li = left[jj].parentElement.parentElement
    li.style.display = ''
  }

  for (var j = 0; j < done.length; j++) {
    li = done[j].parentElement.parentElement
    li.style.display = ''
  }
}

function showCompleted(left, done) {
  /*
  Function for show completed tasks
  */
  for (let j = 0; j < done.length; j++) {
    li = done[j].parentElement.parentElement
    li.style.display = ''
  }

  for (let jj = 0; jj < left.length; jj++) {
    li = left[jj].parentElement.parentElement
    li.style.display = 'none'
  }
}


function updateRemoves() {
  for (let removeIndex = 0; removeIndex < document.querySelectorAll(".remove").length; removeIndex++) {
    document.querySelectorAll(".remove")[removeIndex].addEventListener("click", function() {
      let ul = this.parentElement.parentElement
      let li = this.parentElement

      if (ul) {
        ul.removeChild(li)
        countTheLefts()
      }


    })
  }
}


// Filtering for desktop
for (let filterIndex = 0; filterIndex < document.querySelectorAll(".filter input").length / 2; filterIndex++) {
  document.querySelectorAll(".filter input")[filterIndex].addEventListener("change", function() {
    all = allTasks()
    done = doneTasks()
    left = activeTasks()

    // if click happens on "all", all lists have to be visible
    if (document.getElementById("all").checked) {
      showAll(left, done)

      // if click happens on "active", "active" has to be visible but not "done"
    } else if (document.getElementById("active").checked) {
      showActive(left, done)

      // if click happens on "completed", "done" has to be visible but not "left"
    } else if (document.getElementById("completed").checked) {

      showCompleted(left, done)
    }

  })
}


// Filtering for mobile
for (let filterIndex_m = 3; filterIndex_m < document.querySelectorAll(".filter input").length; filterIndex_m++) {
  document.querySelectorAll(".filter input")[filterIndex_m].addEventListener("change", function() {

    all = allTasks()
    done = doneTasks()
    left = activeTasks()

    // if click happens on "all", all lists have to be visible
    if (document.getElementById("m_all").checked) {
      showAll(left, done)

      // if click happens on "active", "active" has to be visible but not "done"
    } else if (document.getElementById("m_active").checked) {
      showActive(left, done)

      // if click happens on "completed", "done" has to be visible but not "left"
    } else if (document.getElementById("m_completed").checked) {

      showCompleted(left, done)
    }

  })
}


// Clear completed
document.querySelector(".clear").addEventListener("click", function() {
  let allMarked = document.querySelectorAll("ul li input:checked")
  let marked
  let li
  let ul

  for (marked = 0; marked < allMarked.length; marked++) {
    li = allMarked[marked].parentElement.parentElement
    ul = li.parentElement

    ul.removeChild(li)
  }
})


var newTask = document.querySelector(".add-new-item input");

newTask.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    if (this.value) {

      let activeRadio = document.querySelectorAll("input[type='radio'][name='filter']:checked")[0].id
      let m_activeRadio = document.querySelectorAll("input[type='radio'][name='mfilter']:checked")[0].id


      triggerEvent( document.getElementById("all"), 'click' );
      triggerEvent( document.getElementById("m_all"), 'click' );

      let ul = document.querySelector("ul");

      let li = document.createElement("li");
      li.className = "flex-row"

      let label = document.createElement("label")
      label.className = "list-item";

      let inputCheckbox = document.createElement("input")
      inputCheckbox.setAttribute("type", "checkbox")
      inputCheckbox.setAttribute("name", "todoItem")

      let spanCheckmark = document.createElement("span")
      spanCheckmark.className = "checkmark"

      let spanText = document.createElement("span")
      spanText.className = "text"
      spanText.appendChild(document.createTextNode(this.value))

      let spanRemove = document.createElement("span")
      spanRemove.className = "remove"

      let divMask = document.createElement("div")
      divMask.className = "mask"

      spanCheckmark.innerHTML += "\n \t \t \t"
      spanCheckmark.appendChild(divMask)

      label.innerHTML += "\n \t \t"
      label.appendChild(inputCheckbox)
      label.innerHTML += "\n \t \t"
      label.appendChild(spanCheckmark);

      label.innerHTML += "\n \t \t"
      label.appendChild(spanText)

      li.innerHTML += "\n \t"
      li.appendChild(label)

      li.innerHTML += "\n \t"
      li.appendChild(spanRemove)
      ul.appendChild(li)


      countTheLefts()
      liUpdateClicks()
      updateRemoves()


      triggerEvent(document.getElementById(activeRadio), 'click' );
      triggerEvent(document.getElementById(m_activeRadio), 'click' );


    }

    this.value = ''
  }

})

function triggerEvent( elem, event ) {
  var clickEvent = new MouseEvent( event, {
      view: window,
      bubbles: true,
      cancelable: true,
      isTrusted:true,
      composed:true}) ; // Create the event.
  elem.dispatchEvent( clickEvent );    // Dispatch the event.
}
