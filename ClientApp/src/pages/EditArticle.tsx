import React from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {match} from 'react-router-dom';
import InputTag from "../components/InputTag";
import Article from "./ArticlePage";

type MyState = {
    Id?: number,
    Title?: string,
    Tags?: string[],
    Created?: Date,
    ImgUrl?: string,
    Text?: any,
    Data?: Article[],
    Author?: string,
    Perex?: string 
};

interface DetailParams {
    id: string;
}

interface DetailsProps {
    required: string;
    match?: match<DetailParams>;
}
class EditArticle extends React.Component<DetailsProps, MyState> {
    state: MyState = {
        Id: 0,
        Title: "",
        Tags: [],
        Created: new Date(),
        ImgUrl: "",
        Text: "",
        Data: [],
        Author: "",
        Perex: ""

    }

    componentDidMount() {        
        fetch("/api/blogs/"+ this.props.match?.params.id, {
            method: "GET"
        }).then(res => res.json()).then(data => this.setState({Data: data}, () => {
            //console.log(this.state.Data)
            let newTags = []
            console.log(data)
            for (let i = 0; i < data.tags.length; i++) {
                console.log(data.tags[i].value)
                newTags.push(data.tags[i].value)
            }
            console.log(newTags)
            this.setState({
                Id: data.id,
                Title: data.title,
                Created: new Date(Date.parse(data.created)),
                ImgUrl: data.imgUrl,
                Text: data.text,
                Author: data.author,
                Tags: newTags,
                Perex: data.perex
            })
        }))
    }

    editNew = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let tagsObj = []
        if (this.state.Tags)
            for (let i = 0; i < this.state.Tags.length; i++) {
                tagsObj.push({"Value": this.state.Tags[i]})
            }
        let info = {
            Id: this.state.Id,
            Title: this.state.Title,
            ImgUrl: this.state.ImgUrl,
            Tags: tagsObj,
            Created: new Date(),
            Author: this.state.Author,
            Text: this.state.Text,
            Perex: this.state.Perex
        }
        fetch(`/edit`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    };

    render() {
        return (
            <div className="main-wrapper">
                <h1>Edit article {this.state.Id}</h1>
                <form className="main-wrapper" onSubmit={this.editNew}>
                    <div className="input-wrapper">
                        <input placeholder="Title" type="text" name="Title" onChange={this.onChange} value={this.state.Title}/>
                    </div>
                    <div className="input-wrapper">
                        <input placeholder="Image Url" type="text" name="ImgUrl" onChange={this.onChange} value={this.state.ImgUrl}/>
                    </div>
                    <div className="input-wrapper">
                        <input placeholder="Author" type="text" name="Author" onChange={this.onChange} value={this.state.Author}/>
                    </div>
                    <div className="input-wrapper">
                        <input placeholder="Perex" type="text" name="Perex" onChange={this.onChange}
                               value={this.state.Perex}/>
                    </div>
                    <div className="input-wrapper">
                        <InputTag Items={this.state.Tags ? this.state.Tags : []} toggleState={(e, tags) => this.setState({Tags: tags})}/>
                    </div>
                    <div className="input-wrapper">
                        <ReactQuill theme="snow" value={this.state.Text} onChange={(e) => this.setState({Text: e})}/>
                    </div>
                    <button type="submit">Edit article</button>
                </form>
            </div>)
    }
}

export default EditArticle