import React from 'react'
import CustomizedCarousel from '../../shared/components/customizedCarousel/index'
import Presentation from '../../pages/home/presentation/index'
import carousselHome1 from '../../assets/images/home/caroussel/carousselHome1.JPG'
import carousselHome2 from '../../assets/images/home/caroussel/carousselHome2.jpg'
import carousselHome3 from '../../assets/images/home/caroussel/carousselHome3.jpg'
import carousselHome4 from '../../assets/images/home/caroussel/carousselHome4.jpg'
import carousselHome5 from '../../assets/images/home/caroussel/carousselHome5.jpg'




const carousselHomeData=[carousselHome1,carousselHome2,carousselHome3,carousselHome4,carousselHome5]
const Home=()=>{
    return(
    <div className='home'>
        <CustomizedCarousel carousselHomeData={carousselHomeData}/>
        <Presentation />
    </div>)
        
}
export default Home