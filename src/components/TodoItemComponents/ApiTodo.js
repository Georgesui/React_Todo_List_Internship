const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

// with help of fetch we will create simple API requests 
export async function addTodos(todo) {
	const resp = await fetch(`${TODO_URL}`,{
		method:'POST',
		body: JSON.stringify(todo),
		headers:{'Content-Type': 'application/json'}
	})

	return resp.json();
}

export async function renderAllTodos () {
	const resp = await fetch(`${TODO_URL}`,{
		method:'GET'
	})
	return resp.json();
}

export async function deleteTodo (id) {
	const resp = await fetch(`${TODO_URL}/${id}`, {
		method: 'DELETE'
	})
	return resp.json();
}

export async function updateTodoStatus (id,todo){
	const resp =await fetch(`${TODO_URL}/${id}`,{
		method: 'PUT',
		body: JSON.stringify(todo),
		headers: {'Conent-Type':'application/json'}
	})
	return resp.json();
}