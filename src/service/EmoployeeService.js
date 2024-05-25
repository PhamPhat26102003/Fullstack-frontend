import axios from 'axios';

const baseUrl = "http://localhost:8080/employees";

const addEmployeeUrl = "http://localhost:8080/employees/create-employee";

const updateEmployeeUrl = "http://localhost:8080/employees/update-employee";
const deleteEmployeeUrl = "http://localhost:8080/employees/delete-employee";

export const listEmployee = () => {
    return axios.get(baseUrl);
}

export const createEmployee = (employee) => {
    return axios.post(addEmployeeUrl, employee);
}

export const getEmployeeId = (id) => {
    return axios.get(baseUrl + '/' + id);
}

export const updateEmployee = (employeeId, employee) => {
    return axios.put(updateEmployeeUrl + '/' + employeeId, employee);
}

export const deleteEmployee = (id) => {
    return axios.delete(deleteEmployeeUrl + '/' + id);
}