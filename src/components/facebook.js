import React, { Component } from 'react';
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
    state ={
         isLoggedIn:false
        ,userId:""
        ,name:""
        ,email:""
        ,picture:""
    }

    responseFacebook =(response) => {
        this.setState({
            isLoggedIn:true
            ,userId:response.userID
            ,name:response.name
            ,email:response.email
            ,picture:response.picture.data.url
        })
        console.log(response);
    }
    componentClicked =() => {
        console.log("componentClicked");
    }

    render() {
        let fbContent = (
            <div style={{
                width: "400px",
                margin: "auto",
                background: "#f4f4f4",
                padding: "20px"
            }}> 
            <img src={this.state.picture} alt={this.state.name} />
            <h2>Welcome {this.state.name}</h2>
            Email: {this.state.email}
            
            </div>);

        if(this.state.isLoggedIn){
            fbContent=fbContent
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
