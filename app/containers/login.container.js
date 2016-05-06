import React from "react";
import {FormGroup, FormControl, Button, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../actions/auth.actions";

var styles = {
    formInput: {
        width: 200
    },
    err: {
        color: 'red'
    }
};

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            username: null,
            password: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.error !== undefined) {
            this.setState({error: nextProps.user.error});
        }
    }

    _formSubmitted() {
        this.setState({error: null});
        if (!this.state.username || !this.state.password || this.state.username == '' || this.state.password == '') {
            this.setState({error: 'Please fill in your credentials'});
            return;
        }
        this.props.loginAction({
            username: this.state.username,
            password: this.state.password
        });
    }

    render() {
        return (
            <div>
                <h3> Air messaging app </h3>
                <form>
                    <div style={styles.err}>
                        {this.state.error}
                    </div>
                    <FormGroup controlId="formControlsText">
                        <FormControl
                            onChange={(value) => this.setState({username:  value.target.value})}
                            style={styles.formInput}
                            type="text"
                            placeholder="username"
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsPassword">
                        <FormControl
                            onChange={(value) => this.setState({password:  value.target.value})}
                            style={styles.formInput}
                            type="password"
                            placeholder="******"
                        />
                    </FormGroup>
                    <Button bsStyle="primary" onClick={() => this._formSubmitted()}>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: bindActionCreators(authActions.basicLogin, dispatch)
    };
};

LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

module.exports = LoginContainer;
