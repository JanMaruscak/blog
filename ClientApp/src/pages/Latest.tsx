import React from 'react';
import {ArticleCard} from "../components/ArticleCard";

function Latest() {
    return (
        <div className="main-wrapper">
            <h1>Latest</h1>
            <div className="articles">
                <ArticleCard title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
                <ArticleCard title="Useful Git Tips that Every developer Should know" date={new Date()} tags={["Git","Lifestyle","Coding"]} imgUrl="https://www.webnode.cz/blog/files/2012/05/blog2.png" />
            </div>
        </div>
    );
}

export default Latest;
