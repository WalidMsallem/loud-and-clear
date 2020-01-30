import React from 'react'
import Story from './story'
import Idea from './idea'
import './contact.scss'
import Form from '../rental/contact'

const Contact =()=>{
    return (<div className='contact-page'>        
        <div className='contact-page-col'>
            <Story/>            
        </div>
        <div className='contact-page-col'>
            <Idea/>
            <Form/>
        </div>
        
    </div>)
}

export default Contact