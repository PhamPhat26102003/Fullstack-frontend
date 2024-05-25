import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployeeId, updateEmployee } from '../service/EmoployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const { id } = useParams();

    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployeeId(id).then(response => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email)
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email }
            console.log(employee)
            if (id) {
                updateEmployee(id, employee).then(response => {
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createEmployee(employee).then(response => {
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    const validateForm = () => {
        let valid = true;
        const errorCopy = { ...error };

        if (firstName.trim()) {
            errorCopy.firstName = '';
        } else {
            errorCopy.firstName = 'First name is required';
            valid = false;
        }

        if (lastName.trim()) {
            errorCopy.lastName = '';
        } else {
            errorCopy.lastName = 'Last name is required';
            valid = false;
        }

        if (email.trim()) {
            errorCopy.email = '';
        } else {
            errorCopy.email = 'Email is required';
            valid = false;
        }

        setError(errorCopy);
        return valid;
    }

    const pageTitle = () => {
        if (id) {
            return <h2 className='text-center mt-5'>Update employee</h2>;
        } else {
            return <h2 className='text-center mt-5'>Add new employee</h2>;
        }
    }

    return (
        <div className='container mt-5 p-3' style={{ height: "100vh" }}>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className={`form-control ${error.firstName ? 'is-invalid' : ''}`} id="firstName"
                                placeholder='Enter first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                            {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className={`form-control ${error.lastName ? 'is-invalid' : ''}`} id="lastName"
                                placeholder='Enter last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className={`form-control ${error.email ? 'is-invalid' : ''}`} id="email"
                                placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            {error.email && <div className='invalid-feedback'>{error.email}</div>}
                        </div>
                        <button type="submit" className="btn btn-success" onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent