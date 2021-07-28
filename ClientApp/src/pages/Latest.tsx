import React, {useEffect, useState} from "react";
import {fetchJson} from "../services/fetch.service";
import {generateArticles} from "../services/codeGen.service";

function Latest() {
    const [data, setData] = useState<Article[]>([]);
    useEffect(() => {
        fetchJson("api/articles", "get").then((data) => setData(data))
    }, []);
    return (
        <div className="main-wrapper">
            <h1>Latest</h1>
            <div className="articles">
                {generateArticles(data)}
            </div>
        </div>
    );
}

export default Latest;
