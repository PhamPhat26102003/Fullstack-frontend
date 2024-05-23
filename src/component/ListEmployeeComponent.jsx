import React from 'react'

const ListEmployeeComponent = () => {

    const Data = [
        {
            "id": 1,
            "firstName": "Pham",
            "lastName": "Phat",
            "email": "phat@gmail.com"
        },

        {
            "id": 2,
            "firstName": "Pham",
            "lastName": "Duc",
            "email": "duc@gmail.com"
        },

        {
            "id": 3,
            "firstName": "Pham",
            "lastName": "Uyen",
            "email": "uyen@gmail.com"
        }
    ]

    return (
        <>
            <div className='container'>
                <h2 className='text-center'>List Employee</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Data.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
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