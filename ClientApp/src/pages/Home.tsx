import React, {useEffect, useState} from 'react';
import {ArticleCard} from "../components/ArticleCard";
import {Link} from "react-router-dom";

function Home() {
    const [Data, setData] = useState<Article[]>([]);
    const [date, setDate] = useState<Date>(new Date())
    useEffect(() => {
        fetch("api/blogs", {
            method: "GET"
        }).then(res => res.json()).then(data => {
            setData(data)
            console.log(data)
            if (data && data[0]) {
                let newDate = new Date(data[0].created)
                setDate(newDate)
            }
        })
    }, [fetch]);
    if(Data && Data[0])
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
                    {Data[0].tags.map((tag,key) => {
                        return <div key={key} >{tag.value}</div>
                    })}
                    </div>

                    <div className="articleInfo">
                        {date && <time className="date" dateTime={date.toDateString()}>{date.getDate()}.{date.getMonth()+1}.{date.getFullYear()}{" "}</time>
                        }/
                        {" "+Data[0].author}           
                    </div>
                </div>
            </div>
            <div className="articles">
                {Data?.slice(1).map(function (obj) {
                        return (
                            <ArticleCard key={obj.id} id={obj.id} title={obj.title} date={new Date(obj.created)}
                                         tags={obj.tags}
                                         imgUrl={obj.imgUrl}/>)
                    }
                )}
            </div>
        </div>
    );
    else{
        return <div className="main-wrapper">Loading</div>
    }
}

export default Home;
