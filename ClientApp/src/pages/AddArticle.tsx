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
        <form className="main-wrapper" onSubmit={this.submitNew}>
            <div>
                <label htmlFor="Title">Name:</label>
                <input type="text" name="Title" onChange={this.onChange} value={this.state.Title}/>
            </div>
            <div>
                <label htmlFor="ImgUrl">ImgUrl:</label>
                <input type="text" name="ImgUrl" onChange={this.onChange} value={this.state.ImgUrl}/>
            </div>
            <InputTag Items={[]} toggleState={(e, tags) => this.setState({Tags:tags})} />
            <ReactQuill theme="snow" value={this.state.Text} onChange={(e) => this.setState({Text: e})}/>
            <button>Send</button>
        </form>)
    }
}
export default AddArticle