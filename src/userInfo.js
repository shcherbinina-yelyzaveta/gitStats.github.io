import React from "react";

export class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="row justify-content-center">
                <h2 className="h2">{this.props.user.login}</h2>
                <div className="rounded-circle">
                    <img src={this.props.user.avatar_url}
                         alt={this.props.user.login}
                         className="rounded-circle"/>
                </div>
            </div>)
    }
}
