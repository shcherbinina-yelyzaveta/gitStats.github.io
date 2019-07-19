import {UserInfo} from "./userInfo";
import {RepoTable} from "./repoTable";
import React from "react";

export class CoderStats extends React.Component {
    constructor(props){
        super(props)
        this.props = props
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <UserInfo user={this.props.user}/>
                <br/>
                <RepoTable repos={this.props.repos}/>
            </div>
        );
    }

}
