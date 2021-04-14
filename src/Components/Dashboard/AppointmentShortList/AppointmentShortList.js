import React from 'react';

const AppointmentShortList = ({appointment}) => {
    return (
        <table className="table table-borderless ">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody className="p-5 shadow p-3 mb-5 bg-body rounded">
                {
                  appointment.map((appointments, index) => 
                        
                    <tr className="p-5 shadow p-3 mb-3 bg-body rounded">
                        <td>{appointments.name}</td>
                        <td>{appointments.phone}</td>
                        <td>{appointments.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;