import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

 articles =  [
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Fiji's main political rivals deadlocked after parliamentary election",
      "description": "Both the Fiji First and the People's Alliance of ex-coup leaders now seek a coalition with a small party.",
      "url": "http://www.bbc.co.uk/news/world-asia-64015600",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D0A6/production/_128041435_452e6d4c-0bc8-4a0a-b11b-f422679ff23f.jpg",
      "publishedAt": "2022-12-18T05:37:19.7873277Z",
      "content": "Fiji's two main rival political parties headed by former coup leaders are deadlocked after Wednesday's general election, final results show.\r\nThe Fiji First of Prime Minister Frank Bainimarama and op… [+1200 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "World Cup 2022: Fans count down the hours to final",
      "description": "Supporters in Buenos Aires and Paris are preparing for a historic clash between Argentina and France..",
      "url": "http://www.bbc.co.uk/news/world-64014608",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C6D8/production/_128040905_argentina1.jpg",
      "publishedAt": "2022-12-18T05:22:23.062345Z",
      "content": "Excited fans in France and Argentina are counting down the hours to what promises to be a memorable World Cup final in Doha. \r\nHistory is on the line for both sides. France are aiming to become just … [+3994 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Tunisia: President Saied urged to resign after 'fiasco' election",
      "description": "Only 8.8% of eligible voters took part in parliamentary elections largely boycotted by the opposition.",
      "url": "http://www.bbc.co.uk/news/world-africa-64015596",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/168FE/production/_128041429_aa9fe32e-f1a4-444a-849c-2c5fcf999d85.jpg",
      "publishedAt": "2022-12-18T01:52:18.6773566Z",
      "content": "Tunisia's main opposition coalition has said President Kais Saied must resign after fewer than 9% of eligible voters took part in parliamentary elections.\r\nThe National Salvation Front head, Nejib Ch… [+1801 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Black Americans' complex response to Harry and Meghan's Netflix series",
      "description": "Many say the series resonated because of their own experiences - but it also raised questions about race.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64009156",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ADD7/production/_127930544_hm-index2-cropped.jpg",
      "publishedAt": "2022-12-18T00:22:19.4679869Z",
      "content": "Media caption, WATCH: A clip from the first episode of the Harry and Meghan Netflix series\r\nBryndis Roberts watched the Harry &amp; Meghan documentary series with tears in her eyes. \r\nAn avid fan of … [+6077 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "P-22, Hollywood's celebrity mountain lion, ends his reign",
      "description": "P-22's charisma and Griffith Park residence made him an icon. Now, he's passed away.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64006005",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1D09/production/_128033470_076728a1-e469-48b2-9d41-9495e845bd3c.jpg",
      "publishedAt": "2022-12-17T20:22:20.2495858Z",
      "content": "It was late at night in Los Angeles, and artist Corie Mattie had indulged in a glass or two of wine when she heard something outside her home. \r\nAt first she thought her brother's Labrador retriever … [+6570 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Taraneh Alidoosti: Top Iran actress who supported protests arrested",
      "description": "Taraneh Alidoosti is accused of \"spreading falsehoods\" about the protest movement gripping Iran.",
      "url": "http://www.bbc.co.uk/news/world-middle-east-64014920",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/63A0/production/_128040552_gettyimages-1053643332.jpg",
      "publishedAt": "2022-12-17T19:37:23.7813782Z",
      "content": "Iranian authorities have arrested one of the country's best known actresses, after she expressed solidarity with anti-government demonstrators.\r\nTaraneh Alidoosti was detained on charges of \"spreadin… [+1944 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Ukraine war: Putin meets generals as reports of offensive grow",
      "description": "Senior Ukrainian commanders say Russia could be planning a new attack on Kyiv early next year.",
      "url": "http://www.bbc.co.uk/news/world-europe-64013052",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C14B/production/_128038494_gettyimages-1245668997.jpg",
      "publishedAt": "2022-12-17T15:52:23.9056139Z",
      "content": "Russian President Vladimir Putin has met with his military chiefs, amid reports that he is seeking to launch a new wave of attacks in Ukraine.\r\nThe Kremlin said he spent most of Friday at the headqua… [+4217 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Berlin AquaDom aquarium: Police not seeking suspects over explosion",
      "description": "Berlin police say a tweet asking for help in tracking down suspects linked to the incident is fake.",
      "url": "http://www.bbc.co.uk/news/world-europe-64010677",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7140/production/_128029982_resize.jpg",
      "publishedAt": "2022-12-17T12:52:24.4371068Z",
      "content": "Media caption, Watch: Scenes of devastation after tank explosion at Berlin hotel\r\nBerlin police say they are not seeking suspects following the explosion of the \"AquaDom\" aquarium on Friday, warning … [+2673 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Shanghai schools to go online as Covid spreads in China",
      "description": "The easing of strict lockdown measures has led to growing concerns over the spread of Covid in China.",
      "url": "http://www.bbc.co.uk/news/world-asia-64010209",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E397/production/_128036285_gettyimages-1297705689.jpg",
      "publishedAt": "2022-12-17T12:07:22.7661132Z",
      "content": "China's largest city, Shanghai, has ordered most of its schools to take classes online as Covid cases soar.\r\nNurseries and childcare centres will also shut from Monday, according to Shanghai's educat… [+2163 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC Sport",
      "title": "Game abandoned after spectator injures player",
      "description": "Saturday's A-League match between Melbourne City and Melbourne Victory is abandoned after a player is injured by a spectator.",
      "url": "http://www.bbc.co.uk/sport/football/64010869",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13027/production/_128036877_gettyimages-1449788942.jpg",
      "publishedAt": "2022-12-17T10:52:20.296034Z",
      "content": "Melbourne City goalkeeper Tom Glover suffered a cut to his face and probable concussion\r\nSaturday's A-League derby between Melbourne City and Melbourne Victory has been abandoned after a player was i… [+746 chars]"
    }
  ];

  constructor(){
    console.log("Hello I am the constructor");
    super();
    this.state = {
      articles : this.articles,
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
      this.setState({articles: parsedData.articles})

  }


  render() {
    console.log("Render")
    return (
      <div className='container my-3'>
        <h2>News-Katta - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return  <div className="col-md-4" key={element.url}>
            <NewsItems  title = {element.title.slice(0,45)}  imageUrl={element.urlToImage} description = {element.description.slice(0,88)} newsUrl = {element.url}/>
            </div>
          })}
         
        </div>
      </div>
    )
  }
}

export default News