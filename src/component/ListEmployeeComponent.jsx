import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployee } from '../service/EmoployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployee();
    }, [])

    const getAllEmployee = () => {
        listEmployee().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error)
        })
    }

    const addNewEmployee = () => {
        navigator('/add-employee');
    }

    const updateEmployee = (id) => {
        navigator(`/update-employee/${id}`);
    }

    const removeEmployee = (id) => {
        deleteEmployee(id).then(response => {
            getAllEmployee();
            console.log('Delete success employee');
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <>
            <div className='container mt-3' style={{ height: "100vh" }}>
                <h2 className='text-center'>List Employee</h2>
                <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add employee</button>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                        <button className='btn btn-danger' style={{ marginLeft: "5px" }}
                                            onClick={() => removeEmployee(employee.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListEmployeeComponent