import React from "react";
import {FormGroup, FormControl, Button, Col} from "react-bootstrap";

var styles = {
    formInput: {
        width: 200
    }
};

class LoginContainer extends React.Component {
    render() {
        return (
            <div>
                <h3> Air messaging app </h3>
                <form>
                    <FormGroup controlId="formControlsText">
                        <FormControl style={styles.formInput} type="text" placeholder="username"/>
                    </FormGroup>
                    <FormGroup controlId="formControlsPassword">
                            <FormControl style={styles.formInput}  type="password" placeholder="******"/>
                    </FormGroup>
                    <Button bsStyle="primary" onClick={() => console.log('ggfg')}>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

module.exports = LoginContainer;
