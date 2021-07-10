﻿import React from 'react';
import {Link, match} from 'react-router-dom';

interface DetailParams {
    id: string;
}

interface DetailsProps {
    required: string;
    match?: match<DetailParams>;
}
type MyState = {
    Title?: string,
    Tags?: string[],
    Created?: Date,
    ImgUrl?: string,
    Text?: any,
    Data?: ObjectData[],
    Author?: string
};
type ObjectData = {
    id: number,
    title: string,
    imgUrl: string,
    created: Date,
    tags: string[],
    author: string

}

class Article extends React.Component<DetailsProps, MyState> {
    state: MyState = {
        Title: "",
        Tags: [],
        Created: new Date(),
        ImgUrl: "",
        Text: "",
        Data: [],
        Author: ""

    }
    componentDidMount() {
        fetch("/api/blogs/" + this.props.match?.params.id, {
            method: "GET"
        }).then(res => res.json()).then(data => this.setState({Data: data}, () => {
            this.setState({
                Title: data.title,
                Created: new Date(Date.parse(data.created)),
                ImgUrl: data.imgUrl,
                Text: data.text,
                Author: data.author
            })
        }))
    }
        render(){
            return (
                <div className="main-wrapper articleView">
                    <div>
                        <Link style={{width: '100%', height: '100%'}}
                              to={`/editArticle/${this.props.match?.params.id}`}>
                            edit
                        </Link>
                    </div>
                    <img className="main-img" src={this.state.ImgUrl} alt=""/>
                    <h1>{this.state.Title}</h1>
                    <div className="articleInfo">
                    {
                        this.state.Created && 
                        <time className="date" dateTime={this.state.Created.toDateString()}>{this.state.Created.getDate()}.{this.state.Created.getMonth()}.{this.state.Created.getFullYear()}</time>}
                        {" "}
                        /
                        {" "+this.state.Author}</div>
                    <div className="content" dangerouslySetInnerHTML={{__html: this.state.Text}}></div>
                </div>
            )
        }
}
export default Article