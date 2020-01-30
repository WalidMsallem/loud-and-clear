
import Home from '../pages/home'
import Impressium from '../pages/impressium'
import Products from '../pages/products'
import Rental from '../pages/rental'
import Contact from '../pages/contact'
import ShowRoom from '../pages/showRoom'
import Service from '../pages/services'




export default {
    home : {
        path : '/',
        component : Home
    },
    products :  {
        path : '/products',
        component : Products
    },
    impressium : {
        path :'/impressium',
        component : Impressium
    },
    rental : {
        path :'/rental',
        component : Rental
    },
    service : {
        path :'/services',
        component : Service
    },
    contact:{
        path:'/contact',
        component :Contact
    },
    showRoom:{
        path:'/showRoom',
        component:ShowRoom
    },
 
}