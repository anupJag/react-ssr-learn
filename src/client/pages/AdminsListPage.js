import React, { useEffect } from 'react';
import { fetchAdmins } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import requireAuth from '../components/hocs/requireAuth';

const AdminPage = (props) => {

    const admins = useSelector(state => state.admins);
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchAdmins()), []);

    const renderAdminsList = () => {
        return (
            <ul>
                {
                    admins.map((el) => <li key={el.id}>{el.name}</li>)
                }
            </ul>
        );
    }

    return (
        <div>
            <h4>Protected List of Admins</h4>
            {
                admins && admins.length > 0 ? renderAdminsList() : <div><p>Loading data</p></div>
            }
        </div>
    );
}

export default {
    component: requireAuth(AdminPage),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
}