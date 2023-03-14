import React from 'react';
import './bannerItem.css'

const BannerItem = ({ slide }) => {

    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 mr-5">
                <h2 className='text-6xl font-bold text-white'>Affordable <br />
                    Price For Car <br />
                    Servicing</h2>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5  top-1/2 mr-5">
                <p className=' text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5  top-3/4 mr-5">
                <button className="btn btn-warning mr-5">Warning</button>

                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mr-5">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;