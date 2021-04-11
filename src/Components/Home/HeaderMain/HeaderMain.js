import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div  className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile Starts Here</h1>
                <br />
                <p className="text-secondary">View customer complaints of Buckner Family Dental, BBB helps resolve disputes with the services or products a pro</p>
                <button className="btn btn-primary">Get appointment</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>

        </main>
    );
};

export default HeaderMain;