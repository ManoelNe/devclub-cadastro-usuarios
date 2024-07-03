import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import ListUsers from './pages/ListerUsers'


const router = createBrowserRouter([

{
    path: '/',
    element: <Home/>
},

{
    path: '/listagem',
    element: <ListUsers/>
}


])

export default router