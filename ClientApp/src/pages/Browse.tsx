import React from "react";
import { ArticleCard } from "../components/ArticleCard";

type ArticleData = {
  Data: Article[];
};

class Browse extends React.Component<any> {
  state: ArticleData = {
    Data: [],
  };
  componentDidMount() {
    fetch("api/blogs", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => this.setState({ Data: data }));
  }
  render() {
    return (
      <div className="main-wrapper">
        <h1>Browse</h1>
        <div className="articles">
          {this.state.Data.map(function (obj) {
            return (
              <ArticleCard
                key={obj.id}
                id={obj.id}
                title={obj.title}
                date={obj.created}
                tags={obj.tags}
                imgUrl={obj.imgUrl}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Browse;
