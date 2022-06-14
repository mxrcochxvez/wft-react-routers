import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Contactpage from './pages/Contactpage';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Homepage
    },
    {
        path: '/about',
        component: Aboutpage
    },
    {
        path: '/contact',
        component: Contactpage
    }
]