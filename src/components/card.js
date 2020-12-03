import React from 'react'

const Card = (props) =>{


    return (
        <div className="credit-card-wrap">
              <div className="logo-chip-wrap">
                <div className="chip">
                  <img src={props.chip} alt="chip"/> 
                </div>
                <div className="logo">
                  <span><i>VISA</i></span>
                </div>
              </div>
              <div className="card-number-wrap">
                <span>{props.number}</span>
              </div>
              <div className="card-holder-expiry-wrap">
                <div className="card-holder">
                  <label>Card Holder</label>
                  <span>{props.name}</span>
                </div>
                <div className="card-expiry">
                  <label>Expires</label>
                  <span>{props.month}/{props.year}</span>
                </div>
              </div>
            </div>
    )
}

export default Card