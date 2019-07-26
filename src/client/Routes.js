import App from './App';
import HomePage from './pages/HomePage';
import UsersList from './pages/UsersListPage';
import NotFound from './pages/NotFoundPage';
import AdminsList from './pages/AdminsListPage';

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
            {
                ...AdminsList,
                path: '/admins'
            },
            {
                ...NotFound
            },
        ]
    }
];

// export default [
//     {
//         path: '/',
//         exact: true,
//         ...HomePage
//     },
//     {
//         path: '/users',
//         ...UsersList
//     },
//     {
//         ...AdminsList,
//         path: '/admins'
//     },
//     {
//         ...NotFound
//     },
// ];

