import React from 'react'
import './customizedCarousel.css'
import {Gallery,GalleryImage} from 'react-gesture-gallery'





function CustomizedCarousel ({carousselHomeData})
{
    const [index,setIndex]=React.useState(0) 
    React.useEffect(()=>{
        const interval=setInterval(()=>{        
        if(index===carousselHomeData.length-1){
            setIndex(0)
           
        }else
        {
            setIndex(index+1)
            
        }
    },4000)
        return ()=>clearInterval((interval))
    },[index])
    
    return  (
            <div className='caroussel-container'>
                <Gallery 
                    className='caroussel-gallery'                            
                    index={index}       
                    onRequestChange={(i)=>setIndex(i)}
                    enableControls={true}
                    enableIndicators={true}  
                >
                    {carousselHomeData.map(picture=>
                    <GalleryImage className='caroussel-image' objectFit="cover" src={picture}/>)}
                </Gallery>
            </div>
            )    
}

export default CustomizedCarousel