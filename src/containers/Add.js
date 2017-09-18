import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import * as firebase from "firebase"

class Add extends Component{

    constructor(props){

        super(props)

        firebase.auth().onAuthStateChanged(function (user) {

            if (!user) {
                browserHistory.push('/')
            }
        })


    }


    render (){
        return(
            <div>
               Add new article
            </div>
        )
    }
}

export default  Add