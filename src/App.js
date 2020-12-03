import React, { Component } from 'react';
import chip from './chipp-logo.jpg';
import './App.css';
import Card from './components/card'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cardNumber:'xxxx xxxx xxxx xxxx',
      cardNumberInput:'',
      cardHolder:'XXXXXXXXXXXXX',
      cardExpiresMonth:'XX',
      cardExpiresYear:'XX'
    }
    this.handleCardNumberChange = this.handleCardNumberChange.bind(this)
  }

  handleCardNumberChange(event){
    let value = event.target.value
    
    if(value === ""){
      this.setState({
        ...this.state,
        cardNumber:'xxxx xxxx xxxx xxxx',
        cardNumberInput:''
      })
    }else{
      value = value.split(" ").join("")
      let length  = value.length
      let forInput = value
      
      if(length < 16){
        for(let i=1; i<= 16 - length; i++){
          value = value + "x"  
        }
      }
      value = value.match(/.{1,4}/g)
      value = value.join(' ')
      forInput = forInput.match(/.{1,4}/g)
      forInput = forInput.join(' ')
  
      this.setState({
        ...this.state,
        cardNumber:value,
        cardNumberInput:forInput
      })
    }
    
  }

  handleNameExpChange(event){
    if(event.target.id === "cardHolderName"){
      this.setState({
        ...this.state,
        cardHolder:event.target.value === ""?"XXXXXXXXXXXXX":event.target.value
      })
    }else if(event.target.id === 'month'){
      this.setState({
        ...this.state,
        cardExpiresMonth:event.target.value === ""?"XX":event.target.value
      })
    }else if(event.target.id === 'year'){
      this.setState({
        ...this.state,
        cardExpiresYear:event.target.value === ""?"XX":event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="outer-wrap">

            <Card chip={chip} 
                  name={this.state.cardHolder} 
                  number={this.state.cardNumber} 
                  month={this.state.cardExpiresMonth} 
                  year={this.state.cardExpiresYear}/>
          </div>
          
          <div className="form-wrap">
            <form action="#">
              <div className="input-wrap">
                <label>Card Number</label>
                <input type="text" maxLength="19" id="cardNumber" value={this.state.cardNumberInput} onChange={(event) => this.handleCardNumberChange(event)}/>
              </div>
              <div className="input-wrap">
                <label >Card Holder Name</label>
                <input type="text" id="cardHolderName" onChange={(event)=>this.handleNameExpChange(event)}/>
              </div>
              <div className="expiry-cvv-wrap">
                <div className="exp-wrap">
                  <label for="lname">Expires</label>
                  <div className="select-wrap">
                    <select id="month" onChange={(event)=>this.handleNameExpChange(event)}>
                        <option value="">MM</option>
                        <option value="JAN">JAN</option>
                        <option value="FEB">FEB</option>
                        <option value="MAR">MAR</option>
                      </select>
                      <select id="year" onChange={(event)=>this.handleNameExpChange(event)}>
                        <option value="">YY</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                      </select>
                  </div>
                </div>
                <div className="cvv-wrap">
                  <label for="">CVV</label>
                  <input type="text" id="cvv" size="number" maxLength="3"/>
                </div>
              </div>
              <input type="submit" value="Submit" className="submit-button"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
