import React from 'react';

type ArticleCardProps = {
    title: string,
    tags: Array<string>,
    date: Date,
    imgUrl: string
}

export const ArticleCard = ({title, tags,date,imgUrl} : ArticleCardProps)=> {
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
