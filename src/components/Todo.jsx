import React, { useEffect, useState } from "react";
import ListTodo from "./TodoItemComponents/ListTodo/ListTodo";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchInitTodos,
  fetchDeleteTodo,
  fetchUpdateStatusTodo,
  fetchAddTodo,
} from "../store/actions";
import FormTodo from "./TodoItemComponents/FormTodo/FormTodo";
import Pagination from "./TodoItemComponents/Pagination/Pagination";
import { Container } from "@mui/material";

const Todo = () => {
  // using sharged state, todos will be available as our prop
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // to initiate todo list once, we will use hook useEffect with an empty array
  useEffect(() => {
    dispatch(fetchInitTodos());
  }, []);

  // we will specify whi number of items should be on page by  "datePerPage" propertyl currenPage and changePageNumbers
  // by themselves
  // In order to receive correct "todos", we should slice an array with all todos from API using indexes of todos;

  const [dataPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const changePageNumber = (page) => setCurrentPage(page);
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const currenData = todos?.slice(firstIndex, lastIndex);

  //   to work with state components we are using Redux, so dispatch function will help us to handle our request
  async function deleteTodo(id) {
    dispatch(fetchDeleteTodo(id));
  }

  async function updateStatusTodo(id) {
    dispatch(fetchUpdateStatusTodo(id));
  }

  async function addTodo(todo) {
    dispatch(fetchAddTodo(todo));
  }

  return (
    <Container
      className="MuiContainer-maxWidthMd"
      style={{ background: "#f2f6fc" }}
    >
      <FormTodo onSubmit={addTodo}></FormTodo>
      <ListTodo
        todos={currenData}
        onDelete={deleteTodo}
        onChangeStatus={updateStatusTodo}
      ></ListTodo>
      <Pagination
        changePageNumber={changePageNumber}
        todos={todos?.length}
        dataPerPage={dataPerPage}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default Todo;
