function showTodoList(x){
    const todoList= document.getElementById('todo-align')
    const list= document.createElement("li")
    list.classList.add("todo-ul")
    list.innerHTML=`
    <li>
    <input id="checkbox-input" type="checkbox">
    <span> ${x}</span>
    <button id="Edit-btn">Edit</button>
    <button id="Delete-btn"> Delete</button>
    </li>`
    todoList.appendChild(list)
    
}





function onSubmitTodo ( e){
e.preventDefault();
const inputField= document.getElementById('text-input');
const inputFieldValue= inputField.value;

showTodoList(inputFieldValue)

}







const submitForm= document.getElementById("submit-form")
submitForm.addEventListener('submit', onSubmitTodo)