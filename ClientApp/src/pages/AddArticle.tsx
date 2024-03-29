import React from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import InputTag from "../components/InputTag";
import {fetchJson} from "../services/fetch.service";


class AddArticle extends React.Component<StateArticle> {
    state: StateArticle = {
        Title: "",
        Tags: [],
        Created: new Date(),
        ImgUrl: "",
        Text: "",
        Author: "",
        Perex: ""
    }
    submitNew = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let info = {
            Title: this.state.Title,
            ImgUrl: this.state.ImgUrl,
            Tags: this.state.Tags,
            Created: new Date(),
            Author: this.state.Author,
            Text: this.state.Text,
            Perex: this.state.Perex
        }
        fetchJson("api/articles/post", "post", JSON.stringify(info)).then(r  => console.log(r))
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    };

    render() {
        return (
            <div className="main-wrapper">
                <h1>Add article</h1>
                <form className="main-wrapper" onSubmit={this.submitNew}>
                    <div className="input-wrapper">
                        <input placeholder="Title" type="text" name="Title" onChange={this.onChange}
                               value={this.state.Title}/>
                    </div>
                    <div className="input-wrapper">
                        <input placeholder="Image Url" type="text" name="ImgUrl" onChange={this.onChange}
                               value={this.state.ImgUrl}/>
                    </div>
                    <div className="input-wrapper">
                        <input placeholder="Author" type="text" name="Author" onChange={this.onChange}
                               value={this.state.Author}/>
                    </div>
                    <div className="input-wrapper">
                        <input placeholder="Perex" type="text" name="Perex" onChange={this.onChange}
                               value={this.state.Perex}/>
                    </div>
                    <div className="input-wrapper">
                        <label>Tags:</label>
                        <InputTag Items={this.state.Tags ? this.state.Tags : []}
                                  toggleState={(e, tags) => this.setState({Tags: tags})}/>
                    </div>
                    <div className="input-wrapper">
                        <ReactQuill theme="snow" value={this.state.Text} onChange={(e) => this.setState({Text: e})}/>
                    </div>
                    <button type="submit">Post article</button>
                </form>
            </div>)
    }
}

export default AddArticle