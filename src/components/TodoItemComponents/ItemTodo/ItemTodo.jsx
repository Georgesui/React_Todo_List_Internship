import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import Box from "@mui/material/Box";
import "./itemTodo.css";

const ItemTodo = ({ todos, onDelete, onChangeStatus }) => {
  return (
    <ListItem
      sx={{ justifyContent: "space-between", mb: "10px" }}
      className={todos.complited ? "statusTrue" : "statusFalse"}
    >
      <Box component="p">
        {todos.id} {todos.title}
      </Box>
      <Box component="div" className="container">
        <Button
          variant="contained"
          size="medium"
          onClick={() => onDelete(todos.id)}
          sx={{ mr: "10px" }}
        >
          <DeleteIcon />
        </Button>
        <Button
          variant="contained"
          size="medium"
          onClick={() => onChangeStatus(todos.id)}
        >
          <Box component="span" sx={{ mr: "10px" }}>
            Change Status
          </Box>{" "}
          {todos.complited ? <DoneIcon /> : <RemoveDoneIcon />}
        </Button>
      </Box>
    </ListItem>
  );
};

export default ItemTodo;
