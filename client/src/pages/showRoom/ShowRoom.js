import React from 'react'
import './showRoom.css'
// import Maps from './maps'

const ShowRoom =()=>{
    return (
        <div className='showRoom-page'>
            <div className='showRoom-text'>
                <p className='showRoom-parag'>
                    Located in the artist complex of Uferhallen in Wedding,
                    Studio dB is our Audio/Visual Lab.
                    Pay a visit to listen to the full Loud Professional product range with the assistance of one of our engineers.
                    Or come discover and play around with our Minuit Une IVL lasers.
                </p>
            </div>
            <div className='showRoom-adress'>
                <div className='showRoom-adress-text'>
                    <span className='showRoom-adress-text-title'>Location</span>
                    <span className='showRoom-adress-text-line'>Uferstrasse 8-11 (Tor A, Studio A14, HinterHof Piano Salon)</span>
                    <span className='showRoom-adress-text-line'>DE-13357 BERLIN</span>
                    <span className='showRoom-adress-text-line'>Free parking available in front to the door</span>                    
                </div>
                {/* <Maps/> */}
            </div>
            <div className='opening'>
                <span className='opening-title'>Opening hours :</span>
                <span className='opening-desc'>Warehouse: Monday-Friday 14:00-18:00</span>
                <span className='opening-desc'>Phone: Monday-Friday 10:00-14:00 +49 (0)1736465743</span>
                <span className='opening-desc'>Sound System Demo Hours: Appointment upon request under info@lac.berlin</span>
            </div>           
        </div>
    )
}
export default ShowRoom