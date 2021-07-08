import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from "react-router";

type TParams = { id: string };

function Article({ match }: RouteComponentProps<TParams>) {
    const [Data, setData] = useState({});
    const [article, setArticle] = useState();
    useEffect(() => {
        console.log("useEffect")
        fetch("/api/blogs/" + match.params.id, {
            method: "GET"
        }).then(res => res.json()).then(data => setData(data), () => {
            console.log("hey")
            console.log(Data)
        })
    }, [match.params.id]);
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