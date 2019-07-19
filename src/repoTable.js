import {RepoInfo} from "./repoInfo";
import React from "react";

export class RepoTable extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        console.log(this.props.repos)
        const listRepos = Array.from(this.props.repos)
        return (
            <table className="table table-bordered">
                <caption>Repositories</caption>
                <tr>
                    <th>Name</th>
                    <th>Language</th>
                    <th>Created At</th>
                    <th>Pushed At</th>
                    <th>Forks</th>
                    <th>Stars</th>
                    <th>Size</th>
                </tr>
                {listRepos.map((repo) =>
                    <RepoInfo repo={repo}/>)}
            </table>
        );
    }
}
