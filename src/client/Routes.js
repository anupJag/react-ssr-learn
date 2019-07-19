import HomePage from './pages/HomePage';
import UsersList from './pages/UsersListPage';

export default [
    {
        path: '/',
        exact: true,
        ...HomePage
    },
    {
        path: '/users',
        ...UsersList
    },
];