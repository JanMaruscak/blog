import React from 'react';
import {ArticleCard} from "../components/ArticleCard";
import {RouteComponentProps} from "react-router";

type ArticleProps = {
    id: string
}

type TParams = { id: string };

function Article({ match }: RouteComponentProps<TParams>) {
    return <div className="main-wrapper">
        <h1>{match.params.id}</h1>
    </div>;
}

/*export const Article = ({id} : ArticleProps)=> {
    return (
        <div className="main-wrapper">
            <h1>{id}</h1>            
        </div>
    );
}*/
export default Article