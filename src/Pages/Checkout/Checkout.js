import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();

    const { user } = useContext(AuthContext)

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregister';
        const message = form.message.value;

        const phone = form.phone.value;




        const order = {

            sevice: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        // if(phone.length > 10){
        //     alert('phone number should be 10 character or longer')


        // }

        // else{

        // }

        fetch('https://genious-car-server-seven.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genious token')}`
            },
            body: JSON.stringify(order)

        })

            .then(res => res.json())
            .then(data => {

                console.log(data)

                if (data.acknowledge) {
                    alert('order placed success')
                    form.reset();


                }

            })
            .catch(error => console.error(error))





    }


    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'>You are about to order :{title}</h2>
                <h4 className="text-3xl">price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First name" className="input input-bordered w-full  " />
                    <input name="lastName" type="text" placeholder="Last name" className="input input-bordered w-full " />
                    <input name="phone" type="text" placeholder="Your phone" required className="input input-bordered w-full " />
                    <input name="email" type="text" placeholder="Your email" className="input input-bordered w-full  " defaultValue={user?.email} readOnly />
                </div>

                <textarea name='message' required className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>

                <input type="submit" className='btn' value="Place your order" />
            </form>
        </div>
    );
};

export default Checkout;