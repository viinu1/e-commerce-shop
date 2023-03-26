// import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import ProductDetails from '~/components/Layout/components/ProductDetails';
import Card from '~/components/Layout/components/Card';

//public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/card',
        component: Card,
    },
    {
        path: '/products/:id',
        component: ProductDetails,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
