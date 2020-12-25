import React from 'react';

type ArticleProps = {
    title: string,
    tags: Array<string>,
    date: Date,
    imgUrl: string
}

export const Article = ({title, tags,date,imgUrl} : ArticleProps)=> {
    return (
        <div className="article">
            <img src={imgUrl} alt=""/>
            <div className="article-lower">
                <h3>{title}</h3>
                <div className="article-lower-subInfo">
                    <div className="tags">
                        {tags.map((el,i)=> <span key={i}>{el}</span> )}
                    </div>
                    <p className="date">{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</p>
                </div>    
            </div>
        </div>
    );
}
