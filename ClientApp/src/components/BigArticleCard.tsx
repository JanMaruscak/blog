import React from "react";
import {Link} from "react-router-dom";

export const BigArticleCard = ({
                                id,
                                title,
                                tags,
                                created,
                                imgUrl,
                                perex,
    author
                            }: Article) => {
    return (
        <div className="home-article">

            <Link className="article-link" to={`/article/${id}`}>
            </Link>
            <div className="home-article-left">
                <img src={imgUrl} alt=""/>
            </div>
            <div className="home-article-right">
                <h1>{title}</h1>
                <div className="perex">{perex}</div>
                <div className="tags">
                    {tags.map((tag, key) => {
                        return <div key={key}>{tag.value}</div>
                    })}
                </div>

                <div className="articleInfo">
                    {created && <time className="date"
                                              dateTime={created.toDateString()}>{created.getDate()}.{created.getMonth() + 1}.{created.getFullYear()}{" "}</time>
                    }/
                    {" " + author}
                </div>
            </div>
        </div>
    );
};
