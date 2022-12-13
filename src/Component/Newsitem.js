import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let { title, discription, imgurl, newsUrl,author} = this.props;

    return (

      <div className="card" style={{ width: '18rem' }}>
        <img src={!imgurl ? "https://media.wired.com/photos/6369782f3505151fbc0b01cd/191:100/w_1280,c_limit/WI110122_EX_Tracers_AlphaBay2_01.jpg" : imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" >{title}</h5>
          <p className="card-text">{discription}</p>
          <p className="card-text"   ><small className="text-danger">{!author?'Unknown':author} at { new Date().toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target={'_blank'} className="btn btn-sm btn-primary">Read More..</a>
      </div>


      </div>

    )
  }
}

