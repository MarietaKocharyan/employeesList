import { Skeleton } from '@mui/material';

import Form from './Form';

export const preloading = (status: boolean | string, component: JSX.Element): JSX.Element =>
    (typeof status === 'string' ? status === 'loading' : status) ? <Skeleton /> : component;

export * from 'react-hook-form';

export { default as FormInput } from './Input';

export default Form;
