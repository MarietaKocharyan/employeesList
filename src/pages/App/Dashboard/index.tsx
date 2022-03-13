import { useEffect, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Typography } from '@mui/material';

import useIdentifier from 'store/identity/user';
import DataGrid, { GridRowParams } from 'components/common/DataGrid';
import Container from 'components/sections/Container';

import Slider from './Slider';


const columns: Record<string, string> = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    gender: 'Gender',
    department: 'Department',
    jobTitle: 'Job Title',
    country: 'Country',
    city: 'City',
};

const Dashboard = (): JSX.Element => {
    const [user, userActions] = useIdentifier();
    const history = useHistory();
    const buttons = useMemo((): Record<string, unknown>[] => {
        return [
            {
                children: 'Create',
                variant: 'contained',
                onClick: () => history.push('/user'),
            },
        ];
    }, [history]);
    useEffect(() => {
        userActions.get();
    }, [userActions]);

    const handleRowClick = useCallback(
        (user: GridRowParams) => {
            history.push(`/user/${user.id}`);
        },
        [history]
    );
    return (
        <Container title="React Application" stickyHeader actions={buttons}>
            <Typography variant="h3">Suggestions</Typography>
            <Slider user={user.data || []} />
            <Typography variant="h3">All Employees List</Typography>
            <DataGrid columns={columns} rows={user.data || []} onRowClick={handleRowClick} />
        </Container>
    );
};

export default Dashboard;
