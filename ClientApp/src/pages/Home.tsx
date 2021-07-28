import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {fetchJson} from "../services/fetch.service";
import {generateArticles} from "../services/codeGen.service";

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
                <div className="home-article">

                    <Link className="article-link" to={`/article/${Data[0].id}`}>
                    </Link>
                    <div className="home-article-left">
                        <img src={Data[0].imgUrl} alt=""/>
                    </div>
                    <div className="home-article-right">
                        <h1>{Data[0].title}</h1>
                        <div className="perex">{Data[0].perex}</div>
                        <div className="tags">
                            {Data[0].tags.map((tag, key) => {
                                return <div key={key}>{tag.value}</div>
                            })}
                        </div>

                        <div className="articleInfo">
                            {Data[0].created && <time className="date"
                                           dateTime={Data[0].created.toDateString()}>{Data[0].created.getDate()}.{Data[0].created.getMonth() + 1}.{Data[0].created.getFullYear()}{" "}</time>
                            }/
                            {" " + Data[0].author}
                        </div>
                    </div>
                </div>
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
