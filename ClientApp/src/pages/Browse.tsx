import React from 'react';
import {ArticleCard} from "../components/ArticleCard";

type ArticleData ={
    Data: ObjectData[]
}
type Tag ={
    id: number,
    value: string
}
type ObjectData = {
    id: number,
    title: string,
    imgUrl:string,
    created: string,
    tags: Tag[]    
}

class Browse extends React.Component<any> {
    state: ArticleData={
        Data: []
    }
    componentDidMount() {
        fetch("api/blogs", {
            method: "GET"
        }).then(res => res.json()).then(data => this.setState({Data: data}))        
    }
    render() {
        return (
            
            <div className="main-wrapper">
                <div className="articles">
                    {this.state.Data.map(function(obj){
                        return(
                        <ArticleCard key={obj.id} id={obj.id} title={obj.title} date={new Date(Date.parse(obj.created))}
                                     tags={obj.tags}
                                     imgUrl={obj.imgUrl}/>)}        
                    )}
                </div>
            </div>
        );
    }
    
}

export default Browse;
