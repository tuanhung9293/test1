import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/';

import { MasterLayout } from '../../components/layouts';

class UserProfile extends Component {

    render() {
        return (
            <MasterLayout>
                <div>
                UserProfile

                </div>
            </MasterLayout>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);

