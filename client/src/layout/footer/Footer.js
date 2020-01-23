import React from 'react'
import {Link} from 'react-router-dom'
import facebookIcon from '../../assets/icons/footer/facebookIcon2.png'
import instagramIcon from '../../assets/icons/footer/instaIcon2.png'
import './footer.css'

const Footer =()=>{
    return(
        <footer>
            <div className='footer-top'>
                <Link to='/impressium' target='_blank' className='impressium'>  
                    Impressium & General Condition
                </Link>                
                <div className='footer-right'>                    
                    <span>
                        Follow Us
                    </span>
                    <div className='footer-social-icons'>
                        <Link to=''>
                            <img src={facebookIcon} className='footer-social-icon' alt='facebook-icon'/>
                        </Link>
                        <Link to=''>
                            <img src={instagramIcon} className='footer-social-icon-2' alt='instagram-icon'/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <span className='footer-company'>
                Copyrights © 2020 by KBA's Consulting. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer