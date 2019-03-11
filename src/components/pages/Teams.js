import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import Header from '../commons/Header';
import TeamListing from '../molecules/TeamListing';
import teamsDuck from '../../redux/teamsDuck';
import mapActions from '../../redux/mapActions';

class TeamList extends Component {

    componentDidMount() {
        this.props.actions.loadTeams();
    }

    render() {
        return (
            <Fragment>
                <Header className="page">
                    <h1 className="title">Teams</h1>
                </Header>
                <div className="container page-container event-details">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                {this.props.teams.map(team => <TeamListing key={team.id} team={team} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        teams: teamsDuck.selectors.getTeams(state),
    };
};

export default connect(mapStateToProps, mapActions({
    createTeam: teamsDuck.creators.createTeam,
    loadTeams: teamsDuck.creators.loadTeams,
}))(TeamList);