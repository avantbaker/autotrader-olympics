import { bindActionCreators } from 'redux';

export default function mapActions(actionCreators) {
    return dispatch => ({
        actions: bindActionCreators(actionCreators, dispatch),
    });
}