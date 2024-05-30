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
import Testing from '../component/Testing/Testing';
const Approuter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense>
                <Applayout />
            </Suspense>
        ),
        children: [
            {
                path: "/",
                element: (
                    <Suspense  >
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/login",
                element: (
                    <Suspense  >
                        <Login />
                    </Suspense>
                ),
            },
            {
                path: "/register",
                element: (
                    <Suspense  >
                        <Register />
                    </Suspense>
                ),
            },
            {
                path: "/about",
                element: (
                    <Suspense  >
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/restaurant/:id",
                element: (
                    <Suspense  >
                        <RestaurantDetailsPage />
                    </Suspense>
                ),
            },
            {
                path: "/menu/:id",
                element: (
                    <Suspense  >
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
                path: "/testing",
                element: <Testing />
            },
            {
                path: "/cart",
                element: (
                    <Suspense  >
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
                    <Suspense  >
                        <Search />
                    </Suspense>
                ),
                errorElement: <Errorpage />
            }
        ],
        errorElement: <Errorpage />
    },
], <Toaster richColors position="top-right" closeButton />);

export default Approuter;
