
const USER_REDUCER = "user";
const EMPLOYEE_REDUCER = "employee";
const TODO_REDUCER = "todo";

const ADD_EMPLOYEE = "addEmployee"
const UPDATE_EMPLOYEE = "updateEmployee";
const DELETE_EMPLOYEE = "deleteEmployee"
const GET_ALL_EMPLOYEE = "getAllEmployee"
const GET_SINGLE_EMPLOYEE = "getSingleEmployee"

const SIGN_UP = "signUp"
const SIGN_IN = "signIn"

const GET_TODOS = "getTodo"
const ADD_TODO = "addTodo"

const Action = {
    reducer: {
        USER_REDUCER,
        EMPLOYEE_REDUCER,
        TODO_REDUCER
    },
    actionType: {
        ADD_EMPLOYEE,
        UPDATE_EMPLOYEE,
        DELETE_EMPLOYEE,
        GET_ALL_EMPLOYEE,
        GET_SINGLE_EMPLOYEE,
        SIGN_UP,
        SIGN_IN,
        GET_TODOS,
        ADD_TODO,
    }
}

export default Action;