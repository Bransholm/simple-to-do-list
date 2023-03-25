"use strict";
window.addEventListener("load", initApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp() { 
    document.querySelector("btn-add-item").addEventListener("click; addToDo");

};

function addToDo() {};

function removeToDo() { };

const myHTML = `
<li>
<span>${newToDo.value}</span>
<button>Add</button>
</li>
`;

list.insertAdjacentHTML("beforeend", myHTML);