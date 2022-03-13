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

    return (
        <>
            <TextField
                {...props}
                {...field}
                value={value}
                error={!!error}
                label={label}
                placeholder={placeholder}
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
