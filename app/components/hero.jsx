import React from 'react'
import Image from 'next/image';

import Banner from '../../public/hero/bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const hero = () => {
  return (
    <div>
        <div className='herosection'>
            <div className='banner-img'>
                <Image
                    src={Banner}
                    alt="Background"
                    width={1200}
                    height={600}
                    priority        
                    style={{ objectFit: 'cover', height: 'auto' }}
                />
            </div>
            <div className='container'>
                <div className="left-section">
                    <span className='wlcm-txt'>Welcome Friend</span>
                    <h1 className='herotxt'>
                        Spend Quality <br /> <span>Holiday with Us</span>
                    </h1>
                    <div className='search-htl'>
                         <div className='search-input checkin'>
                            <label>check-in</label>
                            <input type="date" placeholder='Select check-in Date'/>
                         </div>
                         <div className='search-input checkout'>
                            <label>check-out</label>
                            <input type="date" placeholder='Select check-out Date'/>
                         </div>
                         <div className='search-input adult'>
                            <label>Adult</label>
                            <input type="number" placeholder='0'/>
                         </div>
                         <div className='search-input searchicon'>
                               <FontAwesomeIcon icon={faSearch} /> 
                         </div>
                    </div>
                    <p className='herop'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default hero