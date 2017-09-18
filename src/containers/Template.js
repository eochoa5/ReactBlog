import React, {Component} from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {Header, Main} from '../styled/Template'
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css'
import LoginModal from '../components/LoginModal'
import * as firebase from "firebase"
injectTapEventPlugin()

class Template extends Component{

    state = {
        modalOpen: false,
        user: null
    };

    handleOpen = () => {
        this.setState({modalOpen: true});
    };

    handleClose = () => {
        this.setState({modalOpen: false});

    };

    logOut = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });

    };



    componentWillMount() {

        const context = this

        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {
                context.setState({user:user});
            }else{
                context.setState({user:null});
            }

        });

    }


    render (){
        return(
            <MuiThemeProvider>
            <div>

                <Header>
                    My React Blog
                    <FlatButton label={this.state.user ? 'Logout' : 'Login'} primary={true} className="lg-btn"
                                onClick={this.state.user ? this.logOut : this.handleOpen}
                    />

                </Header>

                <Main>
                    <LoginModal
                        modalOpen={this.state.modalOpen}
                        handleClose = {this.handleClose}

                    />
                    {this.props.children}
                </Main>

            </div>
            </MuiThemeProvider>

        )
    }
}

export default  Template