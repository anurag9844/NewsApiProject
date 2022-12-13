import React, { Component } from 'react'
import Newsitem from './Newsitem'
import propType from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component"

export default class News extends Component {


  static defultprops = {
    country: 'in',
    pageSize: 20,
    categories: 'health'
  };
  static propType = {
    country: propType.string,
    pazeSize: propType.number,
    categories: propType.string
  };


  capitalizedfun =(strings)=>{
    return strings.charAt(0).toUpperCase()+ strings.slice(1);
  }


  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      //  totalResults:0
    }
    document.title=`${this.capitalizedfun(this.props.category)}-KapucheNews`;
  }


  async update() {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8006c4cbde364cb794ed27d2d6cbc064&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
     
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      })
    }
  }


  async componentDidMount() {
     this.update();
  }

  // handleNextClick = async () => {
  //   this.update();
  //   this.setState({
  //     page: this.state.page + 1
  //   });
  // }
  

  // handlePreviousClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1
  //   });
  //   this.update();
  // }

  fetchMoreData = async() => {
      this.setState({page:this.state.page+1});
      if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8006c4cbde364cb794ed27d2d6cbc064&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
       
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          articles:this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults, 
          // loading: false
        })
      }
  };


  render() {
    return (
      <div className='container my-4 '>
        <h2 className="text-center" style={{ margin: '30px 0px' }}>KapucheNews - Top  {this.capitalizedfun(this.props.category)} Headlines</h2>
       
        {/* {this.state.loading && <Spinner />} */}

      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          { this.state.articles.map((element) => {
            return <div className="col md-4" key={element.url}>
              <Newsitem title={element.title ? element.title.slice(0, 35) : ''} discription={element.description ? element.description.slice(0, 80) : ''} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
            </div>
          })}
        </div>
        </div>
      </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark  " onClick={this.handlePreviousClick}> &larr; Preview</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}

      </div>
    )
  }
}
