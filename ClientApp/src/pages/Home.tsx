import React, {useEffect, useState} from 'react';
import {ArticleCard} from "../components/ArticleCard";

type Tag = {
    id: number,
    value: string
}
type ObjectData = {
    id: number,
    title: string,
    imgUrl: string,
    created: string,
    tags: Tag[],
    author: string
}
function Home() {
    const [Data, setData] = useState<ObjectData[]>([]);
    const [date, setDate] = useState<Date>(new Date())
    useEffect(() => {
        fetch("api/blogs", {
            method: "GET"
        }).then(res => res.json()).then(data => setData(data),()=>{
            console.log(Data[0])
            console.log("Data[0]")
            let newDate = new Date(Date.parse(Data[0].created))
            setDate(newDate)
        })
    }, []);
    if(Data && Data[0])
    return (
        <div className="main-wrapper">
            <div className="home-article">
                <div className="home-article-left">
                    <img src={Data[0].imgUrl} alt=""/>                    
                </div>
                <div className="home-article-right">
                    <h1>{Data[0].title}</h1>
                    <div className="tags">
                    {Data[0].tags.map((tag,key) => {
                        return <div key={key} >{tag.value}</div>
                    })}
                    </div>

                    <div className="articleInfo">
                        {date && <time className="date"
                                       dateTime={date.toDateString()}>{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</time>
                        }/
                        {Data[0].author}           
                    </div>
                </div>
            </div>
            <div className="articles">
                {Data?.slice(1).map(function (obj) {
                        return (
                            <ArticleCard key={obj.id} id={obj.id} title={obj.title} date={new Date(Date.parse(obj.created))}
                                         tags={obj.tags}
                                         imgUrl={obj.imgUrl}/>)
                    }
                )}
            </div>
        </div>
    );
    else{
        return <>Loading</>
    }
}

export default Home;
