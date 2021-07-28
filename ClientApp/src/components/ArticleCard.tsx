import React from "react";
import {Link} from "react-router-dom";

type ArticleCardProps = {
    id: number;
    title: string;
    tags: Tag[];
    date: Date;
    imgUrl: string;
};

export const ArticleCard = ({
                                id,
                                title,
                                tags,
                                date,
                                imgUrl,
                            }: ArticleCardProps) => {
    return (
        <div className="article" style={{cursor: "pointer"}}>
            <Link className="article-link" to={`/article/${id}`}></Link>
            <img src={imgUrl} alt=""/>
            <div className="article-lower">
                <h3>{title}</h3>
                <div className="article-lower-subInfo">
                    <div className="tags">
                        {tags && tags.map((el, i) => <span key={i}>{el.value}</span>)}
                    </div>
                    {date && (
                        <time className="date" dateTime={date.toDateString()}>
                            {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
                        </time>
                    )}
                </div>
            </div>
        </div>
    );
};
