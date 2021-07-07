import React, { Component } from "react";
import logo from "./images/1f.jpg";

function datefunction(dateString) {
  return new Date(dateString).toDateString();
}

const NewsItem = ({ newsitem }) => (
  <div style={{ marginTop: 20 }}>
     <div className="row">
     <div className="col s12">
      <div className="card">
        <div className="card-image">
          {newsitem.urlToImage && (
            <img src={newsitem.urlToImage} alt="news image" style={{ height: 400 }} />
          )}

          <a href="" target="_blank" rel="noopener noreferrer">
            <span className="card-title" style={{ color: "white" }}>
              {newsitem.title}
            </span>
          </a>
          <a
            className="btn-floating halfway-fab waves-effect waves-light"
            style={{ backgroundColor: "#6aadce" }}
          >
            <i className="material-icons">face</i>
          </a>
        </div>

        <div className="card-content">
          <a href={newsitem.url}>
            <p style={{ color: "black" }}>{newsitem.content} </p>
          </a>
        </div>
        <div className="row">
          <div className="col s5">
            <strong style={{ margin: 6 }}>
              Published At <i>{datefunction(newsitem.publishedAt)} </i>
            </strong>
          </div>
          <div className="col s5 offset-s2">
            <a href="">
              <button
              
                className="btn"
                style={{ background: "black", marginBottom: 15,fontSize:10}}
              >
                 {newsitem.source.name}
                <i style={{fontSize:10}}></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
     </div>
  </div>
);

class NewsList extends React.Component {
  state = {};
  render() {
    const { newsList } = this.props;
    return (
      <div className="row">
        {newsList && newsList.length === 0 && <h4>There are no News</h4>}
        {newsList &&
          newsList.map((item) => <NewsItem newsitem={item} key={item.title} />)}
      </div>
    );
  }
}

export default NewsList;
