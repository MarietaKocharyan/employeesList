import { useMemo } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { cloneDeep } from 'lodash';

import { RootState } from 'store';
import { UserStorage } from 'store/storage';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export type UserType = {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    gender?: number;
    department?: number;
    jobTitle?: string;
    country?: string;
    city?: string;
};

export type UserGroup = Array<UserType>;

type UserStateType = {
    data: UserGroup;
};
type UserActionsType = {
    set: (user) => void;
    get: () => void;
    update: (user: UserType) => void;
    delete: (id: number) => void;
};
const getRandomInt = (max) => Math.floor(Math.random() * max);

const identifySlice = createSlice({
    name: 'user',
    initialState: {
        data: [],
    },
    reducers: {
        set: (state, action: PayloadAction<UserType>) => {
            const data = cloneDeep(state.data ) || [];

            state.data = [...data, { ...action.payload, id: getRandomInt(100) }];
            UserStorage.set(state.data);
        },
        update: (state, action: PayloadAction<UserType>) => {
            const data = cloneDeep(state.data).filter((user) => user.id !== action.payload.id);
            state.data = [...data, { ...action.payload, id: action.payload.id }];
            UserStorage.set(state.data);
        },
        get: (state) => {
            state.data = JSON.parse(localStorage.getItem('UserGroup'));
        },
        delete(state, action: PayloadAction<UserType>) {
            const id = action.payload;
            
            state.data = state.data.filter((user) => user.id !== id);
            UserStorage.set(state.data);
        },
    },
});

const useIdentifier = (): [UserStateType, UserActionsType] => {
    const dispatch = useAppDispatch();
    const reducerState = useAppSelector((state: RootState) => state.user);

    const actions = useMemo<UserActionsType>(
        () => ({
            set: (user: UserType) => dispatch(identifySlice.actions.set(user)),
            get: () => dispatch(identifySlice.actions.get()),
            delete: (id: number) => dispatch(identifySlice.actions.delete(id)),
            update: (user) => dispatch(identifySlice.actions.update(user)),
        }),
        [dispatch]
    );

    return [reducerState, actions];
};

export { identifySlice };
export default useIdentifier;
