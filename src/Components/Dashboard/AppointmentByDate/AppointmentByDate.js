import React from 'react';
// import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointment }) => {
    console.log(appointment);
    return (
        <div>
            <h2 className="text-brand text-center mt-3">Appointments</h2>
            {
                appointment.length ?
                 <AppointmentShortList  appointment={appointment} ></AppointmentShortList>
                :
                <div className="p-5 shadow p-3 mb-5 bg-body rounded">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;