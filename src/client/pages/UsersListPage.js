import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions';


export default (props) => {

    //const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    //useEffect(() => dispatch(fetchUsers()), []);

    const renderUserList = () => {
        return (
            <ul>
                {
                    users.map((el) => <li key={el.id}>{el.name}</li>)
                }
            </ul>
        );
    }

    return (
        <div>
            <h4>User List</h4>
            {
                users && users.length > 0 ? renderUserList() : <div><p>Loading data</p></div>
            }
        </div>
    );
}

export const loadData = (store) => {
    return store.dispatch(fetchUsers());
}