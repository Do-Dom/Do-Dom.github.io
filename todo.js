const todoContainer = document.querySelector(".js-todo")
const todoComment = todoContainer.querySelector(".js-comment");

const todoList = todoContainer.querySelector(".js-todoList");
const todoForm = todoContainer.querySelector(".js-form");
const todoInput = todoForm.querySelector("input");

const ToDO_LS = "todos";

let TodoContentList = [];

function saveTodoList()
{
    console.log(TodoContentList);
    localStorage.setItem(ToDO_LS, JSON.stringify(TodoContentList));
}

function handleBtnClick(event)
{
    const li = event.target.parentNode;
    todoList.removeChild(li);
    const cleanedTodoList = TodoContentList.filter((todo)=>{
        return todo.id != parseInt(li.id);
    });
    TodoContentList = cleanedTodoList;
    saveTodoList();
}

function getId()
{
    let id;
    if(TodoContentList.length<1)
    {
        id = 1;
    }
    else
    {
        id = TodoContentList[TodoContentList.length-1].id + 1;
    }

    return id;
}

function showTodo(newTodo)
{
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    btn.innerText = "X";
    btn.addEventListener("click", handleBtnClick);
    span.innerHTML = newTodo.content;
    
    li.id = newTodo.id;
    li.appendChild(btn);
    li.appendChild(span);

    todoList.appendChild(li);
}

function handleSubmit(event)
{
    event.preventDefault();
    if(todoInput.value.length<1){
        console.log("Input Value is null");
        return;
    }

    const id = getId();
    const _todo = {
        id,
        content : todoInput.value
    };

    if(TodoContentList == null)
      TodoContentList = new Array();

    TodoContentList.push(_todo);
    saveTodoList();

    showTodo(_todo);
    todoInput.value = "";
}

function init()
{
    todoForm.addEventListener("submit", handleSubmit);
    TodoContentList = JSON.parse(localStorage.getItem(ToDO_LS));
    if(TodoContentList != null)
    {
        for(i=0; i<TodoContentList.length; i++)
        {
            showTodo(TodoContentList[i]);
        }
    }
    else
    {
        TodoContentList = new Array();
    }

}

init();