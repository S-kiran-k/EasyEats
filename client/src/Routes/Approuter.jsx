import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('../component/Login/Login'));
const Applayout = lazy(() => import('../Applayout/Applayout'));
const Register = lazy(() => import('../component/Register/Register'));
const Search = lazy(() => import('../component/Search/Search'));
const Home = lazy(() => import('../component/Home/Home'));
const About = lazy(() => import('../About/About'))
const Cart = lazy(() => import('../component/Cart/Cart'))
const Approuter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Applayout />
            </Suspense>
        ),
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/login",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Login />
                    </Suspense>
                ),
            },
            {
                path: "/register",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Register />
                    </Suspense>
                ),
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <About />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "/search",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Search />
            </Suspense>
        ),
    },
    {
        path:"/cart",
        element:<Cart/>
    }
]);

export default Approuter;
