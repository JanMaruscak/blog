import React from 'react'


type MyState = {
    Title: string,
    Tags: string[],
    Created: Date,
    ImgUrl: string,
    Texts: string[],
    Images: string[]
};

class AddArticle extends React.Component<MyState>{ 
    state : MyState = {
        Title: "",
        Tags: [],
        Created: new Date(),
        ImgUrl: "",
        Texts: [],
        Images: []
        
    }
    submitNew = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const data = new FormData();
        data.append("title",this.state.Title)
        let info = {
            Title: this.state.Title
        }
        fetch(`/api/blogs`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.Title)
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({Title: e.currentTarget.value});
    };
    render() {
        return (
        <form onSubmit={this.submitNew}>
            <div>
                <label htmlFor="title">Name:</label>
                <input type="text" name="title" onChange={this.onChange}
                       value={this.state.Title === '' ? '' : this.state.Title}/>
            </div>
            <button>Send</button>
        </form>)
    }
}
export default AddArticle