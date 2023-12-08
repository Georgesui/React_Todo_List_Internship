import {applyMiddleware, createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import thunk from 'redux-thunk';
// we need logic with getState hook, some async/await logic and dispatch actions, so we need to use thunk from Redux
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;