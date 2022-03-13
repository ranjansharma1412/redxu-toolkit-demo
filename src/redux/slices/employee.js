import { createSlice } from '@reduxjs/toolkit'
import { addEmployee, getAllEmployee } from '../actions/employee';
import Action from '../ActionType';

const initialState = {
    employeeList: [],
    employee: null,
    employeeListLoader: false,
    addEmployeeLoader: false
}

export const employeeSlice = createSlice({
    name: Action.reducer.EMPLOYEE_REDUCER,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addEmployee.pending, (state, action) => {
            state.addEmployeeLoader = true;
        })
            .addCase(addEmployee.fulfilled, (state, action) => {
                state.addEmployeeLoader = false;
                state.employee = action.payload;
            })
            .addCase(addEmployee.rejected, (state, action) => {
                state.addEmployeeLoader = false;
                state.employee = null;
            }),
        builder.addCase(getAllEmployee.pending, (state, action) => {
            state.employeeListLoader = true;
        })
            .addCase(getAllEmployee.fulfilled, (state, action) => {
                state.employeeListLoader = false;
                state.employeeListLoader = action.payload;
            })
            .addCase(getAllEmployee.rejected, (state, action) => {
                state.employeeListLoader = false;
                state.employeeListLoader = null;
            })
    },
})

// Action creators are generated for each case reducer function
// export const { getAllEmployees, addEmployee } = counterSlice.actions

export default employeeSlice.reducer