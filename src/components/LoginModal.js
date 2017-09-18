/**
 * Created by Edwin on 8/18/2017.
 */

import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FireAuth from '../config/FireAuth'
import * as firebase from "firebase";

const customContentStyle = {
    width: '300px'
};

const titleStyle ={
    backgroundColor:'#0D47A1',
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
}

new FireAuth()


export default class LoginModal extends Component {

    signIn = () =>{

        let em = document.getElementById('email').value
        let pw = document.getElementById('pass').value


        firebase.auth().signInWithEmailAndPassword(em, pw).then(()=>{
            this.props.handleClose();



        }).catch((error)=> {
            //error handling stuff
        });

    }


    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                keyboardFocused={true}
                onClick={this.props.handleClose}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Login"
                    titleStyle={titleStyle}
                    actions={actions}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.props.modalOpen}
                    onRequestClose={this.props.handleClose}
                >
                    <TextField
                        hintText="email"
                        fullWidth={true}
                        id="email"
                        floatingLabelText="Enter your email"
                    /><br />
                    <TextField
                        hintText="password"
                        fullWidth={true}
                        id="pass"
                        floatingLabelText="Enter your password"
                        type="password"
                    /><br /><br/>
                    <RaisedButton label="Login" primary={true}
                                  onClick={this.signIn}

                    />
                </Dialog>
            </div>
        );
    }
}