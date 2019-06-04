import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidvl from 'uuid';
import { addArticle } from '../actions/index';
function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
};
class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = { title: "" };
        this.handleChnage = this.handleChnage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
}