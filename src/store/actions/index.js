import {renderAllTodos, deleteTodo, updateTodoStatus, addTodos} from '../../components/TodoItemComponents/ApiTodo';

// we indicate type of our requests in order to handle them

export const SET_TODOS = '[TODOList] set todos';
export const DELETE_TODOS ='[TODOlist] delete todo';
export const UPDATE_STATUS_TODO = '[TODOlist] update status todo';
export const UPDATE_TITLE_TODO = '[TODOlist] update title todo';
export const ADD_TODOS = '[TODOlist] get todos';

// we describe our actions using types, in payload we receive some kind of data 

export const addTodosAction =(todos) =>{
	return {
		type: ADD_TODOS,
		payload: todos
	}
}

export const setTodosAction= (todos)=> {
	return {
		type: SET_TODOS,
		payload:todos
	}
}

export const deleteTodoAction = (id) => {
	return { 
		type: DELETE_TODOS,
		payload: id
	}
}

export const updateTodo = (payload) => {
	return {
		type: UPDATE_STATUS_TODO,
		payload: payload
	}
}

// with the help of API requests we will create function to handle them using our actions

export const fetchAddTodo = (todos) => {
	return async function (dispatch) {
		try {
			const addedTodo = await addTodos(todos);
			dispatch(addTodosAction(addedTodo))
		} catch(e) {
			console.warn(e)
		}
	}
}

export const fetchInitTodos = () =>{
	return async function (dispatch) {
		try {
			const todos = await renderAllTodos();
			dispatch(setTodosAction(todos))
		}
		catch (e) {
			console.warn(e)
		}
	}
}

export const fetchDeleteTodo = (id) =>{
	return async function (dispatch) {
		try {
			await deleteTodo(id);
			dispatch(deleteTodoAction(id))
		} 
		catch (e) {
			console.warn(e);
		}
	}
};

export const fetchUpdateStatusTodo = (id) => {
	return async function (dispatch, getState) {
		try {
			const {todos} = getState();
			const todo = todos.find((el)=>el.id===id);
			const updatedTodo = {...todo,complited:!todo.complited}
			await updateTodoStatus(id, updateTodo);
			dispatch(updateTodo(updatedTodo))
		}
		catch (e) {
			console.warn(e);
		}
	}
}