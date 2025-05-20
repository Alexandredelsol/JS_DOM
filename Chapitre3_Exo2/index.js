const form = document.querySelector("#form");
const submit = document.querySelector("#submit");
const myList = document.querySelector(".myList");

const todoList = document.querySelector("#todoList")

form.addEventListener("submit", event => {
    event.preventDefault();
    let li = document.createElement("li")

    li.innerText += todoList.value;
    myList.appendChild(li);
})