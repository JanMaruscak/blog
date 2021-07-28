import React from "react";

type MyState = {
    Tags?: Tag[];
    Input?: string;
};
type ChildProps = {
    toggleState: (e: React.MouseEvent, tags: Tag[]) => void;
    Items: Tag[];
};

class InputTag extends React.Component<ChildProps, MyState> {
    state: MyState = {
        Tags: this.props.Items,
        Input: "",
    };

    componentDidUpdate(prevProps: ChildProps) {
        if (this.props.Items !== prevProps.Items) {
            this.setState({Tags: this.props.Items});
        }
    }

    componentDidMount() {
        this.setState({Tags: this.props.Items});
    }

    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    };
    addTag = (event: React.MouseEvent<HTMLElement>): void => {
        let joined = this.state.Tags?.concat(
            this.state.Input ? {
                    value: this.state.Input,
                    id: 0
                } :
                {
                    id: 0,
                    value: ""
                }
        );
        this.setState({Tags: joined, Input: ""});
        this.props.toggleState(event, joined ? joined : []);
    };

    removeTag(event: React.MouseEvent<HTMLElement>, tag: Tag) {
        const newList = this.state.Tags?.filter((item) => item !== tag);
        this.setState({Tags: newList});
        this.props.toggleState(event, newList ? newList : []);
    }

    render() {
        return (
            <div className="input-wrapper">
                <ul>
                    {this.state.Tags?.map((tag, key) => {
                        return (
                            <>
                                <li key={key}>{tag.value}</li>
                                <button type="button" onClick={(e) => this.removeTag(e, tag)}>
                                    Remove
                                </button>
                            </>
                        );
                    })}
                </ul>
                <input
                    placeholder="Tag Name"
                    type="text"
                    name="Input"
                    value={this.state.Input}
                    onChange={this.onChange}
                />
                <button type="button" onClick={this.addTag}>
                    Add
                </button>
            </div>
        );
    }
}

export default InputTag;
