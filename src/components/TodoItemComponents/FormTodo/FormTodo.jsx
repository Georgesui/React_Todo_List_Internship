import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import "./formTodo.css";

export const FormTodo = ({ onSubmit }) => {
  // on sumbit forms we should receive some kind of Todo from user, useState hook will help us to handle it
  const [todos, setTodos] = useState({
    title: "",
    complited: false,
  });

  //   to work with input value and update todos  we will create a function
  function changeTodo(e) {
    setTodos({
      ...todos,
      [e.target.name]: e.target.value,
    });
  }

  //   once form wil lbe submitted, we will add our todo

  function submitForm(e) {
    e.preventDefault();
    onSubmit(todos);
    setTodos({
      title: "",
      complited: false,
    });
  }

  return (
    <FormControl
      variant="standard"
      size="medium"
      color="primary"
      onSubmit={submitForm}
    >
      <Input
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="text"
        name="title"
        value={todos.title}
        onChange={changeTodo}
      />
      <Button variant="contained" size="small" onClick={submitForm}>
        Add Todo
      </Button>
    </FormControl>
  );
};

export default FormTodo;
