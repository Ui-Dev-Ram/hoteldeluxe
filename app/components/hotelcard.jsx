import React from 'react';
import { hotels } from '../data/hotel';
import Cards from './card';

const hotelcard = ({hotel}) => {
  return (
    <div className='container'>
       <div className='mt-5'> 
        <h1 className='herotxt ftur-htl'>
          Featured Hotels
        </h1>
        <div className='hotel-cards'>
            {hotels.map((hotel) => (
                <Cards key={hotel.id} hotel={hotel} />
            ))}
        </div>
        </div>
    </div>
  )
}

export default hotelcard