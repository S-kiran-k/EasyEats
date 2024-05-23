import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ViewMore from '../component/ViewMore/ViewMore';
import Errorpage from '../component/Errorpage/Errorpage';
import RestaurantDetailsPage from '../component/RestaurantDetailsPage/RestaurantDetailsPage';
import Loading from '../component/Loading/Loading';
import Exploredatamenu from '../component/Exploredatamenu/Exploredatamenu';

const Login = lazy(() => import('../component/Login/Login'));
const Applayout = lazy(() => import('../Applayout/Applayout'));
const Register = lazy(() => import('../component/Register/Register'));
const Search = lazy(() => import('../component/Search/Search'));
const Home = lazy(() => import('../component/Home/Home'));
const About = lazy(() => import('../component/About/About'));
const Cart = lazy(() => import('../component/Cart/Cart'));

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
                        <Exploredatamenu/>
                        </Suspense>
                ),
            }
        ],
        errorElement: <Errorpage />
    },
    {
        path: "/search",
        element: (
            <Suspense fallback={<div><Loading /></div>}>
                <Search />
            </Suspense>
        ),
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
    },
    {
        path: "/viewmenu",
        element: <ViewMore />,
        errorElement: <Errorpage />
    }
]);

export default Approuter;
