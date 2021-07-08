import React from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {match} from 'react-router-dom';

type MyState = {
    Id?: number,
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
        Author: ""

    }
    componentDidMount() {
        fetch("/api/blogs/"+ this.props.match?.params.id, {
            method: "GET"
        }).then(res => res.json()).then(data => this.setState({Data: data}, () => {
            console.log(this.state.Data)
            this.setState({
                Id: data.id,
                Title: data.title,
                Created: new Date(Date.parse(data.created)),
                ImgUrl: data.imgUrl,
                Text: data.text,
                Author: data.author
            })
        }))
    }

    editNew = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", this.state.Title ? this.state.Title : '')
        let info = {
            Id: this.state.Id,
            Title: this.state.Title,
            ImgUrl: this.state.ImgUrl,
            Tags: [],
            Created: new Date(),
            Author: this.state.Author,
            Text: this.state.Text
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
            <form onSubmit={this.editNew}>
                <div>
                    <label htmlFor="Title">Name:</label>
                    <input type="text" name="Title" onChange={this.onChange} value={this.state.Title}/>
                </div>
                <div>
                    <label htmlFor="ImgUrl">ImgUrl:</label>
                    <input type="text" name="ImgUrl" onChange={this.onChange} value={this.state.ImgUrl}/>
                </div>
                <div>
                    <label htmlFor="Author">Author:</label>
                    <input type="text" name="Author" onChange={this.onChange} value={this.state.Author}/>
                </div>
                <ReactQuill theme="snow" value={this.state.Text} onChange={(e) => this.setState({Text: e})}/>
                <button>Send</button>
            </form>)
    }
}

export default EditArticle