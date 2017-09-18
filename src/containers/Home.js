import React, {Component} from 'react'
import request from "../../node_modules/superagent/superagent"

const data = {
    username: "edwin", password: "trollol"
}
class Home extends Component{

    post = ()=>{
        request
            .post('/share')
            .set('Content-Type', 'application/json')
            .send(data)
            .end(function(err, res){

            });
    }

    render (){
        return(

            <div>

              <button onClick={this.post}>Send Post Request</button>
            </div>
        )
    }
}

export default  Home