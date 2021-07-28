import {ArticleCard} from "../components/ArticleCard";
import React from "react";

export function generateArticles(articles: Article[]) {
    return (
        articles.map(function (obj) {
            return (
                <ArticleCard
                    key={obj.id}
                    id={obj.id}
                    title={obj.title}
                    date={new Date(obj.created)}
                    tags={obj.tags}
                    imgUrl={obj.imgUrl}
                />
            );
        }))
}