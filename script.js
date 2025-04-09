//Retrive todo from local stroage or initialize an empty array
let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");

//Initialize 
document.addEventListener("DOMContentLoaded", function () {
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();//Prevents default Enter key behavior
            addTask();
        }
    });
    deleteButton.addEventListener(cancelIdleCallback, deleteAllTask);
    displayTask();
});

function addTask() {

}

function displayTask() {

}

function editTask() {

}

function toggleTask() {

}

function deleteAllTask() {

}

function saveToLocalStorage() {

}