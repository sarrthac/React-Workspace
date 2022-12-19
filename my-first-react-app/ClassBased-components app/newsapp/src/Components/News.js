import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

  constructor(){
    console.log("Hello I am the constructor");
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1
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
      this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults})

  }


  // In the below code we have used the if-else statement to use the function 
  // only if the next page exists otherwise it won’t be executed. Now if the
  //  function is executed then the state of the page will be updated by 1.
  handleNextClick = async() => {
    console.log("next Button");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults / 20)){
       //meaning - if the page number is greater than the Math.ceil(this.state.totalResults / 20) then nothing will happen
    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a21c1b7798e84923acd119b32769d327&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
        })
    }
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a21c1b7798e84923acd119b32769d327&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })
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
        <div className="container d-flex justify-content-between">
         <button type='button' button disabled={this.state.page<=1} className='btn btn-light' onClick={this.handlePrevClick} > &larr; Previous</button>
         <button type='button' button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className='btn btn-light' onClick={this.handleNextClick}>  Next &rarr;</button> 
        </div>
      </div>
    )
  }
}

export default News