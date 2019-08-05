/*Função que adicionará o que foi escrito no input
para uma lista ordenada, caso nada for escrito, pedirá uma tarefa*/
function toDoList() {
	if (document.getElementById("toDoInput").value == ""){
		alert("Escreva uma tarefa")
	}
		else {
	var item = document.getElementById("toDoInput").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	newItem.appendChild(text)
	document.getElementById("toDoList").appendChild(newItem)
	document.getElementById("toDoInput").value = ""

/*variável responsável por criar um botão ao lado da nova tarefa
com a função de quando clicado, removerá o que foi criado acima*/

	var removeTask = document.createElement("input");
	    removeTask.setAttribute("type", "button");
	    removeTask.setAttribute("value", "X");
	    removeTask.setAttribute("id", "removeButton");
	    removeTask.addEventListener("click", function(e) {
	        newItem.parentNode.removeChild(newItem);
	    });
	    newItem.appendChild(removeTask);

	}


}

