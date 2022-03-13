import { FormEvent, FormEventHandler, ReactChild, useCallback } from 'react';

interface FormProps {
    onSubmit?: FormEventHandler;
    children?: ReactChild | ReactChild[] | JSX.Element | boolean | string;
}

const Form = ({ onSubmit, ...props }: FormProps): JSX.Element => {
    const handleSubmit = useCallback(
        (event: FormEvent): void => {
            event.preventDefault();
            event.stopPropagation();
            onSubmit && onSubmit(event);
        },
        [onSubmit]
    );

    return <form noValidate autoComplete="off" onSubmit={handleSubmit} {...props} />;
};

export default Form;
