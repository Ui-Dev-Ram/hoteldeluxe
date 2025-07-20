import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

const cards = ({hotel}) => {
  return (
   

        <div className="hotel-card">
            <div className="image-wrapper">
                <Image src={hotel.image} alt="Hotel" className="hotel-image" width={500} height={250} />
                <div className="badge">{hotel.offer}% OFF</div>
            </div>

            <div className="card-content">
                <div className='card-title'>
                    <h2 className="title">
                        {hotel.name} 
                    </h2>
                    <span>
                        {hotel.rating} <FontAwesomeIcon icon={faStar} />
                    </span>
                </div>
                
                <p className="description">
                {hotel.description}
                </p>

                <div className="price-row">
                <span className="old-price">$500</span>
                <span className="price">{hotel.price}</span>
                <span className="per-night">per night</span>
                </div>

                <div className="validity">
                <span>
                   <FontAwesomeIcon icon={faLocationDot} />
                </span> {hotel.location}
                </div>

                <Link href={`/${hotel.slug}`}>
                    <button className="book-btn">Know More</button>
                </Link>
                
            </div>
        </div>
                
  )
}

export default cards;