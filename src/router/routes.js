import Netease from '../pages/Netease/Netease'
import Item from '../pages/Item/Item'
import Topic from '../pages/Topic/Topic'
import Shoppingcar from '../pages/Shoppingcar/Shoppingcar'
import Home from '../pages/Home/Home'


export default [
    {
        path:'/netease',
        component: Netease
    },
    {
        path:'/item',
        component: Item
    },
    {
        path:'/topic',
        component: Topic
    },
    {
        path:'/shoppingcar',
        component: Shoppingcar
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/',
        redirect: './netease'
    },

]