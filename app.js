'use strict';


const getDataBase = ()=> JSON.parse(localStorage.getItem('todoList')) ?? [] ;
const setDataBase = (dataBase)=> localStorage.setItem('todoList', JSON.stringify(dataBase));


const createitem = (text, stats, indice)=>{
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${stats} data-indice = ${indice}>
        <div>${text}</div>
        <input class="deleteTask" type="button" value="X" data-indice = ${indice}>
    `;
    document.getElementById('todoList').appendChild(item)
}
const cleanTasks = ()=>{
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }
}
const updateList = ()=>{
    cleanTasks()
    const dataBase = getDataBase();
    dataBase.forEach((item, indice)=> createitem(item.task, item.stats, indice));
}

const insertItem = (event)=>{
    const keyPress = event.key;
    const text = event.target.value;
    console.log(keyPress)
    if(keyPress==='Enter'){
        const dataBase = getDataBase()
        dataBase.push({'task': text, 'stats': ''});
        setDataBase(dataBase) 
        updateList(dataBase)
        event.target.value = ''
    }
}
const removeItem = (indice)=>{
    const dataBase = getDataBase()
    dataBase.splice(indice, 1);
    setDataBase(dataBase);
    updateList()
}
const updateItem= (indice)=>{
    const dataBase = getDataBase()
    dataBase[indice].stats =  dataBase[indice].stats ==='' ? 'checked' : '';
    setDataBase(dataBase);
    updateList()
}
const clickitem = (event)=>{
    const element = event.target;
    if(element.type==='button'){
        const indice = element.dataset.indice;
        removeItem(indice)
    }else if(element.type === 'checkbox'){
        const indice = element.dataset.indice;
        updateItem(indice);
    }
}
document.getElementById('newItem').addEventListener('keypress', insertItem)
document.getElementById('todoList').addEventListener('click', clickitem);

updateList()



