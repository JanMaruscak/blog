import React from 'react';
import {ArticleCard} from "../components/ArticleCard";

function Latest() {
    return (
        <div className="main-wrapper">
            <audio src="../video/audio.m4a" controls/>
            
            <h1>Latest</h1>
            <div className="articles">
                <ArticleCard id={1} title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard id={2} title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard id={3} title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard id={4} title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard id={4} title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard id={4} title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard id={4} title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard id={4} title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard id={4} title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard id={4} title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
            </div>
        </div>
    );
}

export default Latest;
