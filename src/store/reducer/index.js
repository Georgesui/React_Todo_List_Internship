import { SET_TODOS,DELETE_TODOS, UPDATE_STATUS_TODO, ADD_TODOS } from "../actions";

// In order to push some data as a state - we will create an empty array as initial state; 

const initialState = [];

// in root reducer we catch our actions using switch/case, it receive our state and properties from actions like type 
// and payload(data)

export default function rootReducer(state=initialState,{type,payload}) {
	switch(type) {
		// we will spread state to initialize todos - our components should'nt be mutated
		case SET_TODOS:
			return {
				...state,
				todos:payload
			}
			case DELETE_TODOS: {
				// to delete todo we will find by filt function all other todos (our todo will not be in this list)
				return {
					...state,
					todos:state.todos.filter((todo)=> todo.id !== payload)
				}
			}
			case UPDATE_STATUS_TODO: {
				// we should indicate our todo by id, once payload id will be our id - we may update our status of Todo
				return{ 
					...state,
					todos: state.todos.map((todo)=> {
						if(todo.id===payload.id){
							return payload;
						}
						return todo;
					})
				}
				}
				case ADD_TODOS: {
					// add todo is the same story as set Todo - we will spread state and add the new one from our payload(data)
					return {
						...state,
						todos: [...state.todos, payload]
					}
			}
			default: return state;
	}
}