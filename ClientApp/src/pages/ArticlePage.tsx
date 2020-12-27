import React from 'react';
import {ArticleCard} from "../components/ArticleCard";

type ArticleProps = {
    title: string,
    tags: Array<string>,
    date: Date,
    imgUrl: string,
    contents: Array<Content>
}

export const Article = ({title, tags,date,imgUrl, contents} : ArticleProps)=> {
    return (
        <div className="main-wrapper">
            <h1>{title}</h1>            
        </div>
    );
}
