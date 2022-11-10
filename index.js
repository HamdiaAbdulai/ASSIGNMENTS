function showTodoList(x){
    const todoList= document.getElementById('todo-align')
    const list= document.createElement("li")
    list.classList.add("todo-li")
    list.innerHTML=`
    <div>
    <input id="checkbox-input" type="checkbox">
    <span> ${x}</span>
    <button class="Edit-btn">Edit</button>
    <button class="Delete-btn"> Delete</button>
    </div>`
    todoList.appendChild(list)
    selectButton()

    
}

function DeleteTodo(event){
let target= event.target
let deleteItem= target.parentNode.parentNode
deleteItem.remove()

}

function onSubmitTodo (e){
e.preventDefault();
const inputField= document.getElementById('text-input');
const inputFieldValue= inputField.value;


showTodoList(inputFieldValue)
inputField.value=""

}

function editTodo(e){
const editTarget= e.target
const editItem = editTarget.previousElementSibling
const showEdit = document.getElementById("text-input")
if(e.target.innerHTML==="Edit"){
editTarget.innerHTML="Save"
showEdit.focus()
}else{
    editItem.innerHTML=showEdit.value
    editTarget.innerHTML="Edit"
    
}
showEdit.value=""

}

function selectButton(){
    let buttonArray= document.querySelectorAll(".Edit-btn")
    let lastButton= buttonArray[ buttonArray.length-1]
    lastButton.addEventListener("click", editTodo)
    let deleteButtonArray= document.querySelectorAll(".Delete-btn")
    let deleteLastButton= deleteButtonArray[ deleteButtonArray.length-1]
    deleteLastButton.addEventListener("click", DeleteTodo)

}



const submitForm= document.getElementById("submit-form")
submitForm.addEventListener('submit', onSubmitTodo)
const unorderedList= document.getElementById('todo-align')
unorderedList.innerHtml=""

// let form= document.querySelector("#submit-form")
// let input= document.querySelector("#text-input")
// let heading= document.querySelector("h2")

// form.addEventListener("submit", function(e){
// e.preventDefault()
//  let value= input.value
//  heading.innerHTML= value + "'s To-Do" 

// })
