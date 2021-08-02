import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {fetchJson} from "../services/fetch.service";
import {generateArticles} from "../services/codeGen.service";

export const Search = ()=> {
    const [Data, setData] = useState<Article[]>([]);
    const [query, setQuery] = useState<string>("")
    const onClick = (
        event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        fetchJson("api/articles/query", "post", JSON.stringify(query)).then(data => {
            setData(data)
        })
    };
    if (Data && Data[0])
        return (
            <div className="main-wrapper">
                <form className="main-wrapper">
                    <div className="input-wrapper">
                        <input style={{textAlign: "center"}} type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}/>
                    </div>
                    <button type="submit" onClick={onClick}>Search</button>
                </form>
                <div className="articles">
                    {generateArticles(Data)}
                </div>
            </div>
        );
    else {
        return <div className="main-wrapper">
            <form className="main-wrapper">
                <div className="input-wrapper">
                    <input style={{textAlign:"center"}} type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}/>
                </div>
                <button type="submit" onClick={onClick}>Search</button>
            </form></div>
    }
}

export default Search;
