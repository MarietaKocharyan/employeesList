import { useEffect, useCallback, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import { useForm } from 'components/common/Form';
import Input from 'components/common/Form/Input';
import Container from 'components/sections/Container';
import { userSchema } from 'config/resolvers';
import useIdentifier, { UserType } from 'store/identity/user';

const ManageUser = (): JSX.Element => {

    const history = useHistory();

    const { id }: { id: string } = useParams();

    const [, userActions] = useIdentifier();

    const {
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<UserType>({
        resolver: userSchema,
    });   
    
    const onSubmit = useCallback(
        (user: UserType) => {
            id ? userActions.update(user) : userActions.set(user);
            history.goBack();
        },
        [userActions] // eslint-disable-line
    );
    const getUser = async () => JSON.parse(localStorage.getItem('UserGroup')).filter((user) => user.id == id); // eslint-disable-line

    useEffect(() => {
        if (id) {
            getUser().then((user) => {
                reset(user[0]);
            });
        }
    }, [id]); // eslint-disable-line

    const deleteUser = useCallback(() => {
        userActions.delete(+id);
        history.goBack()
    }, [history, id]) // eslint-disable-line
    
    const buttons = useMemo(() => {
        const actions =  [
            {
                children: 'Cancel',
                variant: 'bordered',
                onClick: history.goBack,
            },
            {
                children: id ? 'Save' : 'Create',
                variant: 'contained',
                onClick: handleSubmit(onSubmit),
            }
        ];
        id && actions.push( {
            children: 'Delete',
            variant: 'outlined',
            onClick: deleteUser,
        })
        return actions
    }, [id, onSubmit, history]);  // eslint-disable-line

    return (
        <Container stickyHeader actions={buttons} title="Registration">
            <Stack direction="column" spacing="30px" width="400px">
                <Input
                    required
                    control={control}
                    name="firstName"
                    label="Fist Name"
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                />
                <Input
                    required
                    control={control}
                    name="lastName"
                    label="Last Name"
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                />
                <Input
                    required
                    control={control}
                    name="email"
                    label="Email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <Input
                    required
                    control={control}
                    name="gender"
                    label="Gender"
                    error={!!errors.gender}
                    helperText={errors.gender?.message}
                />
                <Input
                    required
                    control={control}
                    name="department"
                    label="Department"
                    error={!!errors.department}
                    helperText={errors.department?.message}
                />
                <Input
                    required
                    control={control}
                    name="jobTitle"
                    label="Job Title"
                    error={!!errors.jobTitle}
                    helperText={errors.jobTitle?.message}
                />
                <Input
                    required
                    control={control}
                    name="country"
                    label="Country"
                    error={!!errors.country}
                    helperText={errors.country?.message}
                />
                <Input
                    required
                    control={control}
                    name="city"
                    label="City"
                    error={!!errors.city}
                    helperText={errors.city?.message}
                />
            </Stack>
        </Container>
    );
};

export default ManageUser;