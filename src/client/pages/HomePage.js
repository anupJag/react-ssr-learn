import React from 'react';

const Home = (props) => {
    return(
        <div>
            <h2>HOME PAGE</h2>
            <button onClick={() => console.log("Hi I was clicked")}>Click Me!</button>
        </div>
    );
};

export default {
    component: Home,
};