import React from 'react';
import featured from '../../../../images/featured.png'
const FeaturedService = () => {
    return (
        <section className="features-service pd-0 pd-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-5 m-md-0">
                        <img className="img-fluid" src={featured} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, On Your Term</h1>
                        <p className="text-secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, hic?
                        </p>
                        <button className="btn btn-primary">Learn more </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;