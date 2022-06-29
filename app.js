'use strict';
let toDoList = document.querySelector('.todo__list')
let dataBase = []
const taskText = document.querySelector('#textContent')
const createTask = ()=>{
    let div = document.createElement('label');
    div.innerHTML = `
        <label class="todo__item">
        <input type="checkbox">
        <div>${taskText.value}</div>
        <input class="deleteTask" type="button" value="X">
        </label>`;
    toDoList.appendChild(div).classList.add('todo__item')
}
document.querySelector('.todo__new-item').addEventListener('keypress', (e)=>{
    if(e.which==13){
        createTask()
    }
}, false)

const removeTask = (event)=>{
    const element = event.target;
    if(element.type=='button'){

    }
}
const atualizarLista = ()=>document.querySelectorAll('.todo__item').forEach((task)=>{
    dataBase.push(task)
    task.addEventListener('click', removeTask)
})

atualizarLista()




