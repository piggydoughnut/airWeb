import React from "react";
import {FormGroup, ControlLabel, FormControl, HelpBlock, Col, Button, Panel, Accordion} from "react-bootstrap";
var Config = require("../config/config");

class UploadContainer extends React.Component {
    render() {
        return (
            <div>
                <Col md={4}>
                    <form>
                        <FormGroup controlId="formControlsText">
                            <ControlLabel>Filename</ControlLabel>
                            <FormControl type="text" placeholder="Example filename"/>
                        </FormGroup>
                        <FormGroup controlId="formControlsFile">
                            <ControlLabel>Thumbnail</ControlLabel>
                            <FormControl type="file"/>
                            <HelpBlock>PNG and JPEG formats only</HelpBlock>
                        </FormGroup>
                        <FormGroup controlId="formControlsFile">
                            <ControlLabel>WT3 file</ControlLabel>
                            <FormControl type="file"/>
                            <HelpBlock>Only wt3 format accepted</HelpBlock>
                        </FormGroup>
                        <Button type="submit">
                            Upload
                        </Button>
                    </form>
                </Col>
                <Col md={8}>
                    <Accordion>
                        <Panel header="How to upload objects" bsStyle="info" eventKey="2">
                            <ul>
                                <li>First you need to have 3D objects in <b>FBX</b> format.</li>
                                <li>Our application is only friends with 3D images of format <b>WT3</b>. And only 3D object of <b>FBX</b> are convertable to WT3.</li>
                                <li>We provide you with a converter to convert your FBX images to WT3. Please download the converter from <a href={Config.wikitude_converter_url}> wikitude official web</a> </li>
                                <li>Once your objects are converted upload them through our form</li>
                            </ul>
                        </Panel>
                        <Panel header="Where to get objects" bsStyle="info" eventKey="1">
                            You can choose wt3 images from our <a href="/gallery">Gallery</a> <br />

                            If you didn't like anything and if you are not a 3D designer yourself here are some places where you could get free 3D images
                            in <b>FBX</b> format:
                            <ul>
                                <li> <a href={Config.tf3dm}>TF3DM</a></li>
                                <li> <a href={Config.turboSquid}>TurboSquid</a></li>
                                <li> <a href={Config.cgTrader}>CgTrader</a></li>
                            </ul>
                        </Panel>
                    </Accordion>
                </Col>
            </div>
        )
    }
}

module.exports = UploadContainer;
