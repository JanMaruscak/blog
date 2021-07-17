import React from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import InputTag from "../components/InputTag";


type MyState = {
    Title: string,
    Tags: string[],
    Created: Date,
    ImgUrl: string,
    Text: any,
    Author: string
};

class AddArticle extends React.Component<MyState>{ 
    state : MyState = {
        Title: "",
        Tags: [],
        Created: new Date(),
        ImgUrl: "",
        Text: "",
        Author: ""
        
    }
    submitNew = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let tagsObj = [
        ]
        for (let i = 0; i < this.state.Tags.length; i++) {
            tagsObj.push({"Value":this.state.Tags[i]})
        }
        let info = {
            Title: this.state.Title,
            ImgUrl: this.state.ImgUrl,
            Tags: tagsObj,
            Created: new Date(),
            Author: this.state.Author,
            Text: this.state.Text
        }
        console.log(info)
        fetch(`/api/blogs`, {
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
            <h1>Add article</h1>
            <form className="main-wrapper" onSubmit={this.submitNew}>
                <div className="input-wrapper">
                    <input placeholder="Title" type="text" name="Title" onChange={this.onChange} value={this.state.Title}/>
                </div>
                <div className="input-wrapper">
                    <input placeholder="Image Url" type="text" name="ImgUrl" onChange={this.onChange} value={this.state.ImgUrl}/>
                </div>
                <div className="input-wrapper">
                    <label>Tags:</label>
                    <InputTag Items={this.state.Tags} toggleState={(e, tags) => this.setState({Tags:tags})} />
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