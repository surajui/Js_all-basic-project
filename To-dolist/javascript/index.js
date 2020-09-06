const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);


//functions
function addTodo(event){
    event.preventDefault();
    // console.log('---Hello');

    //create TodoDiv
    const todoDiv = document.createElement('div')
    todoDiv.classList.add("todo"); //class of this Div is todo

//Create Li
const newTodo = document.createElement('li') //create Li tag inside div
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item'); //create class todo-item
todoDiv.appendChild(newTodo); //li tag is append to div

//Checkmark button
const eventButton = document.createElement('button'); //create check-button 
eventButton.innerHTML ='<i class="fa fa-check"></i>';
eventButton.classList.add('complete-btn'); //add button class 
todoDiv.appendChild(eventButton); //append to todo div

//Delete button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fa fa-trash"></i>';
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);

//Append to list
todoList.appendChild(todoDiv);//total todoDiv append to todoList line 26

}
function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.remove();
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}