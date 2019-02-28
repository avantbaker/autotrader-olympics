import React, { Component, Fragment } from 'react';
import Header from '../commons/Header';

class EditForm extends Component {
    render() {
        return(
        <Fragment>
            <Header className="page">
                    <h1 className="title">Edit</h1>
            </Header>
                <form className="margin-2">
                <div class="form-group">
                    <label for="formGroupExampleInput">First Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name"></input>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Last Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Last Name"></input>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Email</label>
                    <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Email"></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </Fragment>
        )
    }
}

export default EditForm;