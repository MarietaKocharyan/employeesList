import { UserGroup } from './identity/user';

export const UserStorage = {
    set: (data: UserGroup) => {
        localStorage.setItem('UserGroup', JSON.stringify(data));
    },
    get: () => ({
        UserGroup: JSON.parse(localStorage.getItem('UserGroup')),
    }),
    remove: () => {
        localStorage.removeItem('UserGroup');
    },
    clear: () => {
        localStorage.clear();
    },
};
