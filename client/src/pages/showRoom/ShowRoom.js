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
                    <span>Uferstrasse 8-11 (Tor A, Studio A14, HinterHof Piano Salon)</span>
                    <span>DE-13357 BERLIN</span>
                    <span>Free parking available in front to the door</span>                    
                </div>
                {/* <Maps/> */}
            </div>
            <div className='opening'>
                <span className='opening-title'></span>
                <p className='opening-desc'></p>
            </div>           
        </div>
    )
}
export default ShowRoom