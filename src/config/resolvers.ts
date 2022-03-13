import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const userSchema = yupResolver(
    yup
        .object({
            firstName: yup.string().required('Name is required'),
            lastName: yup.string().required('Name is required'),
            email: yup.string().email('Please enter a valid email address').required('Email address required'),
            gender: yup.string().required('Please select gender'),
            department: yup.string().required('Please select department'),
            jobTitle: yup.string().required('Job Title is required'),
            country: yup.string().required('Job Title is required'),
            city: yup.string().required('Job Title is required'),
        })
        .required()
);