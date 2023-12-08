import ItemTodo from "../ItemTodo/ItemTodo";
import { List } from "@mui/material";

const ListTodo = ({ todos, onDelete, onChangeStatus }) => {
  return (
    <List>
      {todos?.map((todo) => {
        return (
          <ItemTodo
            todos={todo}
            key={todo.id}
            onDelete={onDelete}
            onChangeStatus={onChangeStatus}
          ></ItemTodo>
        );
      })}
    </List>
  );
};

export default ListTodo;
