import HomePage from './pages/Home';
import UsersListPage, { loadData } from './pages/UsersListPage';

export default [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        loadData,
        path: '/users',
        component: UsersListPage
    },
];