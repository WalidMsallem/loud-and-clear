import TopBar from './topBar/index'
import Footer from './footer/index'
import React from 'react'

const Layout =({children,setLanguage ,language})=>{
    return(
    <div className='layout'>
        <TopBar setLanguage = {setLanguage} language = {language}/>
        {children}
        <Footer/>
    </div>)
}
export default Layout