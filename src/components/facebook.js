import React, { Component } from 'react';
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
    state ={
         isLoggedIn:false
        ,userId:""
        ,name:""
        ,emai:""
        ,picture:""
    }

    responseFacebook =(response) => {
        console.log(response);
    }
    componentClicked =() => {
        console.log("componentClicked");
    }

    render() {
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent=null
        } else {
            fbContent = <FacebookLogin
            appId="2106343566278696"
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
