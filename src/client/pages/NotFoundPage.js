import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h2 className="center-align" style={{ marginTop: "200px" }}>Oops! you are missing a page here</h2>
};

export default {
    component: NotFoundPage
}