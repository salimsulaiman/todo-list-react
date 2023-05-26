import axios from "axios";

export const FETCH_START = "FETCH_START";
export const GET_TODO = "GET_TODO";
export const SUCCESS_GET_TODO = "SUCCESS_GET_TODO";
export const SUCCESS_ADD_TODO = "SUCCESS_ADD_TODO";
export const SUCCESS_DELETE_TODO = "SUCCESS_DELETE_TODO";
export const SUCCESS_UPDATE_TODO = "SUCCESS_DELETE_TODO";

const BASE_URL = "https://6454b891f803f345762f6469.mockapi.io/todolist";

export function fetchStart() {
  return {
    type: FETCH_START,
  };
}

export function successGetTodo(data) {
  return {
    type: SUCCESS_GET_TODO,
    payload: data,
  };
}

export function getTodo() {
  return async (dispatch) => {
    dispatch(fetchStart());

    const result = await axios.get(BASE_URL);

    dispatch(successGetTodo(result.data));
  };
}

export function successAddTodo(data) {
  return {
    type: SUCCESS_ADD_TODO,
    payload: data,
  };
}

export function addTodo(todo) {
  return async (dispatch) => {
    axios.post(BASE_URL, {
      todo: todo,
      isDone: false,
    });

    dispatch(fetchStart());
    const result = await axios.get(BASE_URL);

    dispatch(successAddTodo(result.data));
    location.reload();
  };
}

export function successDeleteTodo(data) {
  return {
    type: SUCCESS_DELETE_TODO,
    payload: data,
  };
}

export function deleteTodo(id) {
  return async (dispatch) => {
    axios.delete(`${BASE_URL}/${id}`);
    dispatch(fetchStart());
    const result = await axios.get(BASE_URL);
    console.log(result.data);

    dispatch(successDeleteTodo(result.data));
    location.reload();
  };
}

export function successUpdateTodo(data) {
  return {
    type: SUCCESS_UPDATE_TODO,
    payload: data,
  };
}

export function updateTodo(id, todo, isDone) {
  let boolOutput = isDone === "true";
  return async (dispatch) => {
    axios.put(`${BASE_URL}/${id}`, {
      todo: todo,
      isDone: boolOutput,
    });
    dispatch(fetchStart());
    const result = await axios.get(BASE_URL);
    console.log(result.data);

    dispatch(successUpdateTodo(result.data));
    location.reload();
  };
}
