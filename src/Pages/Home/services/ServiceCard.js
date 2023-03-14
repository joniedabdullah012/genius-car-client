import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, img, price, title } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl gap-5 mx-20">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}

                </h2>
                <p className='text-2xl text-orange-600 font-semibold'>$ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`checkout/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>

                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;