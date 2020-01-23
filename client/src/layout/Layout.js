import TopBar from './topBar/index'
import Footer from './footer/index'
import React from 'react'

const Layout =({children})=>{
    return(
    <div className='layout'>
        <TopBar/>
        {children}
        <Footer/>
    </div>)
}
export default Layout