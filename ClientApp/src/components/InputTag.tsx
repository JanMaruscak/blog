import React from 'react'


type MyState = {
    Tags?: string[],
    Input?: string
};
type ChildProps = {
    toggleState: (e: React.MouseEvent, tags: string[]) => void;
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−^^^^^^^^^^^^^^^
}


class InputTag extends React.Component<ChildProps,MyState> {
    state: MyState = {
        Tags: [],
        Input: ""
    }
    submitNew = (e: { preventDefault: () => void; }) => {
/*1        e.preventDefault();
        let info = {
            Tags: [],
        }
        fetch(`/api/blogs`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));*/
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.Tags?.map(function (tag, key) {
                            return (
                                <li key={key}>{tag}</li>)
                        }
                    )}
                </ul>
                <input type="text" name="Input" value={this.state.Input} onChange={this.onChange}/>
                <button type="button" onClick={(event: React.MouseEvent<HTMLElement>) => {
                    let joined = this.state.Tags?.concat(this.state.Input? this.state.Input : "");
                    this.setState({Tags: joined, Input: ""})
                    this.props.toggleState(event, joined ? joined : [])
                }}>Add</button>
            </div>
        )
    }
}

export default InputTag