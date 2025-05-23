const form = document.querySelector("#form");
const submit = document.querySelector("#submit");
const myList = document.querySelector(".myList");

const todoList = document.querySelector("#todoList")


form.addEventListener("submit", event => {
    event.preventDefault();

    console.log(e.value);
    let li = document.createElement("li")
    let button = document.createElement("button");
    button.innerText = "Task Done";
    li.innerText += todoList.value;
    myList.appendChild(li);
    myList.appendChild(button)
    button.addEventListener("click", function (event) {
        event.preventDefault();
        li.remove();
        button.remove();
    })
})




/*
form.addEventListener("click", event => {
    event.preventDefault();
    li.remove();
})*/
