import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from '../component/Loading/Loading';
import { Toaster } from 'sonner';
const Login = lazy(() => import('../component/Login/Login'));
const Applayout = lazy(() => import('../Applayout/Applayout'));
const Register = lazy(() => import('../component/Register/Register'));
const Search = lazy(() => import('../component/Search/Search'));
const Home = lazy(() => import('../component/Home/Home'));
const About = lazy(() => import('../component/About/About'));
const Cart = lazy(() => import('../component/Cart/Cart'));
const MenuCard = lazy(() => import('../component/MenuCard/MenuCard'));
const ViewMenu = lazy(() => import('../component/ViewMenu/ViewMenu'));
const RestaurantDetailsPage = lazy(() => import('../component/RestaurantDetailsPage/RestaurantDetailsPage'));
const Errorpage = lazy(() => import('../component/Errorpage/Errorpage'));
import Applayout2 from './../Applayout/Applayout2';

const Approuter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div><Loading /></div>}>
                <Applayout />
            </Suspense>
        ),
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<div><Loading /></div>}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/login",
                element: (
                    <Suspense fallback={<div><Loading /></div>}>
                        <Login />
                    </Suspense>
                ),
            },
            {
                path: "/register",
                element: (
                    <Suspense fallback={<div><Loading /></div>}>
                        <Register />
                    </Suspense>
                ),
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<div><Loading /></div>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/restaurant/:id",
                element: (
                    <Suspense fallback={<div><Loading /></div>}>
                        <RestaurantDetailsPage />
                    </Suspense>
                ),
            },
            {
                path: "/menu/:id",
                element: (
                    <Suspense fallback={<div><Loading /></div>}>
                        <MenuCard />
                    </Suspense>
                )
            },
            {
                path: "/viewmenu",
                element: <ViewMenu />,
                errorElement: <Errorpage />
            },
            {
                path: "/cart",
                element: (
                    <Suspense fallback={<div><Loading /></div>}>
                        <Cart />
                    </Suspense>
                ),
                errorElement: <Errorpage />
            }
        ],
        errorElement: <Errorpage />
    },
    {
        path: "/search",
        element: <Applayout2 />
        ,
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<div><Loading /></div>}>
                        <Search />
                    </Suspense>
                ),
                errorElement: <Errorpage />
            }
        ],
        errorElement: <Errorpage />
    }
], <Toaster richColors position="top-right" closeButton />);

export default Approuter;
