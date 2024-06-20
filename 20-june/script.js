const add_todo = document.getElementById("add-todo");
const delete_todo = document.getElementById("delete-todo");
const display = document.getElementById('display');
function add_task(){
    const head = document.createElement('h2');
    const para = document.createElement('p');
    const input_task = document.getElementById("task").value;
    const div = document.createElement('div');
    const date = new Date();
    console.log(date.getHours());
    head.innerText = `Title: ${input_task}`;
    para.innerText = `Created at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
    div.appendChild(head);
    div.appendChild(para);
    display.appendChild(div);
    input_task.value = "";
}
add_todo.addEventListener('click', add_task);

delete_todo.addEventListener('click',()=>{
    display.removeChild(display.firstChild);
});
