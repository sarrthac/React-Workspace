import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

  constructor(){
    console.log("Hello I am the constructor");
    super();
    this.state = {
      articles : [],
    }
  };

  async componentDidMount(){
      console.log("cdm");

      //url is the endpoint to get top headline news of india 
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a21c1b7798e84923acd119b32769d327";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      //setting the state
      this.setState({ articles: parsedData.articles})

  }


  render() {
    console.log("Render")
    return (
      <div className='container my-3'>
        <h1>News-Katta - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return  <div className="col-md-4" key={element.url}>
            <NewsItems  title = {element.title?element.title.slice(0,45):""}  imageUrl={element.urlToImage} description = {element.description?element.description.slice(0,88):""} newsUrl = {element.url}/>
            </div>
          })}
         
        </div>
      </div>
    )
  }
}

export default News