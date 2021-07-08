import React from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


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
        const data = new FormData();
        data.append("title",this.state.Title)
        let info = {
            Title: this.state.Title,
            ImgUrl: this.state.ImgUrl,
            Tags: [],
            Created: new Date(),
            Author: this.state.Author,
            Text: this.state.Text
        }
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
        <form onSubmit={this.submitNew}>
            <div>
                <label htmlFor="Title">Name:</label>
                <input type="text" name="Title" onChange={this.onChange} value={this.state.Title}/>
            </div>
            <div>
                <label htmlFor="ImgUrl">ImgUrl:</label>
                <input type="text" name="ImgUrl" onChange={this.onChange} value={this.state.ImgUrl}/>
            </div>
            <ReactQuill theme="snow" value={this.state.Text} onChange={(e) => this.setState({Text: e})}/>
            <button>Send</button>
        </form>)
    }
}
export default AddArticle