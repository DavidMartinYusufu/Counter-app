const state = document.querySelector("#value");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");
const insert = document.querySelector("#insert");
const input = document.querySelector("input");

increment.addEventListener("click", incrementFunction);
decrement.addEventListener("click", decrementFunction);
reset.addEventListener("click", resetFunction);
insert.addEventListener("click", insertFunction);

let count = 0;
state.textContent = count;

function incrementFunction() {
  count++;
  state.textContent = count;
}

function decrementFunction() {
  if (state.textContent == 0) {
    return
  }
  count -= 1;
  state.textContent = count;
}

function resetFunction() {
  count = 0;
  state.textContent = count;
}

function insertFunction() {
  if(input.value == "") {
    return
  }
  count = input.value
  state.textContent = count
  input.value = ""
  
  console.log(input.value)
  // count = state.textContent
}

// insertFunction()
