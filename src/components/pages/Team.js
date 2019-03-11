import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Formik, Field } from 'formik';
import {
    Redirect,
} from "react-router-dom";
import _get from 'lodash.get';

import {
    Button,
    Col,
    Container,
    Form,
} from 'react-bootstrap';

import teamsDuck from '../../redux/teamsDuck';
import mapActions from '../../redux/mapActions';
import Header from '../commons/Header';
import Input from '../commons/Input';

const EventRegistration = ({
        event,
        id,
        participants,
    }) => (
    <Fragment>
        <h3>{event}</h3>
        {Array.from({ length: participants }).map((item, index) => (
            <Field
                key={`id${index}`}
                name={`events.${id}[${index}]`}
                component={Input}
                placeholder={`Add Participant ${index + 1}`}
            />
        ))}
    </Fragment>
);


class Team extends Component {
       
    render() {
        const {
            isEditable,
            team = false,
            selectedNames = [],
        } = this.props;
        
        const title = isEditable ? 'Update Team' : 'Add New Team';
        const buttonText = 'Save Team';

        if (isEditable && !team) {
            return <Redirect to="/teams" />
        }

         const countries = [
            'China',
            'Australia',
            'Germany',
            'Russia',
            'India',
            'Norway',
            'Spain',
            'Canada',
            'Switzerland',
            'South Africa',
            'Venezuela',
            'Mexico',
            'Colombia',
            'France',
            'UK',
            'Brazil',
            'Argentina',
            'Egypt',
            'Kenya',
            'Greece',
            'Italy',
            'Nigeria',
            'Jamaica',
        ];
        
        const options = countries.map(country => <option disabled={selectedNames.includes(country)}>{country}</option>);

        return(
            <Container className="page-container">
                <Header className="page">
                    <h1 className="title">{title}</h1>
                </Header>

                <Formik
                    initialValues={team}
                    onSubmit={(values, { setSubmitting }) => {
                        const { createTeam, updateTeam } = this.props.actions;
                        if (isEditable) {
                            updateTeam({
                                ...team,
                                ...values,
                            });
                        } else {
                            createTeam(values);
                        }
                        setSubmitting(false);

                        this.props.history.replace('/teams');
                    }}
                >
                  {props => {
                        const {
                            isSubmitting,
                            handleSubmit,
                        } = props;

                        return (
                            <Form onSubmit={handleSubmit}>
                              <Form.Row className="mb-4">
                                <Col>
                                    <Field
                                        name="name"
                                        label="Team/Country Name"
                                        component={Input}
                                        placeholder="Enter Team/Country Name"
                                        as="select"
                                    >
                                    {options}
                                    </Field>
                                </Col>
                                <Col>
                                    <Field
                                        name="contact"
                                        label="Team Contact"
                                        component={Input}
                                        placeholder="Team Contact"
                                    />
                                  </Col>
                                  <Col>
                                    <Field
                                        name="email"
                                        label="Email"
                                        component={Input}
                                        placeholder="Email"
                                    />
                                  </Col>
                                </Form.Row>
                                <Form.Row className="mb-4">
                                    <Col>
                                        <EventRegistration
                                            event="Trashcan Basketball"
                                            id="basketball"
                                            participants={1}
                                        />
                                    </Col>
                                    <Col>
                                        <EventRegistration
                                            event="Finger Skating"
                                            id="typing"
                                            participants={1}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row className="mb-4">
                                    <Col>
                                        <EventRegistration
                                            event="Long Jump"
                                            id="jump"
                                            participants={1}
                                        />
                                    </Col>
                                    <Col>
                                        <EventRegistration
                                            event="Paper Airplane Javelin"
                                            id="airplane"
                                            participants={1}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row className="mb-4">
                                    <Col>
                                        <EventRegistration
                                            event="Skeleton"
                                            id="skeleton"
                                            participants={2}
                                        />
                                    </Col>
                                    <Col>
                                        <EventRegistration
                                            event="Biathlon"
                                            id="biathalon"
                                            participants={2}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row className="mb-4">
                                    <Col>
                                        <EventRegistration
                                            event="Balloon Dash"
                                            id="balloon"
                                            participants={4}
                                        />
                                    </Col>
                                    <Col>
                                        <EventRegistration
                                            event="Chair Curling"
                                            id="curling"
                                            participants={2}
                                        />
                                    </Col>
                                </Form.Row>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {buttonText}
                                </Button>
                            </Form>
                        );
                      }}
                </Formik>
        </Container>
        )
    }
}

const mapStateToProps = (state, props) => {
    const teamId = _get(props, 'match.params.teamId');
    return {
        team: _get(state, ['teams', teamId]),
        isEditable: !!teamId,
        selectedNames: teamsDuck.selectors.getSelectedNames(state),
    };
};

export default connect(mapStateToProps, mapActions({
    createTeam: teamsDuck.creators.createTeam,
    updateTeam: teamsDuck.creators.updateTeam,
}))(Team);