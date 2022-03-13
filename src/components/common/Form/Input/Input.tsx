import { useMemo } from 'react';
import { Control, useController } from 'react-hook-form';

import { TextField, TextFieldProps } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface FormInputProps {
    label?: string;
    control: Control;
    success?: boolean;
}

const FormInput = ({
    name,
    label,
    control,
    success,
    placeholder,
    ...props
}: FormInputProps & TextFieldProps): JSX.Element => {
    const {
        fieldState: { error },
        field: { ref, value = '', ...field },
    } = useController({
        name,
        control,
    });

    if (!name || !control) {
        return <></>;
    }

    const fieldPlaceholder = useMemo(
        () => (placeholder ? placeholder : label ? `Type ${label}` : ''),
        [placeholder, label]
    );

    return (
        <>
            <TextField
                {...props}
                {...field}
                value={value}
                error={!!error}
                label={label}
                placeholder={fieldPlaceholder}
                ref={ref}
                InputProps={{
                    endAdornment: success && <CheckCircleOutlineIcon />,
                }}
                helperText={error?.message}
            />
        </>
    );
};

FormInput.defaultProps = {
    fullWidth: true,
};

export default FormInput;
