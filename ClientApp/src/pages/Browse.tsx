import React from "react";
import {fetchJson} from "../services/fetch.service";
import {generateArticles} from "../services/codeGen.service";

class Browse extends React.Component<Articles> {
    state: Articles = {
        Data: [],
    };

    componentDidMount() {
        fetchJson("api/articles", "get").then(data => this.setState({Data: data}))
    }

    render() {
        return (
            <div className="main-wrapper">
                <h1>Browse</h1>
                <div className="articles">
                    {generateArticles(this.state.Data)}
                </div>
            </div>
        );
    }
}

export default Browse;
