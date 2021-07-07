import React from 'react';
import {ArticleCard} from "../components/ArticleCard";

type ArticleData ={
    Data: ObjectData[]
}
type ObjectData = {
    id: number,
    title: string,
    imgUrl:string,
    created: Date,
    tags: string[]
    
}

class Browse extends React.Component<any> {
    state: ArticleData={
        Data: []
    }
    componentDidMount() {
        fetch("api/blogs", {
            method: "GET"
        }).then(res => res.json()).then(data => this.setState({Data: data},()=>{
            console.log(this.state.Data)
        }))
        
    }

    render() {
        return (
            
            <div className="main-wrapper">
                <div className="articles">
                    {this.state.Data.map(function(obj,id){
                        console.log("prdel")
                        console.log(obj)
                        return(
                        <ArticleCard key={obj.id} id={obj.id} title={obj.title} date={new Date()}
                                     tags={obj.tags}
                                     imgUrl={obj.imgUrl}/>)}        
                    )}
                </div>
            </div>
        );
    }
    
}

export default Browse;
