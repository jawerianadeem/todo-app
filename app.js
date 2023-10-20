var list =document.getElementById("list")
function addtodo(){
    var todo_item=document.getElementById("todo item");
    var li =document.createElement('li')
    var liText=document.createTextNode(todo_item.value);
    li.appendChild(liText);

    var delbtn=document.createElement("button")
    var delText=document.createTextNode("Delete");
    delbtn.setAttribute("class","delbtn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(delText)
    li.appendChild(delbtn)

    var editbtn=document.createElement("button")
    var editText=document.createTextNode("Edit");
    editbtn.setAttribute("class","editbtn")
    editbtn.setAttribute("onclick","editItem(this)")
    editbtn.appendChild(editText)
    li.appendChild(editbtn)
    
    list.appendChild(li);
    todo_item.value="";
}
function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
    var editValue=prompt("Enter edit value..")
    e.parentNode.firstChild.nodeValue=editValue
}