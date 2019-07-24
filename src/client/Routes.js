import App from './App';
import HomePage from './pages/HomePage';
import UsersList from './pages/UsersListPage';

export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                exact: true,
                ...HomePage
            },
            {
                path: '/users',
                ...UsersList
            },
        ]
    }
];

