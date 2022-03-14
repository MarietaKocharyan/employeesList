import { lazy } from 'react';

const NotFound = () => <>NotFound</>;
//Eslint disable for deployment
export default [  // eslint-disable-line
    {
        path: '/',
        component: lazy(() => import('./Dashboard')),
    },
    {
        path: '/user',
        component: lazy(() => import('./User')),
    },
    {
        path: '/user/:id',
        component: lazy(() => import('./User')),
    },
    {
        component: NotFound,
    },
];
