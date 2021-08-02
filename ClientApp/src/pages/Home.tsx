import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {fetchJson} from "../services/fetch.service";
import {generateArticles} from "../services/codeGen.service";
import {BigArticleCard} from "../components/BigArticleCard";

function Home() {
    const [Data, setData] = useState<Article[]>([]);
    useEffect(() => {
        fetchJson("api/articles","get").then(data =>{
            data[0].created = new Date(data[0].created)
            setData(data)
        })
    }, []);
    if (Data && Data[0])
        return (
            <div className="main-wrapper">
                <BigArticleCard  id={Data[0].id} title={Data[0].title} tags={Data[0].tags} perex={Data[0].perex} author={Data[0].author}
                                 created={Data[0].created} imgUrl={Data[0].imgUrl} />
                <div className="articles">
                    {generateArticles(Data?.slice(1))}
                </div>
            </div>
        );
    else {
        return <div className="main-wrapper">Loading</div>
    }
}

export default Home;
