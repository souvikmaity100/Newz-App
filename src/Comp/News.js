import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

    constructor() {
        super();
        // console.log("Hello this is constructor from news cmponents");
        this.state = {
            articles: [],
            loding: false,
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb3c103819844d2bb04fdeda24baca97&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loding: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ 
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loding: false
         });
    }

    handelPreviousClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb3c103819844d2bb04fdeda24baca97&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loding: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loding: false
        })
    }
    handelNextClick = async ()=>{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb3c103819844d2bb04fdeda24baca97&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loding: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loding: false
            })
    }

    render() {
        return (
            <div className='container my-2'>
                <h2 className='text-center'>NewsZone - Top Headlines {this.props.heading}</h2>
                {this.state.loding && <Spinner/>}
                <div className='row my-2 '>
                    {this.state.articles.map((element) => {
                        return <div key={element.url} className='col-md-4 d-flex justify-content-between'>
                            <NewsItem Title={element.title ? element.title.slice(0, 45).concat('...') : "No title Avalible"} Description={element.description ? element.description.slice(0, 100).concat('....') : "No description Avalible"} imgUrl={element.urlToImage ? element.urlToImage : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt.slice(0,10)}/>
                        </div>
                    })}

                </div>
                <div className='d-flex justify-content-between'>
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPreviousClick}><i className="fa-solid fa-arrow-left"></i> previous</button>
                    <button disabled={!(this.state.page < Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handelNextClick}>next <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        )
    }
}
