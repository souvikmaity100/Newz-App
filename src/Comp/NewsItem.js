import React, { Component } from 'react'

export default class NewsItem extends Component {


    render() {
        let { Title, Description, imgUrl, newsUrl, author, date } = this.props;
        return (
            <div className="card my-2">
                <img src={imgUrl} className="card-img-top" alt="No image avalible" style={{ height: '12rem' }} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title">{Title}</h5>
                        <p className="card-text">{Description}</p>
                    </div>
                    <div>
                        <p className="card-text"><small className="text-body-secondary">By <span className='text-primary'>{author ? author : "Unknown"}</span> on {date}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
