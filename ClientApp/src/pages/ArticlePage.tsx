import React from "react";
import {Link, match} from "react-router-dom";
import {UserContext} from "../context/UserContext";
import {fetchJson} from "../services/fetch.service";

interface DetailParams {
    id: string;
}

interface DetailsProps {
    required: string;
    match?: match<DetailParams>;
}

class Article extends React.Component<DetailsProps, StateArticle> {
    static contextType = UserContext;
    state: StateArticle = {
        Title: "",
        Tags: [],
        Created: new Date(),
        ImgUrl: "",
        Text: "",
        Data: {},
        Author: "",
    };

    componentDidMount() {
        fetchJson("api/articles/" + this.props.match?.params.id,"get").then((data) =>{
            if(data)
            this.setState({
                Data: data,
                Title: data.title,
                Created: new Date(Date.parse(data.created)),
                ImgUrl: data.imgUrl,
                Text: data.text,
                Author: data.author,
                Tags: data.tags,
            });
        })
    }

    render() {
        const renderEditLink = () => {
            if (this.context.user.UserName) {
                return (
                    <>
                        <Link
                            style={{width: "100%", height: "100%"}}
                            to={`/editArticle/${this.props.match?.params.id}`}
                        >
                            edit
                        </Link>
                    </>
                );
            } else {
                return <></>;
            }
        };
        return (
            <div className="main-wrapper articleView">
                <div>{renderEditLink()}</div>
                <img className="main-img" src={this.state.ImgUrl} alt=""/>
                <div className="tags">
                    {this.state.Tags?.map((e, key) => {
                        return <div key={key}>{e.value}</div>;
                    })}
                </div>
                <h1>{this.state.Title}</h1>
                <div className="articleInfo">
                    {this.state.Created && (
                        <time className="date" dateTime={this.state.Created.toDateString()}>
                            {this.state.Created.getDate()}.{this.state.Created.getMonth() + 1}
                            .{this.state.Created.getFullYear()}
                        </time>
                    )}{" "}
                    /{" " + this.state.Author}
                </div>
                <div
                    className="content"
                    dangerouslySetInnerHTML={{__html: this.state.Text}}
                ></div>
            </div>
        );
    }
}

export default Article;
