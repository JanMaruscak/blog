import React, { useEffect, useState } from "react";
import { ArticleCard } from "../components/ArticleCard";

type Tag = {
  id: number;
  value: string;
};
type ObjectData = {
  id: number;
  title: string;
  imgUrl: string;
  created: string;
  tags: Tag[];
};

function Latest() {
  const [data, setData] = useState<ObjectData[]>([]);
  useEffect(() => {
    fetch("api/blogs", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="main-wrapper">
      <h1>Latest</h1>
      <div className="articles">
        {data?.map(function (obj) {
          return (
            <ArticleCard
              key={obj.id}
              id={obj.id}
              title={obj.title}
              date={new Date(Date.parse(obj.created))}
              tags={obj.tags}
              imgUrl={obj.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Latest;
