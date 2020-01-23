
import Home from '../pages/home'
import Impressium from '../pages/impressium'
import Products from '../pages/products'
import Rental from '../pages/rental'



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
    }
}