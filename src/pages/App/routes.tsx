import { lazy } from 'react';

const NotFound = () => <>NotFound</>;

export default [
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
