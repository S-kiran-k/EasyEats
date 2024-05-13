import {createBrowserRouter } from 'react-router-dom'
import Login from '../component/Login/Login'
import Applayout from '../Applayout/Applayout'
import Register from './../component/Register/Register';
import Search from '../component/Search/Search';
import About from '../About/About';
import Home from './../component/Home/Home';

const Approuter = createBrowserRouter([{
    path: "/",
    element: <Applayout />,
    children:[{
        path:"/",
        element:<Home/>
    },{
        path: "/login",
        element: <Login />
    },{
        path:"/register",
        element:<Register/>    
    },{
        path:"/search",
        element:<Search/>
    },{
        path:"/about",
        element:<About/>,   
    }],
}, 
])
export default Approuter