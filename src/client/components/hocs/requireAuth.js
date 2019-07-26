import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {

    class RequireAuth extends React.Component {
        render() {
            console.log(`Am i logged in ?`, this.props.auth);
            switch (this.props.auth) {
                case null:
                    return <div>Loading...</div>;

                case false:
                    return <Redirect to="/" />

                default:
                    return <ChildComponent {...this.props} />
            }
        }
    }

    function mapStateToProps({ auth }) {
        return { auth };
    }

    return connect(mapStateToProps)(RequireAuth);
}
