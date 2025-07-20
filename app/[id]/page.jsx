import React from 'react'
import { hotels } from '../data/hotel';

export const generateMetadata = (props) => {
  const hotelId = props.params['id'];
  const hotel = hotels.find((h) => h.slug == hotelId);

  return{
    title: `${hotel.name} – ${hotel.location}`,
    description: hotel.description,
    keywords: ["hotels", "India hotels", "resorts", "travel booking"],
    authors: [{ name: "Ram Kumar", url: "https://yourdomain.com" }],
    metadataBase: new URL("https://yourdomain.com"),
    openGraph: {
      title: hotel.name,
      description: hotel.description,
      url: "https://yourdomain.com",
      siteName: "Hoteldeluxe",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: hotel.image,
          width: 800,
          height: 600,
          alt: hotel.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: hotel.name,
      description: hotel.description,
      images: [hotel.image],
    },

     icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
      },

       robots: {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
          },
    }
  }
}

const page = (props) => {
  const hotelId = props.params['id'];
  const hotel = hotels.find((h) => h.slug == hotelId);

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className='container'>

      <header className="hotel-header">
            <div className="header-left">
              <h1>{hotel.name}</h1>
              <p className="location">📍 {hotel.location}</p>
              <div className="rating">
                {hotel.rating} - ⭐⭐⭐⭐⭐ <span>450 Reviews</span>
              </div>
            </div>
            <div className="header-right">
              <div className='details-price'>
                <p>
                  <span className="old-price">$500</span>
                  <span className="new-price">{hotel.price}</span>
                </p>
                <p>
                  <span className="per-night">per night for 1 rooms</span>
                </p>                
              </div>
              <div className='details-btn'>
                 <button>Select Room</button>
              </div>
            </div>
      </header>

      <div className="gallery">
        <img src={hotel.image} alt="Main Room" className="main-image" />
        <div className="side-images">
          <img src={hotel.image} alt="Image 1" />
          <img src={hotel.image} alt="Image 2" />
          <img src={hotel.image} alt="Image 3" />
          <div className="more-photos">+20 Photos</div>
        </div>
      </div>

      <section className="amenities-location">
        <div className="amenities">
          <h3>Popular Amenities</h3>
          <ul>
            <li>✅ Free WiFi</li>
            <li>🍳 Free Breakfast</li>
            <li>🕑 24 Hours Front Desk</li>
            <li>❌ Free Cancellation</li>
            <li>❄️ Air Conditioning</li>
            <li>🏊 Swimming Pool</li>
          </ul>
          <a href="#" className='viewallAmenitiesBtn'>View All Amenities</a>
        </div>

        <div className="location-box">
          <h3>Location</h3>
          <div className="map-placeholder">
            <img src={hotel.maplocation} alt='map' />
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default page